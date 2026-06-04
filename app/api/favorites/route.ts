import { authOptions } from "@/lib/auth";
import { addFavorite, getFavoritesByUserId } from "@/lib/favorites";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 },
      );
    }

    const favorites = await getFavoritesByUserId(session.user.id);

    return NextResponse.json({ favorites }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 },
      );
    }

    const body = await req.json();
    const rawgId = Number(body.rawgId);
    const name = body.name;
    const imageUrl = body.imageUrl;

    if (!Number.isFinite(rawgId) || typeof name !== "string" || !name) {
      return NextResponse.json(
        { error: "rawgId (number) and name (string) are required." },
        { status: 400 },
      );
    }

    const favorite = await addFavorite(
      session.user.id,
      rawgId,
      name,
      typeof imageUrl === "string" ? imageUrl : undefined,
    );

    return NextResponse.json({ favorite }, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
import { authOptions } from "@/lib/auth";
import { removeFavorite } from "@/lib/favorites";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ rawgId: string }> },
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { rawgId: rawgIdParam } = await params;
    const rawgId = Number(rawgIdParam);

    if (!Number.isFinite(rawgId)) {
      return NextResponse.json({ error: "Invalid game id." }, { status: 400 });
    }

    await removeFavorite(session.user.id, rawgId);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}

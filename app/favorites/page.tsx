import { GameGrid } from "@/components/GameGrid";
import { authOptions } from "@/lib/auth";
import { getFavoritesByUserId } from "@/lib/favorites";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function FavoritesPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    redirect("/login?callbackUrl=/favorites");
  }

  const favorites = await getFavoritesByUserId(session.user.id);

  return (
    <main className="p-8">
      <header className="mb-8">
        <h1 className="text-4xl font-extrabold capitalize text-gray-900">
          My Favorites
        </h1>
      </header>
      {favorites.length === 0 ? (
        <p className="text-gray-600">No favorites yet.</p>
      ) : (
        <GameGrid games={favorites.map((favorite) => ({ id: favorite.rawgId, name: favorite.name, background_image: favorite.imageUrl || "", rating: 0 }))} />
      )}
    </main>
  );
}

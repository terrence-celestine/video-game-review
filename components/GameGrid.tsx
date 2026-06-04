"use client";

import type { Game } from "@/const/interface";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

type FavoriteRow = { rawgId: number; name: string; imageUrl: string | null };

export function GameGrid({ games }: { games: Game[] }) {
  const { data: session } = useSession();
  const [favorites, setFavorites] = useState<FavoriteRow[]>([]);

  useEffect(() => {
    if (!session?.user?.id) {
      setFavorites([]);
      return;
    }

    async function loadFavorites() {
      const res = await fetch("/api/favorites");
      if (!res.ok) return;
      const data: { favorites: FavoriteRow[] } = await res.json();
      setFavorites(data.favorites);
    }

    void loadFavorites();
  }, [session?.user?.id]);

  const isFavorite = (rawgId: number) =>
    favorites.some((favorite) => favorite.rawgId === rawgId);

  const handleRemoveFavorite = async (rawgId: number) => {
    const res = await fetch(`/api/favorites/${rawgId}`, { method: "DELETE" });
    if (!res.ok) return;
    setFavorites((prev) => prev.filter((favorite) => favorite.rawgId !== rawgId));
  };

  const handleAddFavorite = async (
    rawgId: number,
    name: string,
    imageUrl: string,
  ) => {
    const res = await fetch("/api/favorites", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ rawgId, name, imageUrl }),
    });
    if (!res.ok) return;
    setFavorites((prev) => [...prev, { rawgId, name, imageUrl }]);
  };

  const isLoggedIn = Boolean(session?.user?.id);

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {games.map((game: Game) => (
        <div
          key={game.id}
          className="flex flex-col overflow-hidden bg-white border border-gray-200 rounded-2xl shadow-sm transition-transform hover:scale-[1.02] hover:shadow-md"
        >
          <div
            className="h-40 bg-gray-200"
            style={{
              backgroundImage: `url(${game.background_image})`,
              backgroundSize: "cover",
            }}
          />
          <div className="p-5">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-bold text-gray-900">{game.name}</h2>
              <span className="px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 rounded-full">
                {game.rating}
              </span>
              {isLoggedIn && (
                <button
                  type="button"
                  onClick={() =>
                    void (isFavorite(game.id)
                      ? handleRemoveFavorite(game.id)
                      : handleAddFavorite(
                          game.id,
                          game.name,
                          game.background_image,
                        ))
                  }
                  className="ml-2 px-3 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                >
                  {isFavorite(game.id)
                    ? "Remove from Favorites"
                    : "Add to Favorites"}
                </button>
              )}
            </div>
            <a
              href={`/game/${game.id}`}
              className="mt-4 block w-full text-center px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
            >
              View Details
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

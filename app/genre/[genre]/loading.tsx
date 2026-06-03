// src/app/genre/[genre]/loading.tsx
import GameSkeleton from "@/components/GameSkeleton";

export default function Loading() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Loading games...</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <GameSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}
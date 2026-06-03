// src/components/GameSkeleton.tsx
export default function GameSkeleton() {
    return (
      <div className="border rounded-xl p-4 animate-pulse">
        <div className="h-48 bg-gray-200 rounded-lg mb-4" />
        <div className="h-6 bg-gray-200 rounded w-3/4 mb-2" />
        <div className="h-4 bg-gray-200 rounded w-1/2" />
      </div>
    );
  }
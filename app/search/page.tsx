import { GameGrid } from "@/components/GameGrid";
import { fetchGamesByName } from "@/lib/rawg"; // You'll need to create this function

export default async function SearchPage({ 
  searchParams 
}: { 
  searchParams: { q: string } 
}) {
  const { q } = await searchParams;

  const query = q;
  // Empty State logic
  if (!query) return <div className="p-8">Please enter a search term.</div>;
  
  const games = q ? await fetchGamesByName(q) : [];

  if (games.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-20 text-center">
        <h2 className="text-2xl font-bold text-gray-800">No games found</h2>
        <p className="text-gray-500 mt-2">We couldn't find anything for "{query}". Try another search!</p>
      </div>
    );
  }

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-8">Results for "{query}"</h1>
      <GameGrid games={games}/>
    </main>
  );
}
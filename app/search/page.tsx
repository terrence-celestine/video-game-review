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

  console.log(games);
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
      {games.map((game: any) => (
          <div 
            key={game.id} 
            className="flex flex-col overflow-hidden bg-white border border-gray-200 rounded-2xl shadow-sm transition-transform hover:scale-[1.02] hover:shadow-md"
          >
            <div className="h-40 bg-gray-200"  style={{ backgroundImage: `url(${game.background_image})`, backgroundSize: "cover" }} />
            <div className="p-5">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-lg font-bold text-gray-900">{game.name}</h2>
                <span className="px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 rounded-full">
                  {game.rating}
                </span>
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
    </main>
  );
}
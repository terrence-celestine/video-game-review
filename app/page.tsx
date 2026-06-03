import { GameGrid } from "@/components/GameGrid";
import { fetchGames } from "@/lib/rawg";

export default async function DashboardPage() {
  const games = await fetchGames().then(data => data.results)

  return (
  
    <main className="min-h-screen p-8 bg-gray-50">
      foo
      <header className="mb-8">
        <h1 className="text-3xl font-extrabold text-gray-900">Latest Releases</h1>
        <p className="text-gray-600">Check out the top-rated games currently trending.</p>
      </header>
      <GameGrid games={games}/>
    </main>
  );
}
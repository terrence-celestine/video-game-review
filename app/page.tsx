import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { fetchGames } from "@/lib/rawg";

export default async function Page() {
  const data = await fetchGames();
  const games = data.results;

  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-8">Latest Releases</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {games.map((game: any) => (
          <Card key={game.id}>
            <CardHeader>
              <img src={game.background_image} alt={game.name} className="w-full h-48 object-cover rounded-md" />
            </CardHeader>
            <CardContent>
              <CardTitle>{game.name}</CardTitle>
            </CardContent>
            <CardFooter>
              <Button>View Details</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}
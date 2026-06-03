import { fetchGameDetails } from "@/lib/rawg"; // You'll need to add this to your rawg.ts

export default async function GamePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const game = await fetchGameDetails(id);

  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold">{game.name}</h1>
      <img src={game.background_image} alt={game.name} className="w-full max-h-96 object-cover rounded-lg my-4" />
      <p>{game.description_raw}</p>
      {/* Here is where we will add your "Add to Favorites" button! */}
    </main>
  );
}
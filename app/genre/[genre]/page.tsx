// This is a Server Component. 
import { GameGrid } from "@/components/GameGrid";
import { fetchGamesByGenre } from "@/lib/rawg"

// The 'params' object contains the dynamic [genre] from the URL.
export default async function GenrePage({ params }: { params: { genre: string } }) {
    const { genre } = await params;
    
    const gamesByGenre = await fetchGamesByGenre(genre)
    
    return (
      <main className="p-8">
        <header className="mb-8">
          <h1 className="text-4xl font-extrabold capitalize text-gray-900">{genre} Games</h1>
          <p className="text-gray-600 mt-2">Showing all titles in the {genre} category.</p>
        </header>
        <GameGrid games={gamesByGenre}/>
      </main>
    );
  }
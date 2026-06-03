// This is a Server Component. 
// The 'params' object contains the dynamic [genre] from the URL.
export default async function GenrePage({ params }: { params: { genre: string } }) {
    const { genre } = await params;
    
    // In a real app, you'd fetch filtered games: 
    // const games = await prisma.game.findMany({ where: { genre: { equals: genre, mode: 'insensitive' } } });
    
    return (
      <main className="p-8">
        <header className="mb-8">
          <h1 className="text-4xl font-extrabold capitalize text-gray-900">{genre} Games</h1>
          <p className="text-gray-600 mt-2">Showing all titles in the {genre} category.</p>
        </header>
  
        {/* Grid container - reuse the same structure as your dashboard */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* Placeholder for filtered game cards */}
          <div className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm">
            <h3 className="font-bold">Example Game Title</h3>
            <p className="text-sm text-gray-500">Filter logic goes here!</p>
          </div>
        </div>
      </main>
    );
  }
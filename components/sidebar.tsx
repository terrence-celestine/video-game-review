import { Suspense } from 'react';
import SearchBar from './Search';
import SidebarLink from './SidebarLink';
import { fetchGenres } from "@/lib/rawg"

interface RawgGenre {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string
}

interface RawgGenreResponse {
    count: number;
    results: RawgGenre[];
}
export default async function Sidebar() {
  const genres: RawgGenreResponse = await fetchGenres();

  return (
    <aside className="w-64 border-r border-gray-200 h-screen p-6 hidden md:block">
      <Suspense fallback={<div>Loading search...</div>}>
        <SearchBar/>
      </Suspense>
      <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">Genres</h2>
      <nav className="space-y-2">
        {genres.results.map((genre: RawgGenre) => (
          <SidebarLink key={genre.slug} genre={genre.name} />
        ))}
      </nav>
    </aside>
  );
}
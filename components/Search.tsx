// src/components/SearchBar.tsx
"use client";
import { useRouter } from 'next/navigation';

export default function SearchBar() {
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const query = new FormData(e.currentTarget).get("search");
    router.push(`/search?q=${query}`);
  };

  return (
    <form onSubmit={handleSearch} className="mb-8">
      <input 
        name="search"
        type="search" 
        placeholder="Search games..." 
        className="w-full px-4 py-2 bg-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
      />
    </form>
  );
}
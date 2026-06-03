// src/components/SearchBar.tsx
"use client";
import { useSearchParams } from "next/navigation";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function SearchBar() {
  const [searchText, updateSearchText] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const query = new FormData(e.currentTarget).get("search");
    router.push(`/search?q=${query}`);
  };

  useEffect(() => {
    const query = searchParams.get("q"); // Get the value of 'q'
    if (query) updateSearchText(query)
  }, [])

  return (
    <form onSubmit={handleSearch} className="mb-8">
      <input 
        name="search"
        type="search" 
        placeholder="Search games..." 
        value={searchText}
        onChange={(e) => updateSearchText(e.target.value)}
        className="w-full px-4 py-2 bg-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
      />
    </form>
  );
}
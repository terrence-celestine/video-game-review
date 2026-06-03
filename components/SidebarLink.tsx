"use client";
import Link from 'next/link';
import { usePathname } from "next/navigation";

export default function SidebarLink({ genre }: { genre: string }) {
    
  const pathname = usePathname();
  const href = `/genre/${genre.toLowerCase()}`;
  const isActive = pathname === href;

  return (
    <Link 
      href={href}
      className={`block px-3 py-2 rounded-lg transition-colors ${
        isActive 
          ? "bg-blue-600 text-white" 
          : "text-gray-700 hover:bg-blue-50 hover:text-blue-700"
      }`}
    >
      {genre}
    </Link>
  );
}
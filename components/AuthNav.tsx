"use client";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

export default function AuthNav() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div className="mt-8 h-16 animate-pulse rounded-lg bg-gray-100" />;
  }

  if (session?.user) {
    return (
      <div className="mt-8 border-t border-gray-200 pt-6">
        <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-gray-400">
          Account
        </p>
        <p className="mb-3 truncate text-sm text-gray-700">
          {session.user.email}
        </p>
        <button
          type="button"
          onClick={() => signOut({ callbackUrl: "/" })}
          className="text-sm font-medium text-gray-600 hover:text-gray-900"
        >
          Sign out
        </button>
      </div>
    );
  }

  return (
    <div className="mt-8 border-t border-gray-200 pt-6">
      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
        Account
      </p>
      <nav className="space-y-2">
        <Link
          href="/login"
          className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
        >
          Log in
        </Link>
        <Link
          href="/register"
          className="block rounded-lg bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-blue-700"
        >
          Register
        </Link>
      </nav>
    </div>
  );
}

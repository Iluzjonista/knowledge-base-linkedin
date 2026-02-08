import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";

import Link from "next/link";

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  if (!session) redirect("/login");
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 border-r p-6 space-y-6">
        <h1 className="text-xl font-bold">Sidebar</h1>

        <nav className="space-y-3">
          <Link href="/notes" className="block hover:underline">
            All notes
          </Link>

          <Link href="/editor" className="block text-green-500 hover:underline">
            New note
          </Link>
        </nav>
      </aside>

      {/* Main */}
      <main className="flex-1 p-6 overflow-y-auto">{children}</main>
    </div>
  );
}
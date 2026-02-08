import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  if (!session) redirect("/login");

  return (
    <div className="flex min-h-screen">
      <aside className="w-56 border-r p-4">Sidebar</aside>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
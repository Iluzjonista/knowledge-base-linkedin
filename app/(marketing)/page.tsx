import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">Knowledge Base</h1>
        <Link href="/login" className="underline">
          Login
        </Link>
      </div>
    </main>
  );
}
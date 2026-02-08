import { getNotes } from "@/lib/notes";
import Link from "next/link";

export const dynamic = "force-dynamic";
export default async function NotesPage() {
  const notes = await getNotes();

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Notes</h1>

      <Link href="/editor" className="underline">
        New Note
      </Link>
      {notes.map((note) => (
        <Link key={note.id} href={`/notes/${note.id}`}>
          <div className="border p-4 rounded">{note.title}</div>
        </Link>
      ))}
    </div>
  );
}
import { getNotes } from "@/lib/notes";
import Link from "next/link";

export const dynamic = "force-dynamic";
export default async function NotesPage() {
  const notes = await getNotes();

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Notes</h1>
      {notes.length === 0 ? (
        <p className="text-gray-500">No notes yet.</p>
      ) : (
        notes.map((note) => (
          <Link key={note.id} href={`/notes/${note.id}`}>
            <div className="border p-4 rounded">{note.title}</div>
          </Link>
        ))
      )}
      <Link href="/editor" className="bg-orange-500 text-white px-3 py-1 mt-4 inline-block rounded hover:bg-orange-600">
        New Note
      </Link>
    </div>
  );
}
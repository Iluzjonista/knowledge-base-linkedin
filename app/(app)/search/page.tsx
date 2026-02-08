"use client";

import { useState } from "react";
import Link from "next/link";

export default function SearchNotes({
  notes,
}: {
  notes: { id: string; title: string }[];
}) {
  const [q, setQ] = useState("");

  const filtered = notes.filter((n) =>
    n.title.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <div className="space-y-3">
      <input
        placeholder="Search notes..."
        className="border p-2 w-full"
        value={q}
        onChange={(e) => setQ(e.target.value)}
      />

      {filtered.map((note) => (
        <Link key={note.id} href={`/notes/${note.id}`}>
          <div className="border p-3">{note.title}</div>
        </Link>
      ))}
    </div>
  );
}
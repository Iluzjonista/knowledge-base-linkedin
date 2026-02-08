"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditNoteForm({
  note,
}: {
  note: { id: string; title: string; content: string };
}) {
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);
  const router = useRouter();

  async function handleSave() {
    await fetch(`/api/notes/${note.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    });

    router.push(`/notes/${note.id}`);
    router.refresh();
  }

  return (
    <div className="space-y-4 max-w-xl">
      <input
        className="border p-2 w-full"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="border p-2 w-full h-40"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button
        onClick={handleSave}
        className="bg-black text-white px-4 py-2"
      >
        Save changes
      </button>
    </div>
  );
}
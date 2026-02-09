"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NoteEditor() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleSave() {
    setLoading(true);
    const res = await fetch("/api/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content }),
    });
    if (!res.ok) {
      alert("Save failed");
      setLoading(false);
      return;
    }
    router.push("/notes");
    router.refresh();
  }

  return (
    <div className="space-y-4">
      <input
        className="border p-2 w-full"
        placeholder="Title"
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
        disabled={loading || !title.trim()}
        className="bg-black text-white px-4 py-2"
      >
        {loading ? "Saving..." : "Save"}
      </button>
    </div>
  );
}
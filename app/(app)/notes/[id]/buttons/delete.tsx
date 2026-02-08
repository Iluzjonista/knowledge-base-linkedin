"use client";

import { useRouter } from "next/navigation";

export default function DeleteButton({ id }: { id: string }) {
  const router = useRouter();

  async function handleDelete() {
    await fetch(`/api/notes/${id}`, { method: "DELETE" });
    router.push("/notes");
    router.refresh();
  }

  return (
    <button
      onClick={handleDelete}
      className="bg-red-500 text-white px-3 py-1"
    >
      Delete
    </button>
  );
}
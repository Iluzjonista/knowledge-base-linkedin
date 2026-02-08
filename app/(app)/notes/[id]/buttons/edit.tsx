"use client";

import { useRouter } from "next/navigation";

export default function EditButton({ id }: { id: string }) {
  const router = useRouter();

  async function handleEdit() {
    await fetch(`/api/notes/${id}`, { method: "PUT" });
    router.push("/notes");
    router.refresh();
  }

  return (
    <button
      onClick={handleEdit}
      className="bg-blue-500 text-white px-3 py-1"
    >
      Edit
    </button>
  );
}
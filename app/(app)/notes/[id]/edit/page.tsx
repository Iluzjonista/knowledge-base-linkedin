import { getNote } from "@/lib/notes";
import { notFound } from "next/navigation";
import EditNoteForm from "./form";

export const dynamic = "force-dynamic";

export default async function EditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const note = await getNote(id);

  if (!note) return notFound();

  return <EditNoteForm note={note} />;
}
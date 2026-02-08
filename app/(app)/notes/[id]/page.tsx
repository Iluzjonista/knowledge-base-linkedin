import { getNote } from "@/lib/notes";

export default async function NotePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const note = await getNote(id);

  if (!note) return <div>Not found</div>;

  return (
    <div>
      <h1 className="text-xl font-bold">{note.title}</h1>
      <p className="mt-4">{note.content}</p>
    </div>
  );
}
import { getNote } from "@/lib/notes";
import DeleteButton from "./buttons/delete";
import Link from "next/link";

export default async function NotePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const note = await getNote(id);

  if (!note) return <div>Not found</div>;

  return (
    <>
      <div className="space-y-4 max-w-2xl mb-4">
        <h1 className="text-xl font-bold">{note.title}</h1>
        <p className="whitespace-pre-wrap text-gray-700">{note.content}</p>
      </div>
      <div className="border-t pt-4 flex space-x-2">
        <Link href={`/notes/${id}/edit`} className="bg-blue-500 text-white px-3 py-1">
          Edit
        </Link>
        <DeleteButton id={id} />
      </div>
    </>
  );
}
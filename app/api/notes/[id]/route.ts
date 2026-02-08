import { deleteNote, updateNote } from "@/lib/notes";

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  await deleteNote(id);
  return Response.json({ ok: true });
}

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await req.json();

  await updateNote(id, {
    title: body.title,
    content: body.content,
  });

  return Response.json({ ok: true });
}
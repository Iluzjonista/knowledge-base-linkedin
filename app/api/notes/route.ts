import { createNote } from "@/lib/notes";
import { randomUUID } from "crypto";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const body = await req.json();

  await createNote({
    id: randomUUID(),
    title: body.title,
    content: body.content,
  });

  return new Response(JSON.stringify({ ok: true }), { status: 200 });
}
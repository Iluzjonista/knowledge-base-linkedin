
import fs from "fs/promises";
import path from "path";

export type Note = {
  id: string;
  title: string;
  content: string;
};
const filePath = path.join(process.cwd(), "notes.json");

async function readNotes(): Promise<Note[]> {
  try {
    const data = await fs.readFile(filePath, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function writeNotes(notes: Note[]) {
  await fs.writeFile(filePath, JSON.stringify(notes, null, 2));
}

export async function getNotes() {
  return readNotes();
}

export async function getNote(id: string) {
  const notes = await readNotes();
  return notes.find((n) => n.id === id);
}

export async function createNote(note: Note) {
  const notes = await readNotes();
  notes.push(note);
  await writeNotes(notes);
}

export async function deleteNote(id: string) {
  const notes = await readNotes();
  const filtered = notes.filter((n) => n.id !== id);
  await writeNotes(filtered);
}

export async function updateNote(
  id: string,
  data: { title: string; content: string }
) {
  const notes = await readNotes();
  const note = notes.find((n) => n.id === id);
  if (!note) return;

  note.title = data.title;
  note.content = data.content;

  await writeNotes(notes);
}
export type Note = {
  id: string;
  title: string;
  content: string;
};

const NOTES: Note[] = [
  { id: "1", title: "First note", content: "Hello world" },
];

export async function getNotes() {
  return NOTES;
}

export async function getNote(id: string) {
  return NOTES.find((n) => n.id === id);
}

export async function createNote(note: Note) {
  NOTES.push(note);
}

export async function deleteNote(id: string) {
  const index = NOTES.findIndex((n) => n.id === id);
  if (index !== -1) NOTES.splice(index, 1);
}

export async function updateNote(
  id: string,
  data: { title: string; content: string }
) {
  const note = NOTES.find((n) => n.id === id);
  if (!note) return;

  note.title = data.title;
  note.content = data.content;
}
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
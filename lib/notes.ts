export type Note = {
  id: string;
  title: string;
  content: string;
};

const globalForNotes = global as unknown as {
  notes: Note[];
};

if (!globalForNotes.notes) {
  globalForNotes.notes = [
    { id: "1", title: "First note", content: "Hello world" },
  ];
}

function getStore() {
  return globalForNotes.notes;
}

export async function getNotes(): Promise<Note[]> {
  return getStore();
}

export async function getNote(id: string) {
  return getStore().find((n) => n.id === id);
}

export async function createNote(note: Note) {
  getStore().push(note);
}

export async function deleteNote(id: string) {
  globalForNotes.notes = getStore().filter((n) => n.id !== id);
}

export async function updateNote(
  id: string,
  data: { title: string; content: string }
) {
  const note = getStore().find((n) => n.id === id);
  if (!note) return;

  note.title = data.title;
  note.content = data.content;
}

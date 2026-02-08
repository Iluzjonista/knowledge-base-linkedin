import * as repo from "./notes-repo";

export type Note = {
  id: string;
  title: string;
  content: string;
};

export async function getNotes(): Promise<Note[]> {
  return repo.getNotes();
}

export async function getNote(id: string): Promise<Note | undefined> {
  return repo.getNote(id);
}

export async function createNote(note: Note): Promise<void> {
  return repo.createNote(note);
}

export async function updateNote(
  id: string,
  data: { title: string; content: string }
): Promise<void> {
  return repo.updateNote(id, data);
}

export async function deleteNote(id: string): Promise<void> {
  return repo.deleteNote(id);
}


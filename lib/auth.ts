import { cookies } from "next/headers";

const SESSION_KEY = "session";

export async function getSession() {
  const cookieStore = await cookies();
  return cookieStore.get(SESSION_KEY)?.value ?? null;
}

export async function requireSession() {
  const session = await getSession();
  if (!session) {
    throw new Error("Not authenticated");
  }
  return session;
}
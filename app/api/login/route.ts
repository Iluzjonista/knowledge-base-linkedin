import { cookies } from "next/headers";

export async function POST() {
  const cookieStore = await cookies();
  cookieStore.set("session", "demo");
  return new Response(null, { status: 200 });
}
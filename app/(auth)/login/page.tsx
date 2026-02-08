"use client";

import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  async function handleLogin() {
    await fetch("/api/login", { method: "POST" });
    router.push("/notes");
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <button
        onClick={handleLogin}
        className="px-4 py-2 bg-black text-white rounded"
      >
        Login
      </button>
    </div>
  );
}
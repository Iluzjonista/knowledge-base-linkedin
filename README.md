# Notes App (Next.js App Router)

A small production-minded notes application built with Next.js App Router, TypeScript and Tailwind.

The goal of this project is to demonstrate frontend architecture decisions rather than feature volume.

The deployed version runs in demo mode due to serverless file system limits.

##  lib/auth

In production this would be replaced by:
- NextAuth/Auth.js
- Supabase auth

## lib/notes-repo

For demo purposes, notes are stored in memory.  
In production this would be replaced with some database.

## Tech stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Server Components + Client Components
- Route Handlers for API
- Repository pattern for data layer

## Features

- Create, edit, delete notes
- Shared layout with sidebar
- Client/server component separation
- Search notes (client side)
- Loading states

## Server vs Client Components

- Notes pages use **Server Components** for data fetching
- Editor and search use **Client Components**
- API routes handle mutations

## Running locally

```bash
npm install
npm run dev
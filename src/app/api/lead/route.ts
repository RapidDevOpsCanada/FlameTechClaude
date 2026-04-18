import { NextResponse } from "next/server";
import { sql } from "@/lib/db";

export const dynamic = "force-dynamic";

async function ensureTable() {
  await sql`
    CREATE TABLE IF NOT EXISTS leads (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      phone TEXT NOT NULL,
      address TEXT NOT NULL,
      issue TEXT NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `;
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as {
      name?: string;
      phone?: string;
      address?: string;
      issue?: string;
    };

    const name = (body.name || "").trim();
    const phone = (body.phone || "").trim();
    const address = (body.address || "").trim();
    const issue = (body.issue || "").trim();

    if (!name || !phone || !address || !issue) {
      return NextResponse.json(
        { ok: false, error: "All fields are required." },
        { status: 400 }
      );
    }
    if (name.length > 200 || phone.length > 50 || address.length > 300 || issue.length > 2000) {
      return NextResponse.json(
        { ok: false, error: "One or more fields exceed the allowed length." },
        { status: 400 }
      );
    }

    await ensureTable();
    await sql`
      INSERT INTO leads (name, phone, address, issue)
      VALUES (${name}, ${phone}, ${address}, ${issue})
    `;

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      {
        ok: false,
        error: err instanceof Error ? err.message : String(err),
      },
      { status: 500 }
    );
  }
}

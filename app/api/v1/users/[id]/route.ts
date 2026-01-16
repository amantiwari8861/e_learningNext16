import { users } from "@/db/users";
import { NextRequest, NextResponse } from "next/server";

/**
 * GET /api/users/:id
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const userId = Number(id);

  const user = users.find((u) => u.id === userId);

  if (!user) {
    return NextResponse.json(
      { message: "User not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(user);
}

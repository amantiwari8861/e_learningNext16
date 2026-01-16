import { NextResponse } from "next/server";
import { users } from "../../../../db/users";

/**
 * GET /api/users
 */
export async function GET() {
    return NextResponse.json(users);
}

/**
 * POST /api/users
 */
export async function POST(request: Request) {
    const body = await request.json();

    const newUser = {
        id: Date.now(),
        ...body,
    };

    users.push(newUser);

    return NextResponse.json(newUser, { status: 201 });
}

/**
 * PUT /api/users?id=1
 */
export async function PUT(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = Number(searchParams.get("id"));

    const body = await request.json();

    const index = users.findIndex((u) => u.id === id);
    if (index === -1) {
        return NextResponse.json(
            { message: "User not found" },
            { status: 404 }
        );
    }

    users[index] = { ...users[index], ...body };

    return NextResponse.json(users[index]);
}

/**
 * DELETE /api/users?id=1
 */
export async function DELETE(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = Number(searchParams.get("id"));

    const index = users.findIndex((u) => u.id === id);
    if (index === -1) {
        return NextResponse.json(
            { message: "User not found" },
            { status: 404 }
        );
    }

    const deletedUser = users.splice(index, 1);

    return NextResponse.json(deletedUser[0]);
}

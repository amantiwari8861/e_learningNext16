import { users } from "@/db/users";
import { NextResponse } from "next/server";

interface Params {
    params: {
        id: string;
    };
}

/**
 * GET /api/users/:id
 */
export async function GET(
    request: Request,
    { params }: Params
) {
    const id = Number(params.id);

    const user = users.find((u) => u.id === id);

    if (!user) {
        return NextResponse.json(
            { message: "User not found" },
            { status: 404 }
        );
    }

    return NextResponse.json(user);
}

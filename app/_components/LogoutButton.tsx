"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

export default function LogoutButton() {
    console.log("signing out....");

    return <Button onClick={() => signOut({ redirect: false })}>Logout</Button>;
}

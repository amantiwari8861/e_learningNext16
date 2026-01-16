"use client";

import LogoutButton from "@/app/_components/LogoutButton";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <>
      <Button
        onClick={() =>
          signIn("credentials", {
            email: "admin@demo.com",
            password: "admin123",
            callbackUrl: "/dashboard",
          })
        }
      >
        Login as Admin
      </Button>
      <LogoutButton />
    </>
  );
}

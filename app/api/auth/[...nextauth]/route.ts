import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) return null;

        const { email, password } = credentials;

        if (email === "admin@demo.com" && password === "admin123") {
          return {
            id: "1",
            name: "Admin",
            email: "admin@demo.com",
            role: "ROLE_ADMIN",
          };
        }

        return null;
      },
    }),
  ],

  session: {
    strategy: "jwt",
    maxAge: 60,
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as any).role;
      }
      return token;
    },

    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          role: token.role as string,
        },
      };
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Enail",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "Harshal" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        return {
          username: "Harshal",
          id: "1",
          email: "harshalsawatkar24@gmail.com",
        };
      },
    }),
  ],
});

export const GET = handler;
export const POST = handler;

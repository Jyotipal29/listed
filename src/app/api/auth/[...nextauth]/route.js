import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email" },
        password: { label: "Password" },
      },
      authorize(credentials, req) {
        if (
          credentials?.email === "jyoti@gmail.com" &&
          credentials.password === "jyoti"
        ) {
          return {
            id: "1",
            email: "jyoti@gmail.com",
          };
        }
        return null;
      },
    }),
  ],
});

export { handler as GET, handler as POST };

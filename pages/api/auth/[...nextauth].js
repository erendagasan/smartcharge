import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { db } from "../../../utils/prismaClient";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials, req) {
        const user = db.user.findFirst({
          where: {
            email: credentials.email,
            password: credentials.password,
          },
        });

        return user;
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },

};

export default NextAuth(authOptions);

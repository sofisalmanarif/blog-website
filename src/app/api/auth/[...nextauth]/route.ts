
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID || "", 
      clientSecret: process.env.GITHUB_SECRET || ""
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET || "52773557bbce440bf5908e0b28b",
})

export {handler as POST,handler as GET}



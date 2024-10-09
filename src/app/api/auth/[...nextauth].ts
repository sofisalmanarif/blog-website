import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: "Ov23liD1QFUZba2d4vQb",
      clientSecret: "ed4a1091172212f70083ef6b9624801df0e1c817",
    }),
],
secret:"7gghddhdhg"
}

export default NextAuth(authOptions)
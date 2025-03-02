import NextAuth from "next-auth"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { Adapter } from "@auth/core/adapters"
import { db } from "@/server"
import Google from "next-auth/providers/google"
import GitHub from "next-auth/providers/github"
export const { handlers, auth, signIn, signOut } = NextAuth({
    adapter: DrizzleAdapter(db) as Adapter,
    secret: process.env.AUTH_SECRET,
    session: {
        strategy: "jwt"
    },
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        GitHub({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET
        })
    ],
})
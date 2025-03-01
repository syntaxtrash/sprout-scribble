"use server"

import { db } from "@/server"

export default async function getPosts() {
    const posts = await db.query.posts.findMany()

    return posts ?? []
}
'use client'

import { Session } from "next-auth"
import { signOut } from "next-auth/react"

export const UserButton = ({user}: Session) => {
    return (
       <div className="flex items-center gap-2">
        <span className="text-sm text-gray-600">{user?.email}</span>
        <button 
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            onClick={() => signOut()}
        >
            Sign Out
        </button>
       </div>
    )
}
'use client'

import { signIn } from "next-auth/react"
import { Button } from "@/components/ui/button"

export default function Socials(){
    return (
        <div>
            <Button onClick={ () => signIn('google', {
                callbackUrl: '/',
                redirect: false,
            })}>
                Sign in with Google
            </Button>
            <Button onClick={()=> signIn('github', {
                callbackUrl: '/',
                redirect: false,
            })}>
                Sign in with GitHub
            </Button>
        </div>
    )
}
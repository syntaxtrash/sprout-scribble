'use client'

import { signIn } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"
export default function Socials(){
    return (
        <div className="flex flex-col items-center w-full gap-4">
            <Button
            variant={"outline"}
            className="flex gap-4 w-full" 
            onClick={ () => signIn('google', {
                callbackUrl: '/',
                redirect: false,
            })}>
                <p>Sign in with Google</p>
                <FcGoogle className="w-5 h-5"/>
            </Button>
            <Button 
            variant={"outline"}
            className="flex gap-4 w-full"
            onClick={()=> signIn('github', {
                callbackUrl: '/',
                redirect: false,
            })}>
                <p>Sign in with GitHub</p>
                <FaGithub className="w-5 h-5"/>
            </Button>
        </div>
    )
}
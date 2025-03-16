'use client'

import { AuthCard } from "@/components/auth/auth-card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { SignInSchema } from "@/types/signin-schema"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import Link from "next/link"

export const SignInForm = () => {
    const form = useForm({
        resolver: zodResolver(SignInSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    })
    const onSubmit = (values: z.infer<typeof SignInSchema>) => {
        console.log(values)
    }
    return (
        <AuthCard cardTitle="Welcome back" backButtonHref="/auth/register" backButtonLabel="Create a new account." showSocials>
            <div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <div>
                            <FormField
                                control={form.control}
                                name="email"
                                render={({field}) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input {...field} placeholder="email@work.com" type="email" autoComplete="email"/>
                                    </FormControl>
                                    <FormDescription />
                                    <FormMessage />
                                </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({field}) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input {...field} placeholder="enter your secret" type="password" autoComplete="current-password"/>
                                    </FormControl>
                                    <FormDescription />
                                    <FormMessage />
                                </FormItem>
                                )}
                            />
                            <Button size={"sm"} variant={"link"} asChild>
                                <Link href={"/auth/reset"}>Forgot your password?</Link>
                            </Button>
                        </div>
                        <Button type="submit" className="w-full my-2">
                            {"Login"}
                        </Button>
                    </form>
                </Form>
            </div>
        </AuthCard>
    )
} 
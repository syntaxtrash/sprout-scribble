import * as z from 'zod'

export const SignInSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
    code: z.string().optional(),
})
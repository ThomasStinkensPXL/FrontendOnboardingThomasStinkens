import { z } from 'zod'

export const authLoginFormSchema = z.object({
	username: z.string().min(1),
	password: z.string().min(1),
})

export type AuthLoginForm = z.infer<typeof authLoginFormSchema>

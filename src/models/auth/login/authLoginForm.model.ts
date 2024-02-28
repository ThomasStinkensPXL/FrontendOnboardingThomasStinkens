import { z } from 'zod'

const authLoginFormSchema = z.object({
	username: z.string().min(1),
	password: z.string().min(1),
})

export type AuthLoginForm = z.infer<typeof authLoginFormSchema>

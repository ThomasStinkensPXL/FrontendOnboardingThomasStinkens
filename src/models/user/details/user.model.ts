/* eslint-disable camelcase */
import { z } from 'zod'

const userSchema = z.object({
	uuid: z.string().uuid(),
	createdAt: z.date(),
	updatedAt: z.date(),
	email: z.string().email(),
	firstName: z.string().min(1),
	lastName: z.string().min(1),
	role: z.string().min(4),
})

export type User = z.infer<typeof userSchema>

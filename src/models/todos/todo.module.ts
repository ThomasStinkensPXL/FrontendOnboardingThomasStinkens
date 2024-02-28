import { z } from 'zod'

const todoSchema = z.object({
	uuid: z.string().uuid(),
	title: z.string().min(1),
	description: z.string().min(5),
	deadline: z.string().datetime(),
	isCompleted: z.boolean(),
})

export type Todo = z.infer<typeof todoSchema>

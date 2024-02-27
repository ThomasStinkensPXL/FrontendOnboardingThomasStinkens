/* eslint-disable camelcase */
import { z } from 'zod'

const currentUserSchema = z.object({
  uuid: z.string().uuid(),
  role: z.string().min(4),
})

export type CurrentUser = z.infer<typeof currentUserSchema>

/* eslint-disable camelcase */
import { z } from 'zod'

const authTokensSchema = z.object({
	access_token: z.string().min(10),
	token_type: z.string().min(1),
	expires_in: z.number().min(0),
	refresh_token: z.string().min(10),
})

export type AuthTokens = z.infer<typeof authTokensSchema>

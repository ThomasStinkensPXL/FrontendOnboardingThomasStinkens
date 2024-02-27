/* eslint-disable camelcase */
import { httpClient } from '@/http/httpclient'
import type { AuthTokens } from '@/models/auth/response/tokens.model'
import type { User } from '@/models/user/details/user.model'
// import { AxiosInstance } from 'axios'

interface AuthService {
	login: (username: string, password: string) => Promise<AuthTokens>
	getCurrentUser: () => Promise<User>
}

export const authService: AuthService = {
	login: async (username: string, password: string): Promise<AuthTokens> => {
		const formData = encodeQueryData({
			client_id: import.meta.env.VITE_CLIENT_ID,
			client_secret: import.meta.env.VITE_CLIENT_SECRET,
			grant_type: 'password',
			scope: 'read write',
			password: password,
			username: username,
		})

		const config = {
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		}

		const response = await httpClient.post('/auth/token', formData, config)
		return response.data
	},

	getCurrentUser: async (): Promise<User> => {
		const response = await httpClient.get('/auth/userinfo')
		return response.data
	},
}

function encodeQueryData(queryData): URLSearchParams {
	const searchParams: URLSearchParams = new URLSearchParams()

	for (const [key, value]: [string, string] of Object.entries(queryData)) {
		searchParams.append(key, value)
	}

	return searchParams
}

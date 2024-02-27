import type { AxiosInstance } from 'axios'
import axios from 'axios'

const httpClient: AxiosInstance = axios.create({
	baseURL: import.meta.env.VITE_BASE_URL,
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json;charset=UTF-8',
	},
})

httpClient.interceptors.request.use(
	(config) => {
		// TODO: Get Token out of localstorage and user it here. (Next step in the onboarding app)
		config.headers.Authorization = 'Bearer '
		return config
	},
	(error) => {
		return Promise.reject(error)
	}
)

export { httpClient }
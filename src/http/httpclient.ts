import type { AxiosInstance } from 'axios'
import axios from 'axios'
import { useAuthStore } from '@/modules/auth/stores/auth.store'

const httpClient: AxiosInstance = axios.create({
	baseURL: import.meta.env.VITE_BASE_URL,
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json;charset=UTF-8',
	},
})

httpClient.interceptors.request.use(
	(config) => {
		// authStore needs to be defines HERE! This makes it so that we initialize whenever the service makes a call (a.k.a. pinia is properly initialized)
		const authStore = useAuthStore()

		// config.headers.Authorization = 'Bearer ' + localStorage.getItem('accessToken')
		config.headers.Authorization = `Bearer ${authStore.accessToken}`
		return config
	},
	(error) => {
		return Promise.reject(error)
	}
)

export { httpClient }

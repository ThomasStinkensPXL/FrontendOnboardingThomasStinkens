import { useLocalStorage } from '@vueuse/core/index'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

import type { AuthLoginForm } from '@/models/auth/login/authLoginForm.model'
import type { CurrentUser } from '@/models/user/current/currentUser.model'
import { authService } from '@/modules/auth/services/auth.service'

export const useAuthStore = defineStore('auth', () => {
	const currentUser = ref<CurrentUser | null>(null)
	const accessToken = useLocalStorage<string | null>('accessToken', '')
	const isAuthenticated = computed<boolean>(() => currentUser.value !== null)

	async function getCurrentUser(): Promise<CurrentUser | null> {
		if (currentUser.value !== null) {
			return currentUser.value
		}

		currentUser.value = await authService.getCurrentUser()
		return currentUser.value!
	}

	function setCurrentUser(user: CurrentUser | null): void {
		currentUser.value = user
	}

	async function login(data: AuthLoginForm): Promise<void> {
		const response = await authService.login(data.username!, data.password!)
		accessToken.value = response.access_token

		await getCurrentUser()
	}

	function logout(): void {
		authService.logout()
		setCurrentUser(null)
		accessToken.value = null
	}

	return {
		currentUser,
		isAuthenticated,
		getCurrentUser,
		setCurrentUser,
		login,
		logout,
	}
})

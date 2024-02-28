<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

import AuthLoginForm from '@/modules/auth/components/AuthLoginForm.vue'
import { useAuthStore } from '@/modules/auth/stores/auth.store'

const { t } = useI18n()

const authStore = useAuthStore()
const router = useRouter()

const isIncorrect = ref<boolean>(false)

async function handleLogin(data: { username: string; password: string }): Promise<void> {
	try {
		await authStore.login(data)
	} catch (e) {
		isIncorrect.value = true
	}

	router.push({ name: 'todos' })
}
</script>

<template>
	<h1>{{ t('auth.login.welcome') }}</h1>
	<p>{{ t('auth.login.description') }}</p>
	<AuthLoginForm
		:is-incorrect="isIncorrect"
		@submit="handleLogin"
	/>
	<p>
		{{ t('auth.no_account') }} <span>{{ t('auth.create_account') }}</span>
	</p>
</template>

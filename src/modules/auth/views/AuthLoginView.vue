<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

import AppText from '@/components/AppText.vue'
import AppTitle from '@/components/AppTitle.vue'
import AuthLoginForm from '@/modules/auth/components/AuthLoginForm.vue'
import { useAuthStore } from '@/modules/auth/stores/auth.store'
import { useForm } from 'formango'
import { authLoginFormSchema } from '@/models/auth/login/authLoginForm.model'

const { t } = useI18n()
const authStore = useAuthStore()
const router = useRouter()

const isIncorrect = ref<boolean>(false)

const { form, onSubmitForm } = useForm({
	schema: authLoginFormSchema,
	initialState: {
		username: '',
		password: '',
	},
})

onSubmitForm(async (data) => {
	try {
		await authStore.login(data)
	} catch (e) {
		isIncorrect.value = true
	}

	router.push({ name: 'todos' })
})
</script>

<template>
	<div class="flex h-screen w-screen flex-col items-center justify-center">
		<div>
			<AppTitle
				class="w-[360px]"
				:text="t('auth.login.welcome')"
			/>
			<AppText
				class="w-[360px]"
				:text="t('auth.login.description')"
			/>
		</div>

		<div class="mb-2 w-[360px]">
			<AuthLoginForm
				:form="form"
				:is-incorrect="isIncorrect"
			/>
		</div>
		<p class="w-[360px] text-center">
			{{ t('auth.no_account') }} <span class="font-semibold">{{ t('auth.create_account') }}</span>
		</p>
	</div>
</template>

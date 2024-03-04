<script setup lang="ts">
import { useForm } from 'formango'
import { useI18n } from 'vue-i18n'
import { z } from 'zod'

import AppButton from '@/components/AppButton.vue'
import FormInput from '@/components/FormInput.vue'
import FormPasswordInput from '@/components/FormPasswordInput.vue'
import type { AuthLoginForm } from '@/models/auth/login/authLoginForm.model'

const props = defineProps<{
	isIncorrect?: string
}>()

const emit = defineEmits<{
	submit: [value: AuthLoginForm]
}>()

const { t } = useI18n()

const loginForm = z.object({
	username: z.string().email().min(1),
	password: z.string().min(1),
})

const { form } = useForm({
	schema: loginForm,
	initialState: {
		username: '',
		password: '',
	},
})

const username = form.register('username', '')
const password = form.register('password', '')

function submit(): void {
	if (form.isValid) {
		emit('submit', { username: username.modelValue, password: password.modelValue })
	}
}
</script>

<template>
	<form
		class="w-full"
		@submit.prevent="submit()"
	>
		<FormInput
			v-bind="username"
			input-name="username"
			input-type="text"
			:label="t('shared.email.long')"
		/>

		<FormPasswordInput
			v-bind="password"
			input-name="password"
			:label="t('shared.password')"
		/>

		<!--		In een realistische situatie maken we hier gebruik van router (mochten we een eigen pagina maken), dit zorgt tijdelijk gewoon voor een 404-->
		<a
			class="block text-sm font-semibold hover:underline"
			href="forgor"
			>{{ t('auth.forgot_password') }}</a
		>

		<AppButton
			:class="{ 'bg-light': !form.isValid }"
			:disabled="!form.isValid"
			:text="t('shared.continue') + ' >'"
		/>
		<p
			v-if="props.isIncorrect"
			class="relative w-full rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700"
		>
			{{ t('auth.login.incorrect') }}
		</p>
	</form>
</template>

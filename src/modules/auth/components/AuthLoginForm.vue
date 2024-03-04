<script setup lang="ts">
import type { Form } from 'formango'
import { useI18n } from 'vue-i18n'

import AppButton from '@/components/AppButton.vue'
import FormInput from '@/components/FormInput.vue'
import FormPasswordInput from '@/components/FormPasswordInput.vue'
import type { authLoginFormSchema } from '@/models/auth/login/authLoginForm.model'

const props = defineProps<{
	isIncorrect?: string
	form: Form<typeof authLoginFormSchema>
}>()

const { t } = useI18n()

const username = props.form.register('username', '')
const password = props.form.register('password', '')
</script>

<template>
	<form
		class="w-full"
		@submit.prevent="form.submit()"
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
			:text="t('shared.continue')"
		/>
		<p
			v-if="props.isIncorrect"
			class="relative w-full rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700"
		>
			{{ t('auth.login.incorrect') }}
		</p>
	</form>
</template>

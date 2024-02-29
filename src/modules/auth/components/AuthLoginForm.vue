<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

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

const username = ref<string>('')
const password = ref<string>('')

function submit(): void {
	emit('submit', { username: username.value, password: password.value })
}
</script>

<template>
	<form
		class="w-full"
		@submit.prevent="submit()"
	>
		<FormInput
			v-model="username"
			input-name="username"
			input-type="text"
			:label="t('shared.email.long')"
		/>

		<FormPasswordInput
			v-model="password"
			input-name="password"
			:label="t('shared.password')"
		/>

		<!--		In een realistische situatie maken we hier gebruik van router (mochten we een eigen pagina maken), dit zorgt tijdelijk gewoon voor een 404-->
		<a
			class="block text-sm font-semibold hover:underline"
			href="forgor"
			>{{ t('auth.forgot_password') }}</a
		>

		<AppButton :text="t('shared.continue')" />
		<p
			v-if="props.isIncorrect"
			class="relative w-full rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700"
		>
			{{ t('auth.login.incorrect') }}
		</p>
	</form>
</template>

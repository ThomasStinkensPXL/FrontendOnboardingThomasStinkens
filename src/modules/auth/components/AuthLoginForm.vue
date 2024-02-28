<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

import type { AuthLoginForm } from '@/models/auth/login/authLoginForm.model'

const { t } = useI18n()
const emit = defineEmits<{
	submit: [value: AuthLoginForm]
}>()

const props = defineProps<{
	isIncorrect?: string
}>()

const username = ref<string>('')
const password = ref<string>('')

function submit(): void {
	emit('submit', { username: username.value, password: password.value })
}
</script>

<template>
	<form @submit.prevent="submit()">
		<label for="username">{{ t('shared.email.long') }}</label>
		<input
			id="username"
			v-model="username"
			:class="{ red: props.isIncorrect }"
			name="username"
			:placeholder="t('shared.input_placeholder')"
			type="text"
		/>
		<br />
		<label for="password">{{ t('shared.password') }}</label>
		<input
			id="password"
			v-model="password"
			:class="{ red: props.isIncorrect }"
			name="password"
			:placeholder="t('shared.input_placeholder')"
			type="password"
		/>
		<br />
<!--		In een realistische situatie maken we hier gebruik van router (mochten we een eigen pagina maken), dit zorgt tijdelijk gewoon voor een 404-->
		<a href="forgor">{{ t('auth.forgot_password') }}</a>
		<br />
		<p v-if="props.isIncorrect">{{ t('auth.login.incorrect') }}</p>
		<button type="submit">{{ t('shared.continue') }} ></button>
	</form>
</template>

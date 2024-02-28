<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

import EyeIcon from '@/icons/EyeIcon.vue'
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
const passwordInputType = ref<string>('password')

function submit(): void {
	emit('submit', { username: username.value, password: password.value })
}

function makePasswordVisible(): void {
	passwordInputType.value = 'text'
}

function makePasswordHidden(): void {
	passwordInputType.value = 'password'
}
</script>

<template>
	<form
		class="w-full"
		@submit.prevent="submit()"
	>
		<div class="w-full pb-2">
			<label
				class="block py-1 font-semibold"
				for="username"
				>{{ t('shared.email.long') }}</label
			>
			<input
				id="username"
				v-model="username"
				class="bg-light-lightest text-dark box-border w-full rounded-lg px-4 py-3"
				name="username"
				:placeholder="t('shared.input_placeholder')"
				type="text"
			/>
		</div>

		<label
			class="block py-1 font-semibold"
			for="password"
			>{{ t('shared.password') }}</label
		>
		<div class="relative content-center">
			<input
				id="password"
				v-model="password"
				class="bg-light-lightest text-dark h-full w-full rounded-lg px-4 py-3"
				name="password"
				:placeholder="t('shared.input_placeholder')"
				:type="passwordInputType"
			/>
			<!--			type button prevents the button from firing the submit event-->
			<button
				class="text-dark absolute right-0 top-1/4 mx-2 aspect-square h-1/2"
				type="button"
				@mousedown="makePasswordVisible"
				@mouseleave="makePasswordHidden"
				@mouseup="makePasswordHidden"
			>
				<EyeIcon />
			</button>
		</div>

		<!--		In een realistische situatie maken we hier gebruik van router (mochten we een eigen pagina maken), dit zorgt tijdelijk gewoon voor een 404-->
		<a
			class="block text-sm font-semibold hover:underline"
			href="forgor"
			>{{ t('auth.forgot_password') }}</a
		>

		<button
			class="bg-dark-lighter mb-2 mt-20 w-full rounded-lg px-4 py-3 pb-2 font-semibold text-white"
			type="submit"
		>
			{{ t('shared.continue') }} >
		</button>
		<p
			v-if="props.isIncorrect"
			class="relative w-full rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700"
		>
			{{ t('auth.login.incorrect') }}
		</p>
	</form>
</template>

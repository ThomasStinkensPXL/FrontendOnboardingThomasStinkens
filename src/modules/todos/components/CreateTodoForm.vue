<script setup lang="ts">
import { useForm } from 'formango'
import { useI18n } from 'vue-i18n'
import { z } from 'zod'

import AppTitle from '@/components/AppTitle.vue'
import FormDateInput from '@/components/FormDateInput.vue'
import FormInput from '@/components/FormInput.vue'
import type { AuthLoginForm } from '@/models/auth/login/authLoginForm.model'

const { t } = useI18n()

const emit = defineEmits<{
	submit: [value: AuthLoginForm]
}>()

const todoFormSchema = z.object({
	title: z.string(),
	description: z.string(),
	deadline: z.string(),
})

const { form } = useForm({
	schema: todoFormSchema,
	initialState: {
		title: '',
		description: '',
		deadline: '',
	},
})

const title = form.register('title', '')
const description = form.register('description', '')
const deadline = form.register('deadline', '')

function submit(): void {
	if (form.isValid) {
		emit('submit', { username: username.modelValue, password: password.modelValue })
	}
}
</script>

<template>
	<AppTitle :text="t('todos.create.new_todo')" />
	<FormInput
		v-bind="title"
		input-name="title"
		input-type="text"
		:label="t('todos.create.title')"
	/>
	<FormInput
		v-bind="description"
		input-name="description"
		input-type="text"
		:label="t('todos.create.description')"
	/>
	<FormDateInput
		input-name="deadline"
		:label="t('todos.create.deadline')"
		v-bind="deadline"
	/>
</template>

<style scoped></style>

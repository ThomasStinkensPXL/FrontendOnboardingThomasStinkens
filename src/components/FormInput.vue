<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
import type { ZodFormattedError } from 'zod'

const { t } = useI18n()

const props = defineProps<{
	inputName: string
	label: string
	inputType: string
	isTouched?: boolean
	isDirty?: boolean
	errors?: ZodFormattedError<string> | undefined
}>()

const model = defineModel<number | string | null>({
	required: true,
})

const errorShown = computed(() => props.errors && props.errors._errors.length > 0 && (props.isTouched || props.isDirty))
</script>

<template>
	<div class="w-full pb-2">
		<label
			class="block py-1 font-semibold"
			:for="props.inputName"
			>{{ props.label }}</label
		>
		<input
			:id="props.inputName"
			v-model="model"
			class="box-border w-full rounded-lg bg-light-lightest px-4 py-3 text-dark"
			:name="props.inputName"
			:placeholder="t('shared.input_placeholder')"
			:type="props.inputType"
		/>
		<p
			v-if="errorShown"
			class="text-red-600"
		>
			{{ props.errors!._errors[0] }}
		</p>
	</div>
</template>

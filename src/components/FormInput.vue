<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const props = defineProps<{
	inputName: string
	label: string
	inputType: string
}>()

const model = defineModel<never>({
	required: true,
})
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
	</div>
</template>

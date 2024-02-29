<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

import EyeIcon from '@/icons/EyeIcon.vue'

const { t } = useI18n()
const props = defineProps<{
	inputName: string
	label: string
}>()

const model = defineModel<never>({
	required: true,
})

const passwordInputType = ref<string>('password')

function makePasswordVisible(): void {
	passwordInputType.value = 'text'
}

function makePasswordHidden(): void {
	passwordInputType.value = 'password'
}
</script>

<template>
	<label
		class="block py-1 font-semibold"
		:for="props.inputName"
		>{{ props.label }}</label
	>
	<div class="relative content-center">
		<input
			:id="props.inputName"
			v-model="model"
			class="box-border w-full rounded-lg bg-light-lightest px-4 py-3 text-dark"
			:name="props.inputName"
			:placeholder="t('shared.input_placeholder')"
			:type="passwordInputType"
		/>
		<!--			type button prevents the button from firing the submit event-->
		<button
			class="absolute right-0 top-1/4 mx-2 aspect-square h-1/2 text-dark"
			type="button"
			@mousedown="makePasswordVisible"
			@mouseleave="makePasswordHidden"
			@mouseup="makePasswordHidden"
		>
			<EyeIcon />
		</button>
	</div>
</template>

<style scoped></style>

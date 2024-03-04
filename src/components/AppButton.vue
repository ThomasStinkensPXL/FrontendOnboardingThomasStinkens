<script setup lang="ts">
const props = defineProps<{
	text: string
}>()
</script>

<template>
	<button class="mb-2 mt-20 w-full rounded-lg bg-dark-lighter px-4 py-3 pb-2 font-semibold text-white">
		{{ props.text }}
	</button>
</template>

<script setup lang="ts">
const props = defineProps<{
	text: string
}>()
</script>

<template>
	<div class="flex w-full gap-4 p-2 font-semibold">
		<slot class="aspect-square h-full" />
		<p class="whitespace-nowrap">
			{{ props.text }}
		</p>
	</div>
</template>

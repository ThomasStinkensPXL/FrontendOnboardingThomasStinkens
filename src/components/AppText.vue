<script setup lang="ts">
const props = defineProps<{
	text: string
}>()
</script>

<template>
	<p class="pb-2 font-semibold">{{ props.text }}</p>
</template>

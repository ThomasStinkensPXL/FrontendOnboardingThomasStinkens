<script setup lang="ts">
const props = defineProps<{
	text: string
}>()
</script>

<template>
	<h1 class="w-full text-3xl font-semibold">{{ props.text }}</h1>
</template>

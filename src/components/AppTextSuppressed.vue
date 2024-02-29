<script setup lang="ts">
const props = defineProps<{
	text: string
}>()
</script>

<template>
	<p class="pb-2 text-dark-lightest">{{ props.text }}</p>
</template>

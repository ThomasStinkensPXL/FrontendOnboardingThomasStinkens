<script setup lang="ts">
import { Dialog, DialogPanel, DialogTitle, DialogDescription } from '@headlessui/vue'

const props = defineProps<{
	isOpen: boolean
}>()

const emit = defineEmits<{
	closeDialog: [void]
}>()

function close(): void {
	emit('closeDialog')
}
</script>

<template>
	<Dialog
		class="absolute left-0 top-0 flex h-screen w-screen flex-col items-center justify-center bg-dark bg-opacity-60"
		:open="isOpen"
	>
		<DialogPanel class="bg-white">
			<button @click="close">x</button>
			<slot />
		</DialogPanel>
	</Dialog>
</template>

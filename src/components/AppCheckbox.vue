<script setup lang="ts">
import CheckIcon from '@/icons/CheckIcon.vue'
</script>

<template>
	<label class="relative flex cursor-pointer items-center">
		<input
			class="peer relative h-[24px] w-[24px] cursor-pointer appearance-none rounded border border-light transition-all checked:border-dark-lighter checked:bg-dark-lighter"
			type="checkbox"
		/>
		<div
			class="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100"
		>
			<CheckIcon />
		</div>
	</label>
</template>

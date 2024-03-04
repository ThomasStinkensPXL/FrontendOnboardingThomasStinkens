<script setup lang="ts"></script>

<template>
	<label class="relative flex cursor-pointer items-center">
		<input
			class="peer relative h-[24px] w-[24px] cursor-pointer appearance-none rounded border border-light transition-all checked:border-dark-lighter checked:bg-dark-lighter"
			type="checkbox"
		/>
		<div
			class="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100"
		>
			<svg
				class="h-3.5 w-3.5"
				fill="currentColor"
				stroke="currentColor"
				stroke-width="1"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					clip-rule="evenodd"
					d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
					fill-rule="evenodd"
				/>
			</svg>
		</div>
	</label>
</template>

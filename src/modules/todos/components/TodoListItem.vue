<script setup lang="ts">
import AppCheckbox from '@/components/AppCheckbox.vue'
import AppText from '@/components/AppText.vue'
import CalendarIcon from '@/icons/CalendarIcon.vue'
import OptionsDotIcon from '@/icons/OptionsDotIcon.vue'
import type { Todo } from '@/models/todos/todo.module'
import AppTextSuppressed from '@/components/AppTextSuppressed.vue'
const props = defineProps<{
	todo: Todo
}>()
</script>

<template>
	<li class="flex h-fit w-full flex-row justify-start rounded-2xl bg-light-lightest p-4">
		<div class="flex-none">
			<AppCheckbox class="mr-4" />
		</div>
		<div class="grow">
			<AppText
				class="pb-0 font-bold"
				:text="props.todo.title"
			/>
			<AppTextSuppressed :text="props.todo.description"/>
			<div
				class="flex h-fit flex-row"
				:class="{ 'text-red-600': !props.todo.isCompleted }"
			>
				<CalendarIcon/>
				<AppText class="pb-0" :text="props.todo.deadline" />
			</div>
		</div>
		<OptionsDotIcon class="flex-none aspect-square h-fit basis-5" />
	</li>
</template>

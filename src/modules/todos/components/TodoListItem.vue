<script setup lang="ts">
import dayjs from 'dayjs'
import { useI18n } from 'vue-i18n'

import AppCheckbox from '@/components/AppCheckbox.vue'
import AppText from '@/components/AppText.vue'
import AppTextSuppressed from '@/components/AppTextSuppressed.vue'
import CalendarIcon from '@/icons/CalendarIcon.vue'
import OptionsDotIcon from '@/icons/OptionsDotIcon.vue'
import type { Todo } from '@/models/todos/todo.module'
import('dayjs/locale/en')

const props = defineProps<{
	todo: Todo
}>()

const { t } = useI18n()

function formatDate(date: string): string {
	return dayjs(date).format(t('shared.dateFormat'))
}
// const formatDate = (date: string) => {
// 	return dayjs(date).format('DD/MM/YYYY')
// };
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
			<AppTextSuppressed :text="props.todo.description" />
			<div
				class="flex h-fit flex-row"
				:class="{ 'text-red-600': !props.todo.isCompleted }"
			>
				<CalendarIcon />
				<AppText
					class="ml-1 pb-0"
					:text="formatDate(props.todo.deadline)"
				/>
			</div>
		</div>
		<OptionsDotIcon class="aspect-square h-fit flex-none basis-5" />
	</li>
</template>

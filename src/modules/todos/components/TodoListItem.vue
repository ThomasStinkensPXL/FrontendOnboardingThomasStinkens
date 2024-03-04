<script setup lang="ts">
import dayjs from 'dayjs'
import { useI18n } from 'vue-i18n'

import AppCheckbox from '@/components/AppCheckbox.vue'
import AppIconText from '@/components/AppIconText.vue'
import AppText from '@/components/AppText.vue'
import AppTextSuppressed from '@/components/AppTextSuppressed.vue'
import CalendarIcon from '@/icons/CalendarIcon.vue'
import type { Todo } from '@/models/todos/todo.module'
import TodoListItemOptionsButton from '@/modules/todos/components/TodoListItemOptionsButton.vue'
import('dayjs/locale/en')

const props = defineProps<{
	todo: Todo
}>()

const emit = defineEmits<{
	editClicked: [string]
	deleteClicked: [string]
}>()

const { t } = useI18n()

function formatDate(date: string): string {
	return dayjs(date).format(t('shared.dateFormat'))
}

function deleteTodo(): void {
	emit('deleteClicked', props.todo.uuid)
}

function editTodo(): void {
	emit('editClicked', props.todo.uuid)
}
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
				<AppIconText :text="formatDate(props.todo.deadline)">
					<CalendarIcon class="h-5 w-5" />
				</AppIconText>
			</div>
		</div>
		<TodoListItemOptionsButton
			class="h-fit flex-none basis-5"
			@delete-clicked="deleteTodo"
			@edit-clicked="editTodo"
		/>
	</li>
</template>

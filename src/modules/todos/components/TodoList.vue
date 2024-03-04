<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import AppText from '@/components/AppText.vue'
import AppTitle from '@/components/AppTitle.vue'
import type { Todo } from '@/models/todos/todo.model'
import TodoListItem from '@/modules/todos/components/TodoListItem.vue'

const props = defineProps<{
	todos: Todo[]
	isLoading: boolean
}>()

const { t } = useI18n()
</script>

<template>
	<AppTitle
		class="pb-4 font-bold"
		:text="t('todos.my_todos')"
	/>
	<div>
		<AppText
			v-if="props.isLoading"
			:text="t('shared.loading')"
		/>
		<div v-else-if="props.todos.length > 0">
			<ul class="w-full space-y-3">
				<TodoListItem
					v-for="todo in props.todos"
					:key="todo.uuid"
					:todo="todo"
				/>
			</ul>
		</div>
		<p v-else>{{ t('todos.empty') }}</p>
	</div>
</template>

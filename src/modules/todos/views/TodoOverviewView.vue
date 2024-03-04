<script setup lang="ts">
import { ref } from 'vue'

import AppButton from '@/components/AppButton.vue'
import AppDialog from '@/components/AppDialog.vue'
import CreateTodoForm from '@/modules/todos/components/CreateTodoForm.vue'
import TodoList from '@/modules/todos/components/TodoList.vue'
import { useTodoIndexQuery } from '@/modules/todos/queries/todoIndex.query'

const { data: todos, isLoading } = useTodoIndexQuery()

const isOpen = ref<boolean>(false)

function setDialogState(value: boolean): void {
	isOpen.value = value
}
</script>

<template>
	<div class="flex h-screen w-screen flex-col items-center justify-center">
		<div class="w-[460px]">
			<TodoList
				:is-loading="isLoading"
				:todos="todos"
			/>
		</div>
		<div class="absolute bottom-5 right-5 mb-0">
			<AppButton
				text="+"
				@click="setDialogState(true)"
			/>
		</div>
	</div>
	<AppDialog
		:is-open="isOpen"
		@close-dialog="setDialogState(false)"
	>
		<CreateTodoForm />
	</AppDialog>
</template>

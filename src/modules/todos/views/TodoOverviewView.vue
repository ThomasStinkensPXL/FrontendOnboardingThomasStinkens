<script setup lang="ts">
import TodoList from '@/modules/todos/components/TodoList.vue'
import { useTodoIndexQuery } from '@/modules/todos/queries/todoIndex.query'

const { data: todos, isLoading } = useTodoIndexQuery()
</script>

<template>
	<div class="flex h-screen w-screen flex-col items-center justify-center">
		<div class="w-[460px]">
			<TodoList
				:is-loading="isLoading"
				:todos="todos"
			/>
		</div>
	</div>
</template>

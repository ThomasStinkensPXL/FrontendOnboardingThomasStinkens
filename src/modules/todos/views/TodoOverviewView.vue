<script setup lang="ts">
import TodoList from '@/modules/todos/components/TodoList.vue'
import { useTodoIndexQuery } from '@/modules/todos/queries/todoIndex.query'
import { useI18n } from 'vue-i18n'
import AppTitle from '@/components/AppTitle.vue'

const { data: todos, isLoading } = useTodoIndexQuery()
const { t } = useI18n()
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

import type { UseQueryReturnType } from '@tanstack/vue-query'
import { useQuery } from '@tanstack/vue-query'

import type { Todo } from '@/models/todos/todo.module'
import { todoService } from '@/modules/todos/services/todo.service'

export function useTodoIndexQuery(): UseQueryReturnType<Todo, null> {
	return useQuery({
		queryKey: ['todos'],
		queryFn: async () => await todoService.getAll(),
	})
}

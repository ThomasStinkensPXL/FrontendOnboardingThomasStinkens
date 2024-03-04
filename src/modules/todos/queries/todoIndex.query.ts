import type { UseQueryReturnType } from '@tanstack/vue-query'
import { useQuery } from '@tanstack/vue-query'

import type { Todo } from '@/models/todos/todo.model'
import { todoService } from '@/modules/todos/services/todo.service'

enum queryKeys {
	todos = 'todos',
}

export function useTodoIndexQuery(): UseQueryReturnType<Todo, null> {
	return useQuery({
		queryKey: [queryKeys.todos],
		queryFn: async () => await todoService.getAll(),
	})
}

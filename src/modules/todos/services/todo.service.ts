import { httpClient } from '@/http/httpclient'
import type { Todo } from '@/models/todos/todo.model'

interface TodoService {
	getAll: () => Promise<Todo[]>
}

export const todoService: TodoService = {
	getAll: async (): Promise<Todo[]> => {
		const response = await httpClient.get('/v1/todos')
		return response.data
	},
}

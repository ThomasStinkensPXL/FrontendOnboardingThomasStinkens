import type { Todo } from '@/models/todos/todo.module'
import { httpClient } from '@/http/httpclient'

interface TodoService {
	getAll: () => Promise<Todo[]>
}

export const todoService: TodoService = {
	getAll: async (): Promise<Todo[]> => {
		const response = await httpClient.get('/v1/todos')
		return response.data
	},
}
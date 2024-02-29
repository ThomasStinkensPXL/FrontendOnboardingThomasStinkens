import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

import { useAuthStore } from '@/modules/auth/stores/auth.store'

enum RouteNames {
	index = 'index',
	login = 'login',
	todos = 'todos',
}

const routes: RouteRecordRaw[] = [
	{
		path: '/login',
		name: RouteNames.login,
		component: async () => import('@/modules/auth/views/AuthLoginView.vue'),
	},
	{
		path: '/',
		name: RouteNames.index,
		meta: { requiresAuth: true },
		redirect: '/todos',
		children: [
			{
				path: '/todos',
				name: RouteNames.todos,
				component: async () => import('@/views/TodoOverviewView.vue'),
			},
		],
	},
	{
		name: 'error',
		path: '/:pathMatch(.*)*',
		component: async () => import('@/views/Error404View.vue'),
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes: routes,
})

router.beforeEach(async (to) => {
	await useAuthStore().getCurrentUser()

	if (to.meta.requiresAuth && !useAuthStore().isAuthenticated) {
		return {
			name: RouteNames.login,
		}
	}
})

export { router }

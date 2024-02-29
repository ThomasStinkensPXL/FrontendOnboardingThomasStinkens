import './assets/main.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'

import { i18nPlugin } from '@/plugins/i18n/i18n'
import { router } from '@/router/router'
import { VueQueryPlugin } from '@tanstack/vue-query'

import App from './App.vue'
const app = createApp(App)
const pinia = createPinia()

app.use(i18nPlugin).use(pinia).use(router).use(VueQueryPlugin)

app.mount('#app')

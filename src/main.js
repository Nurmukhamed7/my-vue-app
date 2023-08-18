import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './scss/main.scss'

import Admin from './components/Admin/Admin.vue'
import EnterPage from './components/EnterPage/EnterPage.vue'
import Manager from './components/Manager/Manager.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			name: 'EnterPage',
			path: '/',
			component: EnterPage,
		},
		{
			name: 'Admin',
			path: '/admin',
			component: Admin,
		},
		{
			name: 'Manager',
			path: '/manager',
			component: Manager,
		},
	],
})

createApp(App).use(router).mount('#app')

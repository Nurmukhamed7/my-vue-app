import { createRouter, createWebHistory } from 'vue-router'

import Admin from './components/Admin/Admin.vue'
import EnterPage from './components/EnterPage/EnterPage.vue'
import Manager from './components/Manager/Manager.vue'

export default createRouter({
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

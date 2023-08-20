import { createApp } from 'vue'
import App from './App.vue'

// Иконки
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import {
	FaGamepad,
	FcGlobe,
	IoSearchOutline,
	ViFileTypeExcel2,
	ViFileTypePdf2,
} from 'oh-vue-icons/icons'
addIcons(FaGamepad, IoSearchOutline, FcGlobe, ViFileTypeExcel2, ViFileTypePdf2)

import router from './router'
import './scss/main.scss'

createApp(App).use(router).component('v-icon', OhVueIcon).mount('#app')

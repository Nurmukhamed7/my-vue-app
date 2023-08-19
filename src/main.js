import { createApp } from 'vue'
import App from './App.vue'

import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { FaGamepad } from 'oh-vue-icons/icons'

addIcons(FaGamepad)

import router from './router'
import './scss/main.scss'

createApp(App).use(router).component('v-icon', OhVueIcon).mount('#app')

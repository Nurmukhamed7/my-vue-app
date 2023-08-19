import { createApp } from 'vue'
import App from './App.vue'

// Иконки
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { FaGamepad, FcGlobe, IoSearchOutline } from 'oh-vue-icons/icons'
addIcons(FaGamepad, IoSearchOutline, FcGlobe)

import router from './router'
import './scss/main.scss'

createApp(App).use(router).component('v-icon', OhVueIcon).mount('#app')

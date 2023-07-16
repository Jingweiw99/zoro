import { createApp } from 'vue'

import '@/styles/index.scss'

import App from './App.vue'
import 'virtual:svg-icons-register'
import ElementIcon from './utils/element'
import globalComponent from './components/index'
import router from './router'
import pinia from './store'

const app = createApp(App)
app.use(pinia)
app.use(ElementIcon)
app.use(globalComponent)
app.use(router)
app.mount('#app')

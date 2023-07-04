import { createApp } from 'vue'
import './style.css'

import App from './App.vue'
import 'virtual:svg-icons-register'

// 获取vite环境变量 默认是devlopment，build默认是production
console.log(import.meta.env, import.meta.env.VITE_APP_BASE_API)
const app = createApp(App)
app.mount('#app')

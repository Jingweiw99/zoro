import { createApp } from 'vue'

import '@/styles/index.scss'

import App from './App.vue'
import 'virtual:svg-icons-register'
import globalComponent from './components/index'
import router from './router'

// test mock
// import axios from 'axios'
// axios({
//   url: 'api/user/login',
//   method: 'post',
//   data: {
//     username: 'admin',
//     password: '111111',
//   },
// }).then((res) => {
//   console.log(res)
// })

// 获取vite环境变量 默认是devlopment，build默认是production
// console.log(import.meta.env, import.meta.env.VITE_APP_BASE_API)
const app = createApp(App)
app.use(globalComponent)
app.use(router)
app.mount('#app')

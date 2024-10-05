import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'

import '/src/assets/styles/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import router from './router'

import i18n from '/src/locales/i18n'

const app = createApp(App)

app.use(ElementPlus)
app.use(router)
app.use(i18n)
app.mount('#app')

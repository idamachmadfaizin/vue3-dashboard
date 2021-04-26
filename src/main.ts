import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import Router from './router'
import Store from './store/store'

createApp(App)
    .use(Router)
    .use(Store)
    .mount('#app')

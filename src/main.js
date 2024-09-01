import '@/assets/styles/base.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import searchUser from './stores/search-user'

const app = createApp(App)
app.use(router).use(searchUser).mount('#app')

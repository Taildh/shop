import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import print from 'vue3-print-nb'

const app = createApp(App)
app.use(print);
app.use(router)

app.mount('#app')

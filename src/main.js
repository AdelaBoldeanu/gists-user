import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import "@/assets/scss/_app.scss";

const app = createApp(App)

app.use(router)

app.mount('#app')

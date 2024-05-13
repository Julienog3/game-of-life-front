import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import GolSimulator from './components/GolSimulator.vue'

const app = createApp(App)

createApp(App)

app.use(createPinia())
app.use(router)

app.component('GolSimulator', GolSimulator)

app.mount('#app')
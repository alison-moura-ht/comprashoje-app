import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Login from './pages/Login.vue'
import Home from './pages/Home.vue'
import Lista from './pages/Lista.vue'
import "./index.css"

const router = createRouter({
    routes: [
        { path: "/", component: Login },
        { path: "/home", component: Home },
        { path: "/lista", component: Lista }
    ],
    history: createWebHistory()
})

const app = createApp(App)
app.use(router)
app.mount('#app')

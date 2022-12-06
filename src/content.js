import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ConnectPage from '@views/content-page/index.vue'
// import router from './router'

const root = document.createElement('div')
root.id = 'app'
document.body.appendChild(root)
console.log(root)

const app = createApp(ConnectPage)
app.use(createPinia())
// app.use(router)
app.mount('#app')

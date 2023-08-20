import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.config.errorHandler = (err, instance, info) => {
    console.log("===============================================================================");
    console.log("Error: ", err);
    console.log("Error: ", instance);
    console.log("Error: ", info);
    console.log("===============================================================================");
}

app.use(createPinia())
app.use(router)

app.mount('#app')

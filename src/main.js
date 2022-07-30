import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { store } from './store'
import { router } from './router'
import 'element-plus/dist/index.css';


const app = createApp(App)
app.use(store)
    .use(router)
    .use(ElementPlus)
    .mount('#app')
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
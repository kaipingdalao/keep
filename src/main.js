import { createApp } from 'vue'
import App from './App.vue'
// import './index.css'
import VueMarkdownIt from 'vue3-markdown-it';
import router from './router/index'
import store from './store'


createApp(App).use(router).use(VueMarkdownIt).use(store).mount('#app')
// createApp(App).use(router).use(VueMarkdownIt).mount('#app')


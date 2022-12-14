import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './app.css';
import './registerServiceWorker'

createApp(App).use(router).mount('#app');

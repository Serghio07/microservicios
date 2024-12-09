import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';

const app = createApp(App);

app.use(router); // Conecta el router a la aplicación
app.mount('#app');

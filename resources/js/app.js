import './bootstrap';

import { createApp } from 'vue';
import app from './components/app.vue';
import app_2 from './components/app_2.vue';
import router from './router/index.js';

createApp(app_2).mount("#app");

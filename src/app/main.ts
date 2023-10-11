import { createApp } from 'vue'
import {router} from './providers/router'
import App from './App.vue'

import './index.scss';

createApp(App).use(router).mount('#app');

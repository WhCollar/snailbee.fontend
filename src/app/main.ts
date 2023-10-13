import { createApp } from 'vue';
import {UidPlugin} from "shared/lib/directives/uid"
import {router} from './providers/router';
import App from './App.vue';

import './index.scss';

createApp(App).use(UidPlugin).use(router).mount('#app');

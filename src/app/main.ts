import { VueQueryPlugin } from '@tanstack/vue-query';
import { createApp } from 'vue';
import { UidPlugin } from 'shared/lib';
import App from './App.vue';
import { router } from './providers';

import './index.scss';

createApp(App).use(UidPlugin).use(router).use(VueQueryPlugin).mount('#app');

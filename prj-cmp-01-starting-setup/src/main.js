import { createApp } from 'vue';

import App from './App';
import BaseCard from './components/UI/BaseCard';
import TheHeader from './components/layouts/TheHeader';

const app = createApp(App);

app.component('base-card', BaseCard);
app.component('the-header', TheHeader);

app.mount('#app');

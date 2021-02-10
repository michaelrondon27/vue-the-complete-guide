import { createApp } from 'vue';

import App from './App';
import BaseButton from './components/UI/BaseButton';
import BaseCard from './components/UI/BaseCard';

const app = createApp(App);

app.component('base-button', BaseButton);
app.component('base-card', BaseCard);

app.mount('#app');

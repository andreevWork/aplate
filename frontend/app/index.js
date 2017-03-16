import Vue from 'vue';
import Init from './begin/init';
import Settings from './begin/settings';
import Store from './begin/store';
import Router from './begin/router';
import App from './components/App';

Init(Vue);
Settings(Vue);

const store = Store();
const router = Router();
const el = '#app';

new Vue({
    el,
    store,
    router,
    render: h => h(App)
});



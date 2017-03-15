import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource';
import VueMaterial from 'vue-material';
import ProductCatalog from './components/ProductCatalog/ProductCatalog';
import Products from './store/products/index';
import VueCarousel from 'vue-carousel';


Vue.use(VueMaterial);
Vue.use(VueResource);
Vue.use(VueCarousel);
Vue.use(Vuex);
Vue.http.options.root = '/api';

Vue.material.registerTheme('default', {
    primary: {
        color: 'indigo',
        hue: 'A200'
    },
    accent: {
        color: 'brown',
        hue: 200
    },
    background: {
        color: 'gray',
        hue: 50
    }
});

const store = new Vuex.Store({
    modules: {
        products: new Products().getStore()
    }
});

new Vue({
    el: '#app',
    store,
    render: h => h(ProductCatalog)
});

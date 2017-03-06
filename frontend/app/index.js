import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource';
import VueMaterial from 'vue-material';
import ProductCatalog from './components/ProductCatalog/ProductCatalog';
import Products from './store/products/index';

Vue.use(VueMaterial);
Vue.use(VueResource);
Vue.use(Vuex);
Vue.http.options.root = '/api';

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

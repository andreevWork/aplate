import Vuex from 'vuex';
import Products from './../store/products/index';

export default function () {
    return new Vuex.Store({
        modules: {
            products: new Products()
        }
    });
}
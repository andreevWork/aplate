import Vuex from 'vuex';
import Products from './../store/products/products';
import Product from './../store/products/product';

export default function () {
    return new Vuex.Store({
        modules: {
            products: new Products(),
            product: new Product()
        }
    });
}
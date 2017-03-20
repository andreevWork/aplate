import Vuex from 'vuex';
import Products from './../store/products/products';
import Product from './../store/products/product';
import Cart from './../store/cart/cart';

export default function () {
    return new Vuex.Store({
        modules: {
            products: new Products(),
            cart: new Cart(),
            product: new Product()
        }
    });
}
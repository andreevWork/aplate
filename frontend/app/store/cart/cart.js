import Store from './../base';

export default class Cart extends Store {

    data = [];

    constructor() {
        super();
        return this.getStore();
    }

    getMutations() {
        return {
            addToCart (state, product_id) {
                state.data.push(product_id);
            }
        }
    }
}
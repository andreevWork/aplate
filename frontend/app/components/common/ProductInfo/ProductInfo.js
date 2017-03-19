import addTemplate from './ProductInfo.html';
import Vue from 'vue';

const component = addTemplate({
    name: 'ProductInfo',

    props: {
        product: Object
    },

    methods: {
        preView() {
            this.$emit('onPreView', this.product);
        },
        goToCard() {
            this.$router.push({name: 'product', params: { id: this.product.id }})
        }
    }
});

Vue.component('product-info', component);

export default component;
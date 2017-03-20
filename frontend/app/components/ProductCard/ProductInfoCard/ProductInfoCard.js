import addTemplate from './ProductInfoCard.html';
import ProductInfo from './../../common/ProductInfo/ProductInfo';

const component = addTemplate({
    name: 'ProductPreview',

    methods: {
        addToCart() {
            this.$emit('addToCart');
        }
    },

    extends: ProductInfo
});

export default component;
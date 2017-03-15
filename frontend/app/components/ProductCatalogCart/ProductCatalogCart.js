import addTemplate from './ProductCatalogCart.html';
import { Carousel, Slide } from 'vue-carousel';

export default addTemplate({
    name: 'ProductsCatalogCard',

    props: {
        product: Object,
        is_full: Boolean
    },
    
    methods: {
        preView() {
            this.$emit('onPreView', this.product);
        }
    },
    
    components: {
        Carousel,
        Slide
    }
})
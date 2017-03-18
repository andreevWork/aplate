import addTemplate from './ProductCard.html';
import ProductsCatalogCard from './../ProductCatalogCart/ProductCatalogCart';
import { mapActions } from 'vuex';

export default addTemplate({
    name: 'ProductCard',

    computed: {
        product() {
            return this.$store.state.product.data;
        }
    },

    methods: {
        ...mapActions([
            'loadProduct'
        ])
    },
    
    components: {
        'card': ProductsCatalogCard
    },

    created() {
        this.loadProduct(this.$route.params.id);
    }
})
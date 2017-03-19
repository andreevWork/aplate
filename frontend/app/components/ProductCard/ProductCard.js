import addTemplate from './ProductCard.html';
import ProductInfoCard from './ProductInfoCard/ProductInfoCard';
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
        'card': ProductInfoCard
    },

    created() {
        this.loadProduct(this.$route.params.id);
    }
})
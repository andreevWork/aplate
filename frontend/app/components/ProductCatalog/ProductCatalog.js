import addTemplate from './ProductCatalog.html';
import { mapState, mapActions } from 'vuex';

export default addTemplate({
    name: 'Products',

    computed: {
        products() {
            return this.$store.state.products.data;
        }
    },

    methods: {
        ...mapActions([
            'loadProducts'
        ])
    },

    created() {
        this.loadProducts();
    }
})
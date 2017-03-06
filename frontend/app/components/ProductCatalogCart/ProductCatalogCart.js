import addTemplate from './ProductCatalogCart.html';
import { mapState, mapActions } from 'vuex';

export default addTemplate({
    name: 'Products',
    
    computed: {
        ...mapState([
            'products'
        ])
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
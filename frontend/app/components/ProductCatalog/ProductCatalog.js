import addTemplate from './ProductCatalog.html';
import ProductInfoCatalog from './ProductInfoCatalog/ProductInfoCatalog';
import ProductInfoCard from './../ProductCard/ProductInfoCard/ProductInfoCard';
import { mapState, mapActions, mapMutations } from 'vuex';

export default addTemplate({
    name: 'ProductsCatalog',

    data() {
        return {
            active_product: null
        }
    },

    computed: {
        products() {
            return this.$store.state.products.data;
        }
    },

    methods: {
        ...mapActions([
            'loadProducts'
        ]),
        ...mapMutations([
            'addToCart'
        ]),
        openPreView(product) {
            this.active_product = product;
            this.$refs.dialog.open();
        },
        closePreView() {
            document.body.classList.toggle('hidden');
        }
    },

    components: {
        'card': ProductInfoCatalog,
        'preview': ProductInfoCard
    },

    created() {
        this.loadProducts();
    }
})
import addTemplate from './ProductCatalog.html';
import ProductInfoCatalog from './ProductInfoCatalog/ProductInfoCatalog';
import ProductPreview from './ProductPreview/ProductPreview';
import { mapState, mapActions } from 'vuex';

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
        'preview': ProductPreview
    },

    created() {
        this.loadProducts();
    }
})
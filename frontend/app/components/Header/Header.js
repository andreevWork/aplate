import addTemplate from './Header.html';

export default addTemplate({
    computed: {
        cart() {
            return this.$store.state.cart.data;
        }
    }
});
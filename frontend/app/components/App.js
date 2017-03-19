import addTemplate from './App.html';
import Hammer from 'hammerjs';
import ProductCatalog from './ProductCatalog/ProductCatalog';
import Header from './Header/Header';

function importAll (r) {
    r.keys().forEach(r);
}
importAll(require.context("./common/", true, /\.js$/));

export default addTemplate({
    name: 'App',

    components: {
        'catalog': ProductCatalog,
        'hat': Header
    },

    mounted() {
        var mc = new Hammer.Manager(this.$refs.navigate, {
            recognizers: [
                [
                    Hammer.Swipe,
                    { direction: Hammer.DIRECTION_ALL }
                ]
            ]
        });

        mc.on('swiperight', () => {
            this.$router.back();
        });

    }
})
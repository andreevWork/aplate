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
        // var hammertime = new Hammer(document.body, {});
        // hammertime.get('pan').set({ threshold: 100 });
        //
        // hammertime.on('panleft', function(ev) {
        //     alert(ev);
        // });

    }
})
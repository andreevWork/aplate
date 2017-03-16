import addTemplate from './App.html';
import ProductCatalog from './ProductCatalog/ProductCatalog';
import Header from './Header/Header';

export default addTemplate({
    name: 'App',

    components: {
        'catalog': ProductCatalog,
        'hat': Header
    }
})
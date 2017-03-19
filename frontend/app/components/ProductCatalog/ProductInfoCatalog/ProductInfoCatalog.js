import addTemplate from './ProductInfoCatalog.html';
import ProductInfo from './../../common/ProductInfo/ProductInfo';

const component = addTemplate({
    name: 'ProductInfoCatalog',

    extends: ProductInfo
});

export default component;
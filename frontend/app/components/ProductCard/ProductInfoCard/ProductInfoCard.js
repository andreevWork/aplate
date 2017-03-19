import addTemplate from './ProductInfoCard.html';
import ProductInfo from './../../common/ProductInfo/ProductInfo';

const component = addTemplate({
    name: 'ProductPreview',

    extends: ProductInfo
});

export default component;
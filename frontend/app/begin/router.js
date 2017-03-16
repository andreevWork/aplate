import VueRouter from 'vue-router';
import ProductCatalog from './../components/ProductCatalog/ProductCatalog';
import ProductCard from './../components/ProductCard/ProductCard';

export default function () {
    return new VueRouter({
        mode: 'history',
        routes: [
            {
                path: '/',
                name: 'main',
                component: ProductCatalog
            },
            {
                path: '/product',
                name: 'product',
                component: ProductCard
            }
        ]
    });
}
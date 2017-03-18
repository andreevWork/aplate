import Store from './../base';
import {ProductMainFieldsName, ProductMainFields} from './type';

export default class Products extends Store {

    constructor() {
        super();
        return this.getStore();
    }

    query = `
      query {
        viewer {
          products(first: 5) {
            edges {
              node {
                ...${ProductMainFieldsName}
              }
            }
           }
        }
      }
      
      ${ProductMainFields}
    `;

    data = [];

    getActions() {
        return {
            loadProducts: (store) => {
                return this.getQuery()
                    .then(({data}) => {
                        store.commit('setData', data.viewer.products.edges);
                    });
            }
        }
    }
}
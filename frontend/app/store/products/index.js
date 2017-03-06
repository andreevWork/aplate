import Store from './../base';
import {ProductFields, ProductFieldsName} from './type';

export default class Products extends Store {

    query = `
      query {
        viewer {
          products(first: 5) {
            edges {
              node {
                ...${ProductFieldsName}
              }
            }
           }
        }
      }
      
      ${ProductFields}
    `;

    getState() {
        return {
            data: []
        };
    }

    getMutations() {
        return {
            setProducts (state, data) {
                state.data = data;
            }
        }
    }

    getActions() {
        return {
            loadProducts: (store) => {
                Store.get({params: {query: this.query}})
                    .then(({data}) => {
                        store.commit('setProducts', data.viewer.products.edges)
                    });
            }
        }
    }
}
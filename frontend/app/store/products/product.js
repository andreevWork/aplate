import Store from './../base';
import {ProductMainFieldsName, ProductMainFields, ProductOptionalFields, ProductOptionalFieldsName} from './type';

export default class Product extends Store {

    constructor() {
        super();
        return this.getStore();
    }

    query = `
      query($id: ID!) {
        viewer {
          product(id: $id) {
            ...${ProductMainFieldsName}
            ...${ProductOptionalFieldsName}
          }
        }
      }
      
      ${ProductMainFields}
      
      ${ProductOptionalFields}
    `;

    getActions() {
        return {
            loadProduct: (store, id) => {
                return this.getQuery({id})
                    .then(({data}) => {
                        store.commit('setData', data.viewer.product);
                    });
            }
        }
    }
}
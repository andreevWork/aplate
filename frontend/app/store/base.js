import Vue from 'vue';

export default class Store {

    static getFnName(key) {
        return `get${key.slice(0,1).toUpperCase().concat(key.slice(1))}`;
    }
    
    data = {};
    
    getQuery(variables) {
        return Vue.http.get('', this.getParams(variables)).then(data => {
            if (!data.ok) {
                throw Error(`Vue get error: status - ${data.status}`);
            }
            return data.json();
        });
    }

    getParams(variables) {
        const params = {
            query: this.query
        };

        if (variables) {
            params.variables = JSON.stringify(variables);
        }
        
        return {params};
    }

    getMutations() {
        return {
            setData (state, data) {
                state.data = data;
            }
        }
    }

    getState() {
        return {
            data: this.data
        };
    }
    
    getStore() {
        const props = ['state', 'mutations', 'actions'];

        return props.reduce((store, prop) => {
            const fn = this[Store.getFnName(prop)];
            if (fn) {
                store[prop] = fn.call(this);
            }
            return store;
        }, {})
    }
}
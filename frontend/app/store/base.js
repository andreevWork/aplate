import Vue from 'vue';

export default class Store {

    static getFnName(key) {
        return `get${key.slice(0,1).toUpperCase().concat(key.slice(1))}`;
    }
    
    getQuery() {
        return Vue.http.get('', {params: {query: this.query}}).then(data => {
            if (!data.ok) {
                throw Error(`Vue get error: status - ${data.status}`);
            }
            return data.json();
        });
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
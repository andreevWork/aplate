import Vue from 'vue';
import App from './test';
console.log(App);
new Vue({
    el: '#app',
    render: h => h(App)
});
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import VueMaterial from 'vue-material';
import VueCarousel from 'vue-carousel';

export default function (App) {
    App.use(VueMaterial);
    App.use(VueResource);
    App.use(VueCarousel);
    App.use(VueRouter);
    App.use(Vuex);
}


require('./bootstrap');

window.Vue = require('vue');

Vue.component('app', require('./components/AppComponent.vue').default);
Vue.component('posts', require('./components/PostsComponent.vue').default);
Vue.component('infiniteLoading', require('vue-infinite-loading'));

import router from './routes'
const app = new Vue({
    el: '#app',
    router
});

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'home',
			component: require('./views/home').default
		},
		{
			path: '/blog',
			name: 'blog',
			component: require('./views/blog').default
		},
		{
			path: ':slug',
			name: 'post',
			component: require('./views/post').default,
			props: true
		},
		{
			path: '*',
			component: require('./views/404').default
		}
	],
	mode: 'history',
	scrollBehavior() {
		return {x:0, y:0}
	}
})
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home';
import User from '../components/User';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/user',
        component: User,
    },
];

export default new VueRouter({
    mode: 'history',
    routes,
});
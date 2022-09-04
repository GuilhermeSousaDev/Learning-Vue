import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home';
import Menu from '../components/Menu';
import User from '../components/User';
import UserList from '../components/User/UserList';
import UserDetails from '../components/User/UserDetails';
import UserEdit from '../components/User/UserEdit';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        components: {
            default: Home,
            menu: Menu
        }
    },
    {
        path: '/user',
        component: User,
        props: true,
        children: [
            { path: '', component: UserList },
            { path: ':id', component: UserDetails, props: true },
            { path: ':id/edit', component: UserEdit, props: true,
                name: 'editUser' }
        ]
    },
    {
        path: '/redirect',
        redirect: '/user'
    },
    {
        path: '*',
        redirect: '/'
    }
];

export default new VueRouter({
    mode: 'history',
    routes,
});
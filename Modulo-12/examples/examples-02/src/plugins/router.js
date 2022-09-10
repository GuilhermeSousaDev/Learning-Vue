import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home';
import Menu from '../components/Menu';

Vue.use(VueRouter);

const User = () => import('../components/User');
const UserEdit = () => import('../components/User/UserEdit');
const UserList = () => import('../components/User/UserList');
const UserDetails = () => import('../components/User/UserDetails');

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

const vueRouter = new VueRouter({
    mode: 'history',
    scrollBehavior (to) {
        if (to.hash) {
            return { selector: to.hash }
        }
    },
    routes,
});

vueRouter.beforeEach((to, from, next) => {
    console.log('before route');
    next();
});

export default vueRouter;
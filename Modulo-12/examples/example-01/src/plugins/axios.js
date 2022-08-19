import Vue from 'vue';
import axios from 'axios';

//axios.defaults.baseURL = 'https://vuecourse-da17e-default-rtdb.firebaseio.com/';

Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios.create({
            baseURL: 'https://vuecourse-da17e-default-rtdb.firebaseio.com/'
        });
        Vue.prototype.$http.interceptors.request.use(config => {
            console.log(config.method)

            return config;
        });
    }
})
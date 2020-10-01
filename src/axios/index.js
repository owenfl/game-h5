import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
import { setCookie, getCookie, delCookie } from './../assets/js/cookie'


// import router from './../router'
// import { Message } from 'element-ui'
// import layer from 'vue-layer'

// 允许携带cookie
// axios.defaults.withCredentials = true; 

// 请求拦截
axios.interceptors.request.use(config => {
    // if (sessionStorage.getItem('token')) config.headers.token = sessionStorage.token;
    let param = config.data;
    config.data = qs.stringify(param);
    return config;
}, error => {
    // layer(Vue).msg('网络崩溃了')

    // Message({showClose: true, message: '网络崩溃了', type: 'error'});
    return Promise.reject(error);
})

// 响应拦截
axios.interceptors.response.use(response => {
    // if (response.data.state === 443 || response.data.state === 444) {
    //     sessionStorage.clear();
    //     router.push('/login');
    // }
    // if (response.data.data.)
    let data = response.data.data;
    // if (data && data.code && data.code !== 0 && data.code !== 1) Message({showClose: true, message: data.msg, type: 'warning'});


    // if (data && data.code && data.code !== 0 && data.code !== 1) layer(Vue).msg(data.msg);
    if (data && data.code && data.code !== 0 && data.code !== 1) {
        console.log("axios/index.js:",data.msg)

        this.$toast.text(data.msg);
        setTimeout(() => {
            delCookie('uid');
            delCookie('token');
            // this.$router.push('login')
        },1000)
    }

    if (data && data.code === 700) {
        localStorage.clear();
        setTimeout(() => {
            location.reload();
        }, 3000)
    }
    return response;
}, error => {
    // Message({showClose: true, message: '网络崩溃了', type: 'error'});
    // layer(Vue).msg('网络崩溃了')
    return Promise.reject(error);
})

export default axios
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    // 存储数据和状态
    state: {
        token: false,
        isLogin: false,
        userInfo: {},
        userloginInfo: {},
    },
    getters: {
        // getToken: state => state.token,
        // getIsLogin: state => state.isLogin,
        // getUserInfo: state => state.userInfo,
        // getUserloginInfo: state => state.userloginInfo,
    },
    // 改变数据方法的集合，同步
    mutations: {
        // setToken: (state, data) => state.token = data,
        // setIsLogin: (state, data) => state.isLogin = data,
        // setUserInfo: (state, data) => state.userInfo = data,

        setUserloginInfo: (state, data) => state.userloginInfo = data,
    },
    // 异步
    actions: {
        // setToken: (context, payload) => context.commit('setToken', payload),
        // setIsLogin: (context, payload) => context.commit('setIsLogin', payload),
        // setUserInfo: (context, payload) => context.commit('setUserInfo', payload),

        setUserloginInfo: (context, payload) => context.commit('setUserloginInfo', payload),
    },
    // 让每个模块都有自己的state
    modules: {}
})
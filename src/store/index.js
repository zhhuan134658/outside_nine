import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //!缓存 一般信息
    Authorization: window.sessionStorage.getItem('Authorization'),
    //extend_three: window.sessionStorage.getItem('extend_three'),
    userInfo: {},
  },

  actions: {},
  getters: {},
  mutations: {
    setAuthorization(state, Authorization) {
      state.Authorization = Authorization;
      sessionStorage.setItem('Authorization', Authorization);
    },
  },
});

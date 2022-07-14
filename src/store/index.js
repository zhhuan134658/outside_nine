import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //!缓存 一般信息
    primaryColor: window.sessionStorage.getItem('extend_three'),
    //extend_three: window.sessionStorage.getItem('extend_three'),
    userInfo: {
      //!缓存 userinfo接口返回的信息
      corpid: window.sessionStorage.getItem('corpid'),
      userid: window.sessionStorage.getItem('userid'),
    },
  },

  actions: {},
  getters: {},
  mutations: {
    setprimaryColor(state, primaryColor) {
      state.primaryColor = primaryColor;
      sessionStorage.setItem('primaryColor', primaryColor);
    },
    setCorpid(state, corpid) {
      state.userInfo.corpid = corpid;
      sessionStorage.setItem('corpid', corpid);
    },
    setUserid(state, userid) {
      state.userInfo.userid = userid;
      sessionStorage.setItem('userid', userid);
    },
  },
});

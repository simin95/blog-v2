// 定义异步动作
// 在组件中通过 $store.dispatch('') 来分发action

const actions = {
  setCurIndex({ commit }, index) {
    setTimeout(() => {
      commit('SETCURINDEX', index);
    }, 100)
  },
  // 登录相关
  hasLogin({ commit }) {
    commit('LOGIN');
  },
  noLogin({commit}) {
    commit('LOGOUT');
  },

  // 用户信息
  setUserName({ commit }, username) {
    commit('SETUSERNAME', username);
  },
  setUserInfo({ commit }, userinfo) {
    commit('SETUSERINFO', userinfo);
  }
};

export default actions;

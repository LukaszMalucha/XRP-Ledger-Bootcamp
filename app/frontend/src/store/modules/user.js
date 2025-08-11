import api from "../../api/api.js"

const state = {
  token: window.localStorage.getItem('token'),
  username: window.localStorage.getItem('username'),
  admin: window.localStorage.getItem('admin'),
  error: null
};


const getters = {
// Check if token exists or not
  isLoggedIn: state => !!state.token || !!state.username,
  getUsername: state => state.username,
  getToken: state => state.token,
  getAdmin: state => state.admin,
  getError: state => state.error,
};


const actions = {
  async getUserInfo({ commit }) {
    const response = await api.userInfo();
    if (response["email"] || response["username"]) {
      const username = response["email"] || response["username"];
      const admin = response["admin"];

      window.localStorage.setItem('username', username);
      window.localStorage.setItem('admin', admin);

      commit('setUsername', username);
      commit('setAdmin', admin);
      commit('setToken', window.localStorage.getItem('token'));
    }
    else {
      commit('setUsername', null);
      commit('setAdmin', null);
      commit('setToken', null);

      window.localStorage.removeItem('username');
      window.localStorage.removeItem('admin');
      window.localStorage.removeItem('token');
    }

  },
};


const mutations = {
// Update user
  setUsername: (state, username) => {
    state.username = username
  },
  setAdmin: (state, admin) => {
    state.admin = admin
  },
  setToken: (state, token) => {
    state.token = token;
  },
};


export default {
  state,
  getters,
  actions,
  mutations
}
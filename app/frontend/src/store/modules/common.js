

const state = {
  resultCount: null,
  currentSearch: null,
  loader: false,
  next: null,
  formError: null,
};


const getters = {
  getResultCount: state => state.resultCount,
  getCurrentSearch: state => state.currentSearch,
  getLoader: state => state.loader,
  getNext: state => state.next,
  getFormError: state => state.formError,


};


const actions = {
  performSetFormError({commit}, error) {
    commit("setFormError", error);
  },
  performSetLoader({commit}, loader) {
    commit("setLoader", loader);
  },
};


const mutations = {
  setResultCount:  (state, resultCount) => {
    state.resultCount = resultCount;
  },
  setLoader: (state, loader) => {
    state.loader = loader;
  },
  setNext: (state, next) => {
    state.next = next
  },
  setCurrentSearch: (state, currentSearch) => {
    state.currentSearch = currentSearch
  },
  setFormError: (state, formError) => {
    state.formError = formError
  },
};


export default {
  state,
  getters,
  actions,
  mutations
}
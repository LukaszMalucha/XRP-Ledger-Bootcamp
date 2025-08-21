import { createStore } from 'vuex';
import common from './modules/common';
import xrp from './modules/xrp';
import user from './modules/user';


export default createStore({
  modules: {
    common,
    xrp,
    user,
  }
});

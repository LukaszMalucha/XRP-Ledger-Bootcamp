import { createStore } from 'vuex';
import xrp from './modules/xrp';
import user from './modules/user';


export default createStore({
  modules: {
    xrp,
    user,
  }
});

import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import Page from './modules/page'
Vue.use(Vuex);

export default new Vuex.Store({
   mutations,
   modules: {
    Page
  }
})


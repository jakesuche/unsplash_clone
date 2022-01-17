import Vue from 'vue'
import Vuex from 'vuex'
import photos from './modules/photos.js'


Vue.use(Vuex)
const createStore = () => {
  return new Vuex.Store({
    modules: {
      photos 
    }
  })
}
export default createStore

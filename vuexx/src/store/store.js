import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    count: 0,
    num: 5
  },
  //在store里默认会拿到state，不用this.state
  mutations: {
    increment: state => {
      state.num += 2;
      state.count++;
    },
    decrement: state => {
      state.num += 2;
      state.count--;
    }
  }
});
export default store;

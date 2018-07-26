import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
//引入mutation-type
import {INCREMENT,DECREMENT} from "./mutations-type.js"
const store = new Vuex.Store({
  state: {
    count: 0,
    num: 5
  },
  //在store里默认会拿到state，不用this.state
  mutations: {
    // 采用es5的写法使用mutation-type
    [INCREMENT](state){
      state.num += 2;
      state.count++;
    },
    [DECREMENT](state,payload){
      //mapAction传参，参数要一直传递下去：事件函数===>action===>mutation
      state.num -=payload.num;
      state.count--;
    }
  },
  actions:{
    //actions会接收到相当于store实例的context，所以能够使用store的方法
    //利用对象的解构赋值，简化代码{commit}相当于{commit} = context
    increment({commit}){
      commit("INCREMENT")
    },
    decrement({commit},payload){
      commit("DECREMENT",payload)
    }
  }
});
export default store;

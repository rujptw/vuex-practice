<template>
  <div id="app">
  <p>{{ count }}</p>
  <strong>{{num}}</strong>
  <p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </p>
  </div>
</template>

<script>
import {mapState} from "vuex";
import {mapMutations} from 'vuex'
 export default {
   

/**🌙 state为状态树
 * 
*/

//⭐mapState是为了简化计算属性

   name:"Home",
//🚀原始写法
  //  computed: {
  //    count(){
  //      return this.$store.state.count
  //    },
  //    num(){
  //      return this.$store.state.num
  //    }
  //  }

//🚀mapState的第一种写法,里面的数组也可以换成对象（😍比较喜欢的写法）
   computed: {
     ...mapState([
       // 映射 this.count 为 store.state.count
       'count',
       'num'
     ])
  },

//🚀mapState的第二种写法
  // computed:mapState({
  //   //在mapState中能获得store里的state对象
  //   count: (state) => {
  //     console.log("state",state)
  //     return state.count
  //   },
  //   num:(state)=>{
  //     return state.num
  //   }
  // })


/**
 * 🌙mutaions用于同步
 *  */

//⭐mapMutations是为了简化方法，分发mutations
//第三种写法
  methods: {
//🚕原始写法
    // increment () {
    //   this.$store.commit('INCREMENT')
    // },
    // decrement () {
    // 	this.$store.commit('DECREMENT',{
    //     num:10
    //   })
    // }
//🚕第二种写法，也可采用对象写法(😍比较喜欢的写法))
    // ...mapMutations([
    //   // 将 `this.increment()` 映射为 `this.$store.commit('INCREMENT')`
    //   "increment",
    //   "decrement"
    // ])
//🚕 第三种写法
// methods:mapMutations([
//     "increment",
//     "decrement"
// ]),


/**🌙
 * action为处理异步
 * */

//⭐😍mapActions是为了简化方法，分发actions(😍比较喜欢的写法))
   ...mapAction([
     //将 `this.increment()` 映射为 `this.$store.dispatch('increment')`
     "increment",
     "decrement"
   ])   
  }
}
//以下写法同mutations和state相同就省略了
</script>


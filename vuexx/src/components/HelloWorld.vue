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
 export default {
//mapState是为了简化计算属性
//原始写法
   name:"Home",
   computed: {
     count(){
       return this.$store.state.count
     },
     num(){
       return this.$store.state.num
     }
   }
//mapState的第一种写法
  //  computed: {
  //    ...mapState({
  //      count:"count"
  //    })
  // },

//mapState的第二种写法
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
  ,
  methods: {
    increment () {
      this.$store.commit('increment')
    },
    decrement () {
    	this.$store.commit('decrement')
    }
  }
}
</script>
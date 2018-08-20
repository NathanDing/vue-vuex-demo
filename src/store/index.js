// 组装模块并导出 store 的地方
import Vue from 'vue'
import Vuex from 'vuex'
// make sure to call Vue.use(Vuex) if using a module system

Vue.use(Vuex)

const myMutation = {
  increment: state => state.count++,
  changeName: (state, v) => {
    state.name1 = v
  },
  decrement: state => state.count--
}
const store = new Vuex.Store({
  state: {
    count: 10,
    name1: 'vue1',
    name2: 'vue2'
  },
  mutations: myMutation
})
export default store

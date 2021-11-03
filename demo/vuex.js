//https://juejin.cn/post/6928468842377117709

import Vuex from 'vuex';
const stroe = new Vuex.Store({
  state: num,
  getters: {
    getNum: (state) => {
      return state.num;
    },
  },
  mutation: {
    // 操作同步函数，必须用commit提交
    SET_NUM(state, data) {
      state.num = data;
    },
  },
  actions: {
    // 操作异步函数，必须用dispatch提交,
    async SET_NUM_A({commit}, data) {
      return new Promise((res, rej) => {
        setTimeout(() => {
          // 使用commit可以修改state的值
          commit('SET_NUM', data);
          resolve();
        }, 10)
      })
    },
    async SET_NUM_B({dispatch}) {
      await dispatch('SET_NUM_A') // 等待执行完
      // ...
    }
  },
});

export default stroe;

import { mapMutations } from 'vuex';
export default {

  methods: {
    commitState() {
      this.$stroe.commit('SET_NUM', 10);
      this.$store.dispatch('SET_NUM_A').then((res) => {
        // ...
      })
      // 或者
      this.setNum(10);
    },
    ...mapMutations({
      setNum: 'SET_NUM'
    }),
  },
  computed: {
    num() {
      this.$store.getters.getNum;
    }
  }
}

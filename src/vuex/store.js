import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 10,
    },
    getters: { // 定义getters属性
        count: function (state) {
            return state.count += 100; // 每次count的值改变后，都会加100
        }
    },
    mutations: {
        add(state) {
            state.count++;
        },
        reduce(state) {
            state.count--;
        }
    }
})
export default store

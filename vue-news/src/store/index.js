import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations.js';
import actions from './actions.js';

Vue.use(Vuex);

// 상태관리도구
// 상태라는 것은 여러 컴포넌트 간에 공유되는 데이터 속성이다.
export const store = new Vuex.Store({
    state: {
        // news: [],
        // jobs: [],
        // ask: [],
        user: {},
        item: {},
        // 리스트를 불러올 상태
        // 특정 상태를 여러 화면에서 공유할 때 독립적인 상태를 관리하는게 아니므로 문제가 발생할 수 있음
        list: [],
    },
    getters: {
        fetchedAsk(state) {
            return state.ask;
        },
        fetchedItem(state) {
            return state.item;
        }
    },
    mutations,
    // actions의 경우 api를 import했으니 유의
    actions
});
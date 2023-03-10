import {createStore} from "vuex";

export default createStore({
    state() {
        return {
            menuIsVisible: true,
            menuVisibleWidth: 60,
            menuInvisibleWidth: 300,
        }
    },
    getters: {
        getMenuVisible(state) {
            return state.menuIsVisible
        },
        getMenuWidth(state) {
            return state.menuIsVisible ? state.menuVisibleWidth : state.menuInvisibleWidth
        },
    },
    mutations: {
        changeMenuVisible(state) {
            state.menuIsVisible = !state.menuIsVisible
        }
    },
    actions: {
        changeMenuVisible(context) {
            context.commit('changeMenuVisible')
        }
    }

})
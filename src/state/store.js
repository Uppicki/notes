import {createStore} from "vuex";

export default createStore({
    state() {
        return {
            menuIsVisible: false,
            menuVisibleWidth: 300,
            menuInvisibleWidth: 60,

            createIsOpen: true,
        }
    },
    getters: {
        getMenuVisible(state) {
            return state.menuIsVisible
        },
        getMenuWidth(state) {
            return state.menuIsVisible ? state.menuVisibleWidth : state.menuInvisibleWidth
        },
        getCreateIsOpen(state) {
            return state.createIsOpen
        },
    },
    mutations: {
        changeMenuVisible(state) {
            state.menuIsVisible = !state.menuIsVisible
        },
        changeCreateVisible(state) {
            state.createIsOpen = !state.createIsOpen
        }
    },
    actions: {
        changeMenuVisible(context) {
            context.commit('changeMenuVisible')
        },
        changeCreateVisible(context) {
            context.commit('changeCreateVisible')
        }
    }

})
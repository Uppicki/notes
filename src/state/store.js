import {createStore} from "vuex";
import BackService from "@/service/service"

export default createStore({
    state() {
        return {
            username: '',
            notes: [],

            menuIsVisible: false,
            menuVisibleWidth: 300,
            menuInvisibleWidth: 60,

            createIsOpen: false,
        }
    },
    getters: {
        getUsername(state) {
            return state.username
        },
        getNotes(state) {
            return state.notes
        },
        getMenuVisible(state) {
            return state.menuIsVisible
        },
        getMenuWidth(state) {
            return state.menuIsVisible ? state.menuVisibleWidth : state.menuInvisibleWidth
        },
        getCreateIsOpen(state) {
            console.log(state.createIsOpen)
            return state.createIsOpen
        },
    },
    mutations: {
        setUsername(state, payload) {
            state.username = payload
        },
        setNotes(state, payload) {
            state.notes = payload
        },
        changeMenuVisible(state) {
            state.menuIsVisible = !state.menuIsVisible
        },
        changeCreateVisible(state) {
            state.createIsOpen = !state.createIsOpen
        }
    },
    actions: {
        authUser(context, payload) {
            context.commit('setUsername', payload)
            context.commit('setNotes',
                BackService.getUserContext(payload)
            )

        },
        changeMenuVisible(context) {
            context.commit('changeMenuVisible')
        },
        changeCreateVisible(context) {
            context.commit('changeCreateVisible')
        }
    }

})
import {createStore} from "vuex";

export default createStore({
    state() {
        return {
            menuIsVisible: true,
            menuVisibleWidth: 100,
            menuInvisibleWidth: 300,
        }
    }

})
import Vue from 'vue'
import Vuex from 'vuex'
import {Store, ActionContext} from 'vuex'
import routes from '@/router/routes'

Vue.use(Vuex);

export interface State {
    count: number
    fs: object
}

const getters = {
    getSlideMenus() {
        return [...routes]
    }
}

export default new Vuex.Store({
    state: {},
    getters,
    mutations: {},
    actions: {},
});

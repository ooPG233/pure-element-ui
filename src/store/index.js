// import Vue from 'vue'
// import Vuex from 'vuex'
// import { createStore } from 'vuex'
// Vue.use(Vuex)
import { createStore } from 'vuex'
import routes from './modules/routes'
import settings from './modules/settings'
import tabs from './modules/tabs'

const modules={
    routes,
    settings,
    tabs
}


export const store = createStore({
    modules
})
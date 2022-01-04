import {routes} from '@/router'

const state = () => ({
    routes: routes,
    partialRoutes: [],
  })
  const getters = {
    routes: (state) => state.routes,
    partialRoutes: (state) => state.partialRoutes,
  }
  const mutations = {
    
  }
  const actions = {
    
  }
  export default {namespaced: true,state, getters, mutations, actions }
   
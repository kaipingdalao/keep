import Vuex from 'vuex'

export default Vuex.createStore({
    state: {
        routeTitle: 'Home',
    },
    mutations: {
        setRouteTitle(state, title) {
            state.routeTitle = title
        }
    },
    actions: {},
    modules: {},
})

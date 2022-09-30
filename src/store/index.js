import { createStore } from 'vuex'
import actions from './actions.js'
import mutations from './mutations.js'


// Create a new store instance.
export default createStore({
    state: {
        topStories: [],
        newStories: []
    },
    mutations,
    actions
})


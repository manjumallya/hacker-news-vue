import { createWebHistory, createRouter } from "vue-router";
import StoryList from './views/StoryList.vue'
import StoryDetails from './views/StoryDetails.vue'
import NewStories from './views/NewStories.vue'
import NotFound from './views/NotFound.vue'

const routes = [
    {
        path: '/',
        name: 'StoryList',
        component: StoryList
    },
    {
        path: '/story/:id',
        name: 'StoryItem',
        component: StoryDetails,
    },
    {
        path: '/new',
        name: 'NewStories',
        component: NewStories,
    },
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: NotFound,
    }
]

export default createRouter({
    history: createWebHistory(),
    routes, // short for `routes: routes`
})
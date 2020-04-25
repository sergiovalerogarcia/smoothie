import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../components/Index.vue'
import AddSmoothie from '../components/AddSmoothie.vue'
import EditSmoothie from '../components/EditSmoothie.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Index',
        component: Index
    },
    {
        path: '/add-smoothie',
        name: 'AddSmoothie',
        component: AddSmoothie
    },
    {
        path: '/edit-smoothie/:smoothie_slug',
        name: 'EditSmoothie',
        component: EditSmoothie
    },
    {
        path: "*",
        name: 'Index',
        component: Index
    }
]

const router = new VueRouter({
    routes
})

export default router
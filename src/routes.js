import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from './views/Home'
import About from './views/About'
import Projects from './views/Projects'
import Courses from './views/Courses'
import Calendar from './views/Calendar'
import Presentations from './views/Presentations'
import Team from './views/Team'

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About},
    { path: '/calendar', component: Calendar},
    { path: '/projects', component: Projects },
    { path: '/courses', component: Courses },
    { path: '/presentations', component: Presentations },
    { path: '/team', component: Team },
]

const router = new VueRouter({
    routes
})

export default router;
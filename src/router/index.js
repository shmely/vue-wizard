import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Form101 from '../views/Form101.vue';
import Stage1 from '../views/Stage1.vue';
import Stage2 from '../views/Stage2.vue';
import Stage3 from '../views/Stage3.vue';
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/form101',
    name: 'form101',
    component: Form101,
    children: [
      {
        path: 'stage1',
        name: 'stage1',
        component: Stage1
      },
      {
        path: 'stage2',
        name: 'stage2',
        component: Stage2
      },
      {
        path: 'stage3',
        name: 'stage3',
        component: Stage3
      },

    ]
  }
]

const router = new VueRouter({
  routes
})



export default router

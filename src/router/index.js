import Vue from 'vue'
import VueRouter from 'vue-router'
import HomepageView from '../views/HomepageView.vue'
import SelectedItemsView from '../views/SelectedItemsView.vue'
import SelectItemsView from '../views/SelectItemsView.vue'
import CombinationView from '../views/CombinationView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/homepage',
    name: 'homepageView',
    component: HomepageView,
    meta:{
      title: 'Главная',
    },
    
  },
  {
    path: '/selected-items',
    name: 'selectedItemsView',
    component: SelectedItemsView,
    meta:{
      title: 'Компонент отображения выбранных элементов',
    },
  },
  {
    path: '/select-items',
    name: 'selectItemsView',
    component: SelectItemsView,
    meta:{
      title: 'Компонент выбора элементов',
    },
  },
  {
    path: '/combination',
    name: 'combinationView',
    component: CombinationView,
    meta:{
      title: 'Объединение компонентов SelectItems и SelectedItems',
    },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue'
import Router from 'vue-router'


const Home = () => import ('../views/home/Home.vue')
const Category = () => import ('../views/category/Category.vue')
const ShopCart = () => import ('../views/shopCart/ShopCart.vue')
const Profile = () => import ('../views/profile/Profile.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/category',
      component: Category
    },
    {
      path: '/shopCart',
      component: ShopCart
    },
    {
      path: '/profile',
      component: Profile
    }
  ],
  mode: 'history'
  
})

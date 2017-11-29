import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Callback from '@/components/Callback'
import RecipesView from '@/components/RecipesView'
import RecipeView from '@/components/RecipeView'
import AccountOptions from '@/components/AccountOptions'
import AddRecipe from '@/components/AccountOptions/AddRecipe'
import ManageRecipes from '@/components/AccountOptions/ManageRecipes'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/callback',
      name: 'Callback',
      component: Callback
    },
    {
      path: '*',
      redirect: '/home'
    },
    {
      path: '/RecipesView',
      name: 'RecipesView',
      component: RecipesView
    },
    {
      path: '/RecipeView',
      name: 'RecipeView',
      component: RecipeView
    },
    {
      path: '/AccountOptions',
      name: 'AccountOptions',
      component: AccountOptions,
      children: [
        {
          path: '/AccountOptions/AddRecipe',
          name: 'AddRecipe',
          component: AddRecipe
        },
        {
          path: '/AccountOptions/ManageRecipes',
          name: 'ManageRecipes',
          component: ManageRecipes
        }
      ]
    }
  ]
})

export default router

import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Callback from '@/components/Callback'
import RecipesView from '@/components/RecipesView'
import RecipeView from '@/components/RecipeView'
import AccountOptions from '@/components/AccountOptions'
import AddRecipe from '@/components/AccountOptions/AddRecipe'
import ManageRecipes from '@/components/AccountOptions/ManageRecipes'
import Admin from '@/components/Admin'
import AdminManageRecipes from '@/components/Admin/AdminManageRecipes'
import AdminManageCategories from '@/components/Admin/AdminManageCategories'
import EditRecipe from '@/components/AccountOptions/EditRecipe'

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
      path: '/RecipesView/:id',
      name: 'RecipesView',
      component: RecipesView
    },
    {
      path: '/RecipeView',
      name: 'RecipeView',
      component: RecipeView
    },
    {
      path: '/Admin',
      name: 'Admin',
      component: Admin,
      children: [
        {
          path: '/Admin/AdminManageCategories',
          name: 'AdminManageCategories',
          component: AdminManageCategories
        },
        {
          path: '/Admin/AdminManageRecipes',
          name: 'AdminManageRecipes',
          component: AdminManageRecipes
        }
      ]
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
        },
        {
          path: '/AccountOptions/EditRecipe',
          name: 'EditRecipe',
          component: EditRecipe
        }
      ]
    }
  ]
})

export default router

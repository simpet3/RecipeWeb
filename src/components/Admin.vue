<template>
  <div>
       <div class="container">
        <div class="row">
            <div spellcheck="false" class="text headline" data-font="Bootstrap Alternate Pro" style="font-family: &quot;Bootstrap Alternate Pro&quot;; font-size: 25px;">
                Admin Panel
              </div>
            <div class="col-md-12">
              <b-nav tabs>
                <b-nav-item :to="'/Admin/AdminManageCategories'">Manage categories</b-nav-item>
                <b-nav-item :to="'/Admin/AdminManageRecipes'">Manage recipes</b-nav-item>
              </b-nav>
            </div>
        </div>
        <div class="row">

            <div class="col-md-12">

                <div>
                  <router-view></router-view>
                </div>

            </div>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'AdminLayout'

  }
</script>

<style>

</style>


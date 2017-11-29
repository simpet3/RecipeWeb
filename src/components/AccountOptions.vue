<<template>
  <div>
      <div class="container">
        <div class="row">
            <div class="col-md-12">
              <ul class="nav nav-tabs">
                <li class="nav-item">
                  <router-link :to="'/AccountOptions/ManageRecipes'"
                    class="btn btn-primary btn-margin">
                      Manage Recipes
                  </router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="'/AccountOptions/AddRecipe'"
                    class="btn btn-primary btn-margin">
                     Add Recipe
                  </router-link>
                </li>
              </ul>
            </div>           
        </div>
        <div class="row">
            <div class="col-md-12">
              cia yra account options pradzia
                <router-view></router-view>
            </div>           
        </div>
      </div>
  </div>
</template>

<<script>
export default {
  name: 'AccountOptions'
}
</script>
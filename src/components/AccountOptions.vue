<<template>
  <div>
      <div class="container">
        <div class="row">
            <div spellcheck="false" class="text headline" data-font="Bootstrap Alternate Pro" style="font-family: &quot;Bootstrap Alternate Pro&quot;; font-size: 25px;">
                Account options
              </div>
            <div class="col-md-12">
              <b-nav tabs>
                <b-nav-item :to="'/AccountOptions/ManageRecipes'">Manage Recipes</b-nav-item>
                <b-nav-item :to="'/AccountOptions/AddRecipe'">Add Recipe</b-nav-item>
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

<<script>

export default {
  name: 'AccountOptions',
  mounted () {
    console.log('mounted AccountOptions')
  },
  updated () {
    console.log('updated')
  }
}
</script>

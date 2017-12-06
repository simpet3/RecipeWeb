<<template>
  <div>
    <div slot name="recipeView">

<img src="https://lorempixel.com/600/300/food/5/" class="img-thumbnail" alt="Cinque Terre" width="304" height="236">
          <hr/>
          <span ng-style="fontRender.style" style="font-family: &quot;Open Sans script=all rev=1&quot;; font-weight: 400; font-style: normal;"> {{recipe.components}}</span>
          <hr/>
<span ng-style="fontRender.style" style="font-family: &quot;Open Sans script=all rev=1&quot;; font-weight: 400; font-style: normal;">{{recipe.description}}</span>

<hr/>
          <button v-on:click="addLikeToRecipe(recipe)" type="button" class="btn btn-primary btn-sm">
           Like me! <span class="badge badge-light">{{recipe.likes}}</span>
          <span class="sr-only">Likes</span>
          </button>

        </div>

  </div>
</template>

<<script>
import axios from 'axios'

export default {
  name: 'RecipeView',
  props: ['recipe'],
  methods: {
    updateRecipe: function (recipe) {
      axios.put(`http://localhost:24452/api/category/1/recipes/Recipe/${recipe.id}`, recipe, {
        'Authorization': 'Basic Y2xpZW50OnNlY3JldA==',
        'Content-Type': 'application/x-www-form-urlencoded'
      })
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    addLikeToRecipe: function (recipe) {
      recipe.likes = recipe.likes + 1
      this.updateRecipe(recipe)
    }
  }
}
</script>

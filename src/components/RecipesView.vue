<<template>
  <div class="row">

<div class="col-md-5" v-for="recipe1 in recipes">
  <b-card v-bind:title="recipe1.title"
          img-src="https://lorempixel.com/600/300/food/5/"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2">
    <p class="card-text">
      {{recipe1.shortDescription}}
    </p>
      <b-btn v-b-modal="String(recipe1.id)" variant="primary">Open Recipe</b-btn>
    <div>
      <b-modal v-bind:id="String(recipe1.id)" size="lg" v-bind:title="recipe1.title" hide-footer >
        <Recipe-View :recipe="recipe1">
        <div slot="recipeView">
        </div>
          </Recipe-View>
      </b-modal>
    </div>
      <div slot="footer">
      <small class="text-muted">Likes: {{recipe1.likes}}</small>
  </div>
  </b-card>
</div>

  </div>
</template>

<<script>

import axios from 'axios'
import RecipeView from './RecipeView'
export default {
  name: 'RecipesView',
  components: {
    'Recipe-View': RecipeView
  },
  data () {
    return {
      id: this.$route.params.id,
      recipes: []
    }
  },
  methods: {
    tString: function (num) {
      return 'a'
    },
    loadRecipes () {
      this.recipes = this.getRecipesByCategoryId(Number(this.id))
    },
    setcurrentCategory: function (category) {
      this.currentCategory = category
    },
    getRecipesByCategoryId: function (categoryId) {
      axios.get(`http://localhost:24452/api/category/${categoryId}/recipes/Recipe`)
        .then(response => {
        // JSON responses are automatically parsed.
          this.recipes = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  },
  mounted () {
    this.getRecipesByCategoryId(this.id)
    this.setcurrentCategory({
      typeName: 'pirmas',
      id: 1
    })
    console.log('RecipeView parsiunte receptus vienets ')
  },
  watch: {
    '$route' (to, from) {
      console.log('vykdo watch 111 ')
      this.id = to.params.id
      this.loadRecipes()
      console.log('vykdo watch 222')
    },
    'currentCategory': function () {
      console.log(' recipe view watch suveike ant kategorijos')
    }
  }
}
</script>
<<style>
@import '../../node_modules/bootstrap/dist/css/bootstrap.css';
</style>



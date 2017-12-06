<<template>
    <div><!-- Button trigger modal -->
      <div class="container">
        <!--b img src="http://www.shroyco.com/sites/default/files/coming-soon_3.jpg" fluid alt="Responsive image" /-->
          <div>
            <div>
              Category:
            </div>
        <select data-live-search="true" v-model="CategoryId" class="selectpicker"  >
          <option v-bind:data-tokens="category.typeName" v-for="category in categories" v-bind:value="Number(category.id)">{{category.typeName}}</option>
        </select>
      </div>
      <hr/>
    <b-card-group deck class="mb-3" v-for="recipe1 in recipes">

<span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
        <b-card   text-variant="dark" v-bind:title="String(recipe1.title)" >
          <p class="card-text">
            {{recipe1.shortDescription}}
          </p>
          <div >
            <b-btn class="btn btn-outline-success btn-sm" type="button" v-b-modal="String(recipe1.id)" >Edit</b-btn>




            <button v-on:click="deleteRecipe(recipe1.id)" type="button" class="btn btn-outline-danger btn-sm">Delete</button>
              <b-modal v-bind:id="String(recipe1.id)" size="lg" v-bind:title="recipe1.title" hide-footer >
                <Edit-View :recipe="recipe1">
                <div slot="editRecipe">
                </div>
                  </Edit-View>
              </b-modal>

          </div>
        </b-card>
    </b-card-group>

      </div>
    </div>
</template>

<<script>
import axios from 'axios'
import EditRecipe from './EditRecipe'

export default {
  name: 'ManageRecipe',
  components: {
    'Edit-View': EditRecipe
  },
  data () {
    return {
      recipes: [],
      categories: [],
      CategoryId: 0
    }
  },
  methods: {
    deleteRecipe: function (recipeId) {
      console.log('deleteRecipe : ' + recipeId)
      axios.delete(`http://localhost:24452/api/category/1/recipes/Recipe/${recipeId}`)
        .then(response => {
        // JSON responses are automatically parsed.
          this.getCategoriesFromApi()
        })
        .catch(e => {
          this.errors.push(e)
        })
      console.log('deleteRecipe : pabaiga')
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
    },
    getCategoriesFromApi: function () {
      axios.get(`http://localhost:24452/api/Category`)
        .then(response => {
        // JSON responses are automatically parsed.
          this.categories = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  },
  created () {
    this.getCategoriesFromApi()
  },
  watch: {
    'CategoryId': function () {
      console.log(' category id watch veikia')
      this.getRecipesByCategoryId(this.CategoryId)
    },
    'categories': function () {
      this.getRecipesByCategoryId(this.CategoryId)
    },
    'recipes': function () {
      this.getRecipesByCategoryId(this.CategoryId)
    },
    deep: true
  }
}
</script>
<<style>
</style>


<<template>
  <div>
     <div slot name="editRecipe">
    <b-form>
    <form class="container" style="background-color:white">

      <div class="form-group">
        <label class="col-form-label" for="formGroupExampleInput">Title of recipe:</label>
        <input v-model="Recipe.title" type="text" class="form-control" id="formGroupExampleInput" placeholder="Title of recipe...">
      </div>

      <div  class="form-group">
        <label for="exampleFormControlFile1">Choose photo file...</label>
        <input type="file" class="form-control-file" id="exampleFormControlFile1">
      </div>

      <div clas="form-group">
        <label class="col-form-label" for="formGroupExampleInput">Recipe type</label>
        <div>
        <select data-live-search="true" v-model="recipe.type.id" class="selectpicker"  >
          <option v-bind:data-tokens="category.typeName" v-for="category in categories" v-bind:value="Number(category.id)">{{category.typeName}}</option>
        </select>
      </div>
      </div>


        <div class="form-group">
          <label for="exampleFormControlTextarea1">Ingredients</label>
          <textarea v-model="Recipe.components" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>

        <div class="form-group">
          <label for="exampleFormControlTextarea1">Short description</label>
          <textarea v-model="Recipe.shortDescription" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>

      <div class="form-group">
        <label for="exampleFormControlTextarea1">Description</label>
        <textarea v-model="Recipe.description" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <div>
        <button
          class="btn btn-primary btn-margin"
          v-if="Recipe.description && Recipe.components && Recipe.shortDescription && Recipe.title && Recipe.type.id >0"
          @click.prevent="updateRecipe(Recipe)">
            Update Recipe
        </button>
      </div>
    </form>
    </b-form>
  </div>
  </div>
</template>

<<script>
import axios from 'axios'

export default {
  name: 'EditRecipe',
  props: ['recipe'],
  data () {
    return {
      categories: [],
      Recipe: {
        likes: 0,
        title: '',
        description: '',
        shortDescription: '',
        type: {
          typeName: '',
          id: 0
        },
        components: '',
        id: 0
      }
    }
  },
  methods: {
    getCategoriesFromApi: function () {
      axios.get(`http://localhost:24452/api/Category`)
        .then(response => {
        // JSON responses are automatically parsed.
          this.categories = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    },

    cleanForm () {
      this.Recipe = {
        title: '',
        description: '',
        type: {
          typeName: '',
          id: 0
        },
        components: '',
        id: 0
      }
    },
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
    }
  },
  created () {
    this.getCategoriesFromApi()
  },
  mounted () {
    this.Recipe = this.recipe
  }

}
</script>


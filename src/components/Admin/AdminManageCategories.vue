<template>
  <div>
    <hr/>

      <div>
        <select data-live-search="true" v-model="Recipe.type.id" class="selectpicker"  >
          <option v-bind:data-tokens="category.typeName" v-for="category in categories" v-bind:value="Number(category.id)">{{category.typeName}}</option>
        </select>
      </div>

        <label class="col-form-label" for="formGroupExampleInput">Recipe type</label>
        <div>
        <select data-live-search="true" v-model="Recipe.type.id" class="selectpicker"  >
          <option v-bind:data-tokens="category.typeName" v-for="category in categories" v-bind:value="Number(category.id)">{{category.typeName}}</option>
        </select>
      </div>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AdminManageCategories',
  data () {
    return {
      categories: []
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
    }
  }
}
</script>

<style>

</style>


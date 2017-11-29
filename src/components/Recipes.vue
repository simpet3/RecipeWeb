<template>
  <div class="col-sm-6 col-sm-offset-3">
    <h1>Recipes</h1>
    <div >
      <h2><blockquote>change1 {{change1}}</blockquote></h2>  
      <h2><blockquote>change2 {{change2}}</blockquote></h2>    
       <h2>title {{title}}</h2>
       <h2>description {{description}}</h2>
       
        <button class="btn btn-primary" @click="getRecipe()">getRecipe</button> 
      <h2>recipeComponents {{recipeComponents}}</h2>
      <h1>Error : {{error}}</h1>
       <h2>end</h2>
       <div>
     </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {

  data() {
    return {
        error: 'none',
        change1:'false',
        change2:'false',
        title: '1',
         recipeComponents: '2',
     description:'3'
     
    }
  },

 methods: {
      getRecipe: function(){
          console.log('tekstas mano tekstas');
            
          axios.get('http://localhost:24452/api/category/1/recipes/Recipe/2').then(response=>{
          this.change1='true';
          this.title= response.data.title;
           this.change2 = 'true';
       /* this.description= response.data.description;      
      // this.recipeComponents= response.data.component; 
      */
      }).catch(e=>{
              this.error =e;
          })
         
      },

      addRecipeToList: function(recipe) {
        this.title= recipe.title;
        this.description= recipe.description;
         this.recipeComponents= recipe.component;        
    }

  }
}
</script>
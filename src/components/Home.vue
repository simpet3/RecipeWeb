<template>
  <div class="col-sm-6 col-sm-offset-3">
    <H1>home layer {{quote}}</H1>
    <button class="btn btn-primary" @click="change()">getRecipe</button> 

  </div>
</template>

<script>

export default {

  data() {
    return {
      quote: ' citata'
    }
  },

methods:{
  change:function(){
    this.quote = this.quote +'citata pakeista';
  }
}
/*
    <h1>Get a Free Chuck Norris Quote!</h1>
    <button class="btn btn-primary" v-on:click="getQuote()">Get a Quote</button>
    <div class="quote-area" v-if="quote">
      <h2><blockquote>{{ quote }}</blockquote></h2>      
    </div>
*/

 /* methods: {
    getQuote() {
      this.$http
        .get('http://localhost:3001/api/random-quote', (data) => {
          this.quote = data;
        })
        .error((err) => console.log(err))
    }
  }*/

}
</script>
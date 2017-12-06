<template>
<div>
    <div>
      <div id="Allbody" class="container" >
        <div class="row">
          <div class="container">
         <b-navbar toggleable="md" type="dark" variant="success" fixed="top"  >

            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

            <b-navbar-brand href="#">RecipesBucket</b-navbar-brand>

            <b-collapse is-nav id="nav_collapse">

              <b-navbar-nav>
                <b-nav-item href="#">Link</b-nav-item>
                <b-nav-item href="#" disabled>Disabled</b-nav-item>
              </b-navbar-nav>

              <!-- Right aligned nav items -->
              <b-navbar-nav class="ml-auto">

                <b-nav-form>
                  <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
                  <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                </b-nav-form>


                <b-nav-item-dropdown right>
                  <!-- Using button-content slot -->
                  <template slot="button-content">
                    <em>User</em>
                  </template>
                  <b-dropdown-item :to="'/AccountOptions'" v-if="authenticated">
                      Account options
                  </b-dropdown-item>
                  <b-dropdown-item v-if="authenticated"
                    @click="logout()" href="#">Logout</b-dropdown-item>
                  <b-dropdown-item v-if="!authenticated"
                    @click="login()" href="#">
                    Log In
                  </b-dropdown-item>

                </b-nav-item-dropdown>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
          </div>
        </div>
        <div class="row">
          <div class = "col-md-12">
             <div class = "col-md-12">
          </div>
          </div>
        </div>


      </div>
    </div>
    <div >
      <div class="container" >
        <div class="row">
          <div class="col-md-2" color="red" style="max-Width:500px"  >

            <div class="affix">
              <b-button-group vertical >
                <div v-for="category in this.categories">
                  <div class="container">
                    <b-button :to="'/Recipesview/' + category.id" >{{ category.typeName }}</b-button>
                  </div>
                </div>
              </b-button-group>
            </div>

          </div>
          <div class="col-md-8" >

            <div class="container">
              <div>
              <router-view
                :auth="auth"
                :authenticated="authenticated">
              </router-view>
              </div>
            </div>
          </div>
          <div class="col-md-2" id="rightColumn" > </div>
        </div>
      </div>
    </div>
    <div>
<footer class="footer" fixed="bottom">
      <div class="container">
        <span class="text-muted">
                <div class="container">
                <hr>
                <div class="row-fluid">
                  <div class="span12">
                    <div class="span8">
                      <a href="#">Terms of Service</a>
                      <a href="#">Privacy</a>
                      <a href="#">Security</a>
                    </div>
                    <div class="span4">
                      <p class="muted pull-right">© 2013 Company Name. All rights reserved</p>
                    </div>
                  </div>
                </div>
              </div>
        </span>
      </div>
    </footer>

      <footer class="footer" >
        <div class="row">
          <div class="navbar-text" >
            <div class="column">
              <div class="container">

              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>
<script>
import AuthService from './auth/AuthService'
import axios from 'axios'

const auth = new AuthService()

const { login, logout, authenticated, authNotifier } = auth

export default {
  name: 'app',
  data () {
    authNotifier.on('authChange', authState => {
      this.authenticated = authState.authenticated
    })
    return {
      auth,
      authenticated,
      categories: [],
      currentCategory: {typeName: '', Id: 0}
    }
  },
  methods: {
    login,
    logout,
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
  mounted () {
    console.log('logas veikia')
  },
  created () {
    this.getCategoriesFromApi()
    console.log(' app. created veikia ')
  }
}
</script>

<style>
@import '../node_modules/bootstrap/dist/css/bootstrap.css';

.btn-margin {
  margin-top: 7px
}

#Allbody {
  padding-top: 58px;
}

/*
body {
   background-image: url("http://deskbg.com/s3/wpp/11/11693/one-big-star-desktop-background.jpg");
   background-color: #cccccc;
   	min-width: 100%;
	height: auto;
  width: auto;
	max-height: 300px;
	overflow-y: hidden;
} */


.container {
  height: 100%;
  width: 100%;

  /* overflow: auto; */
}

/* Custom page CSS
-------------------------------------------------- */
/* Not required for template or sticky footer method. */




</style>

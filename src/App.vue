<template>
<div>
    <div>
      <div class="container" style="background-color:green">
        <div class="row">
          <div class = "col-md-12">
            <nav class="navbar navbar-default">
              <div class="container-fluid">
                <div class="navbar-header">
                  <a class="navbar-brand" href="#">Auth0 - Vue</a>
                  <router-link :to="'/'"
                    class="btn btn-primary btn-margin">
                      Home
                  </router-link>
                  <button
                    class="btn btn-primary btn-margin"
                    v-if="!authenticated"
                    @click="login()">
                      Log In
                  </button>
                  <router-link :to="'/AccountOptions'"
                    class="btn btn-primary btn-margin">
                      Account Settings
                  </router-link>

                  <button
                    class="btn btn-primary btn-margin"
                    v-if="authenticated"
                    @click="logout()">
                      Log Out
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div class="row">
          <div class = "col-md-12">
            <nav class="navbar navbar-light bg-light">
              <form class="form-inline">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
            </nav>
          </div>
        </div>


      </div>
    </div>
    <div >
      <div class="container">
        <div class="row">
          <div class="col-md-2" color="red" style="background-color:red"> 
            <div class="list-group md-2">
              <a href="#" class="list-group-item list-group-item-action active">
                Cras justo odio
              </a>
              <a href="#" class="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
              <a href="#" class="list-group-item list-group-item-action">Morbi leo risus</a>
              <a href="#" class="list-group-item list-group-item-action">Porta ac consectetur ac</a>
              <a href="#" class="list-group-item list-group-item-action disabled">Vestibulum at eros</a>
            </div>  
          </div>
          <div class="col-md-8" > antras kolumn
            <div class="container">
              <router-view 
                :auth="auth" 
                :authenticated="authenticated">
              </router-view>
            </div>
          </div>
          <div class="col-md-2" style="background-color:red"> trecias kolumn</div>
        </div>
      </div>
    </div>
    <div>
      <div class="container">
        <div class="row">
          <div class="col-md-12"style="background-color:yellow"> paskutinis kolumn</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import AuthService from './auth/AuthService'

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
      authenticated
    }
  },
  methods: {
    login,
    logout
  }
}
</script>

<style>
@import '../node_modules/bootstrap/dist/css/bootstrap.css';

.btn-margin {
  margin-top: 7px
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
</style>

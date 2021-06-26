<template>
  <div id="app">

    <nav class="navbar navbar-expand-lg navbar-light bg-light" style="position: sticky">

      <div class="container">

        <router-link to="/" class="navbar-brand">LOGO</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#toggledmenu" aria-controls="toggledmenu" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="toggledmenu">

          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link  to="/reviews" class="nav-link" >Reviews</router-link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" id="places-dropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Places
              </a>
              <ul class="dropdown-menu" aria-labelledby="places-dropdown">
                <li><router-link to="/restaurants" class="dropdown-item" >Restaurants</router-link></li>
                <li><router-link to="/hotels" class="dropdown-item" >Hotels</router-link></li>
              </ul>
            </li>
          </ul>

          <div class="d-flex navbar-nav">

            <div class="nav-item dropdown me-2">
<!--              guest-->
              <router-link to="/login" v-if="!isLoggedIn" class="btn btn-outline-dark login">Login</router-link>
<!--              logged in-->
              <a v-if="isLoggedIn" class="nav-link btn dropdown" id="profile-dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                <img class="profile-image" src=" https://via.placeholder.com/30" alt="">
              </a>
              <ul class="dropdown-menu" aria-labelledby="profile-dropdown">
                <li><router-link to="/profile" class="dropdown-item" >Profile</router-link></li>
                <li><router-link to="/reviewed" class="dropdown-item" >Reviewed</router-link></li>
                <li><router-link to="/settings" class="dropdown-item" >Settings</router-link></li>
                <li><router-link to="/login" class="dropdown-item" @click.prevent="logout()">Logout</router-link></li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </nav>

    <div class="container">
      <router-view/>
    </div>

  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      user: {},
      loggedIn: false

    }
  },
  methods:{

    logout(){
      this.$store.dispatch('logout');
    }

  },
  computed:{

    isLoggedIn(){
      return this.$store.state.auth.user;
    }


  },
  components: {



  },
  created() {
    this.$store.dispatch('getHotels')
    this.$store.dispatch('getRestaurants')
    this.$store.dispatch('getMostLikedHotels')
    this.$store.dispatch('getMostLikedRestaurants')
    this.$store.dispatch('getDiscoverPlaces')
    // this.$store.dispatch('getLastReviews')
  },

  mounted() {



  },

  watch:{
    '$route' : {
      // eslint-disable-next-line no-unused-vars
      handler : (to) => {
        document.title = to.meta.title || 'PopTrip'
      },
      immediate: true
    }


  }
}
</script>

<style>
*{
  font-family: Roboto,sans-serif;
}
.navbar{
  box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;
  margin-bottom: 2.8rem;
  top: 0;
  z-index: 9999;
}
.profile-image{
  width: 30px;
  max-width: 30px;
}

</style>

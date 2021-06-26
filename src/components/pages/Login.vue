
<script>
export default {
  name: "Login",
  data(){

    return{
      user:{},
      loading:false,
      message:""
    }
  },
  computed:{
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  created() {
    if (this.loggedIn) {
      this.$router.push('/profile');
    }
  },
  methods:{
    handleLogin() {
      this.loading = true;
      if (this.user.username && this.user.password) {
          this.$store.dispatch('login', this.user).then(
              () => {
                this.$router.push('/me');
              },
              error => {
                this.loading = false;
                this.message =
                    (error.response && error.response.data && error.response.data.message) ||
                    error.message ||
                    error.toString();
              }
          );
        }

    },
    handleRegister(){

    }
  }
}
</script>
<template>
  <div class="row d-flex justify-content-center">


    
    <div  class="col-md-5">

      <div class="register-form">
        <h4>Register Here</h4>
        <hr>
        <form name="form" @submit.prevent="handleRegister">
          <div class="form-group my-3">
            <label for="register-username">Username</label>
            <input id="register-username" class="form-control" type="text" name="register-username"/>
          </div>
          <div class="form-group my-3">
            <label for="register-email">Email</label>
            <input id="register-email" class="form-control" type="text" name="register-email">
          </div>
          <div class="form-group my-3">
            <label for="register-password">Password</label>
            <input id="register-password" class="form-control" type="password" name="register-password"/>
          </div>
          <div class="form-group my-3">
            <label for="register-password-again">Confirm Password</label>
            <input id="register-password-again" class="form-control" type="password" name="register-password-again"/>
          </div>
          <input type="submit" class="btn btn-dark mt-2" value="Register"/>
        </form>

      </div>

    </div>

    <div class="col-md-5">

      <div class="login-form">
        <h4>Login</h4>
        <hr>
        <form name="form" @submit.prevent="handleLogin">
            <div class="form-group my-3">
              <label for="username">Username</label>
              <input v-model="user.username" id="username" class="form-control" type="text" name="username"/>

            </div>
          <div class="form-group my-3">
            <label for="password">Password</label>
            <input v-model="user.password" id="password" class="form-control" type="password" name="password"/>

          </div>
          <div class="form-group">
            <button class="btn btn-dark btn-block" :disabled="loading">
              <span v-show="loading" class="spinner-border spinner-border-sm"></span>
              <span>Login</span>
            </button>
          </div>
          <div class="form-group">
            <div v-if="message" class="alert alert-danger" role="alert">{{message}}</div>
          </div>
        </form>

      </div>

    </div>
    


  </div>
</template>

<style scoped>
.login-form{
  padding: 30px;

}
.register-form{
  background: rgba(192,192,192,0.3);
  padding: 30px;

}
</style>
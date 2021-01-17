<template>
  <div class="app-login">
      <Logo />
    <form @submit.prevent="userLogin">
      <div>
        <label>Email</label>
        <input type="text" v-model="login.email" />
      </div>
      <div>
        <label>Password</label>
        <input type="text" v-model="login.password" />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  middleware: 'guest',
  name: "login",
  data() {
    return {
      login: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async userLogin() {
      try {
        await this.$auth
            .loginWith("local", {
              data: this.login,
            })
            .then((response) => {
              console.log(response);
              this.$router.push({ path: '/home' })
            })
            .catch((error) => {
              console.log(error);
            });
      } catch (e) {console.log('error -> ', e)}
    },
  },
}
</script>

<style scoped>

.app-login{
  padding: 20px;
  background-color: #eff1ee;
  max-width: 450px;
  margin: 20% auto 0;
  border-radius: 6px;
  text-align: center;
}

.app-login div{
  padding: 10px;
}

.app-login input{
  height: 30px;
}

.app-login button{
  font-size: 20px;
  padding: 6px;
}

form{
  padding-top: 15px;
}

</style>
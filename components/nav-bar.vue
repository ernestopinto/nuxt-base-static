<template>
  <div class="nav-bar-app">
    <div v-if="this.$auth.loggedIn">
      <button v-on:click="logOut">Logout</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-bar",
  methods: {
    async logOut() {
      await this.$auth.logout();
    },
  },
};
</script>

<style scoped>

.nav-bar-app{
  position: absolute;
  top: 30px;
  left: 47%;
}

button{
  font-size: 20px;
}

</style>

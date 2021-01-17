<template>
  <div class="container">
    <div class="nav-bar-app">
      <nav-bar />
    </div>
    <div>
      <Logo />
      <h1 class="title">Nuxt-base-static</h1>
      <span style="font-size: 20px; padding: 6px" class="title"
        >(simple demo base-comfiguration)</span
      >
      <span style="font-size: 20px" class="title"
        >Provided by Ernesto M. Pinto visit:
        <a href="http://omecanismo.com">http://omecanismo.com</a> &
        <a href="https://arcadeluz.net">https://arcadeluz.net</a></span
      >
      <div class="links">
        <NuxtLink v-if="!this.$auth.loggedIn" to="/login"> <span>Login</span> </NuxtLink>
        <NuxtLink v-if="this.$auth.loggedIn" to="/home"> <span>Home</span>  </NuxtLink>
      </div>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentations
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import VueRx from "vue-rx";

Vue.use(VueRx);

export default {
  auth: false,
  name: "index",
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.links span{
  font-size: 40px;
  font-weight: bolder;
}

.links a{

  text-decoration: none;
}

</style>

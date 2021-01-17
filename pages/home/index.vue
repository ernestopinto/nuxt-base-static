<template>
  <div>
    <nav-bar/>
    <div id="dash">
      <span>Dashboard</span>
      <hr>
      <div class="links">
        <NuxtLink v-if="this.$auth.loggedIn" to="/"> <span>Landing</span>  </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "index"
}
</script>

<style scoped>

#dash{
  padding-top: 30px;
  padding-left: 30px;
  padding-right: 30px;
}

#dash span{
  font-size: 30px;
  font-weight: bolder;
  padding-top: 20px;
}

</style>
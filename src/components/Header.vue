<template>
  <header>
    <div class="nav-bar">
      <router-link v-scroll-to="'#'" to>
        Top
      </router-link>
      <router-link v-scroll-to="'#Profile'" to>
        Profile
      </router-link>
      <router-link v-scroll-to="'#Works'" to>
        Works
      </router-link>
      <router-link v-scroll-to="'#PR'" to>
        PR
      </router-link>
      <router-link v-scroll-to="'#Contact'" to>
        Contact
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
header{
  height: 10vh;
  width: 100%;
}

.nav-bar{
  display: flex;
  justify-content: space-between;
}
</style>

<template>
  <header>
    <div class="nav-bar">
      <a href="#" class="nav-link">
        Top
      </a>
      <a href="#profile" class="nav-link">
        Profile
      </a>
      <a href="#works" class="nav-link">
        Works
      </a>
      <a href="#pr" class="nav-link">
        PR
      </a>
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
  height: 7vh;
  width: 100%;
}

.nav-bar{
  display: flex;
  justify-content: space-around;
}

.nav-link{
  font-size: 30px;
  text-decoration: none;
  color: black;
}


</style>

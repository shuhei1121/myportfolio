<template>
  <footer>
    <a href="https://github.com/shuhei1121"><i class="fab fa-github fa-3x"></i></a>
    <a href="https://twitter.com/ss_pro_op"><i class="fab fa-twitter fa-3x"></i></a>
    <p class="email">suzkey1121@gmail.com</p>
    <p>&copy; 2021 shuhei suzuki</p>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
footer{
  margin-top: 100px;
  background-color: lightblue;
  font-family: Arial, Helvetica, sans-serif;
}

i{
  size: 3x;
  margin-top: 5px;
  margin-left: 20px;
  color: white;
}

.email{
padding: 15px;
border-bottom: 1px solid white;
font-size: 20px;
}

p{
  padding: 20px;
}
</style>
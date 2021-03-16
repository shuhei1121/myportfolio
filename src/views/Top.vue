<template>
  <div class="top">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Top',
  data () {
    return {
      msg: "Welcome to Shuhei Suzuki's Portfolio Site!!"
    }
  }
}
</script>


<style scoped>
.top{
  height: 93vh;
  background: #c2e59c; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #c2e59c, #64b3f4); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #c2e59c, #64b3f4); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

h1{
  font-weight: normal;
  color: white;
  border-bottom: 2px solid white;
  padding-top: 40vh;
  margin-top: 0;
}
</style>

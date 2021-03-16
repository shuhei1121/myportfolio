<template>
  <main>
    <Header id="header"/>
    <Top id="top"/>
    <Profile id="profile"/>
    <Works id="works"/>
    <PR id="pr"/>
    <Footer/>
  </main>
</template>

<script>
import Header from '@/components/Header.vue'
import Top from '@/views/Top.vue'
import Profile from '@/views/Profile.vue'
import Works from '@/views/Works.vue'
import PR from '@/views/PR.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components:{
    Header,
    Top,
    Profile,
    Works,
    PR,
    Footer
  },
  data: () => ({
    name:'myportfolio'
  })
}
</script>

<style>
* { 
    margin: 0px; 
    padding: 0px; 
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#header{
  position: sticky;
  top: 0;
  background-color:white ;
}
</style>

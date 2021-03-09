<template>
  <main>
    <router-view />
    <Header />
    <Top />
    <Profile />
    <Works />
    <PR />
    <Contact />
    <Footer />
  </main>
</template>

<script>
import Header from '@/components/Header.vue'
import Top from '@/views/Top.vue'
import Profile from '@/views/Profile.vue'
import Works from '@/views/Works.vue'
import PR from '@/views/PR.vue'
import Contact from '@/views/Contact.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components:{
    Header,
    Top,
    Profile,
    Works,
    PR,
    Contact,
    Footer
  },
  data: () => ({
    name:'myportfolio'
  }),
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>

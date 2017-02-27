<template lang='pug'>
  #app
    navbar
    .container
      router-view
    footersection
</template>



<script>
import navbar from './components/Navbar'
import footersection from './components/Footer'

export default {
  components: {
    navbar,
    footersection
  }
}
</script>

<style>
#app {
  font-family: 'Raleway', 'Source Sans Pro',  Helvetica, Arial, sans-serif;
  font-size:16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

html {
  position: relative;
  min-height: 100%;
}
body {
  /* Margin bottom by footer height */
  margin-bottom: 60px;
  width: 800px;
  max-width: 90%;
  margin: 0 auto;
}

h1, h2, h3 {
  text-align: center;
  font-weight: normal;
}

h1 {
  margin-bottom:1.5em;
  font-size: 3em;
}
</style>

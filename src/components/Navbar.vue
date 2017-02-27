<template lang="pug">
  .navbar
    router-link(to='home') Home
    router-link(to='about') About
    hr

</template>

<style scoped>
a {
  color: gray;
  font-weight: bold;
  text-decoration: none;
  margin-right: 30px;
}

.router-link-active {
  color: black !important;
}
</style>

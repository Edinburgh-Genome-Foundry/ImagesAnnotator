<template lang="pug">
  .container
    nav.navbar.navbar-default.navbar-static-top
      .container
        .navbar-header
          button.navbar-toggle.collapsed(type='button', data-toggle='collapse',
                                         data-target='#navbar', aria-expanded='false',
                                         aria-controls='navbar')
            span.sr-only Toggle navigation
            span.icon-bar
            span.icon-bar
            span.icon-bar
          .navbar-brand(href='#')
            img(src='../assets/images/logo.svg')
        #navbar.navbar-collapse.collapse
          ul.nav.navbar-nav.nav-pills
            li
              router-link(to='home') Home
            li
              router-link(to='about') About
</template>

<style scoped>
.navbar-brand img {
    height:40px;
    margin-top:-10px;
    opacity: 0.7;
    filter: saturate(0);
}

.navbar {
    background: none;
    #border: none;
}

li .active {
  background-color: blue;
}
</style>

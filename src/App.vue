<template>
  <div id="app">
    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    <router-view></router-view>
  </div>
</template>


<style>
@font-face {
  font-family: Montserrat-Light;
  src: url("assets/fonts/Montserrat-Light.otf") format("opentype");
}
@font-face {
  font-family: Montserrat-Hairline;
  src: url("assets/fonts/Montserrat-Hairline.otf") format("opentype");
}
@font-face {
  font-family: Montserrat-Regular;
  src: url("assets/fonts/Montserrat-Regular.otf") format("opentype");
}
@font-face {
  font-family: Montserrat-Bold;
}

html {
  height: 100vh;
}

body {
  background-image: url('assets/background-gradient.svg');
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  font-family: Montserrat-Light, sans-serif;
  background-color: #0c0d2a;
  color: white;
  overflow: hidden;
  min-height: 100vh;
  margin: 0;
}
#app {
  font-weight: normal;
  height: 100vh;
  /*perspective: 2000px;*/
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

<template>
  <div id="app">
    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    <img id='star1' src='./assets/rainbow-star.svg'/>
    <img id='star2' src='./assets/rainbow-star.svg'/>
    <img id='star3' src='./assets/rainbow-star.svg'/>
    <img id='star4' src='./assets/rainbow-star.svg'/>
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
  src: url("assets/fonts/Montserrat-Bold.otf") format("opentype");
}

html {
  height: 100vh;
}

body {
  background-image: url('assets/background-gradient.svg');
  -webkit-background-size: cover;
  -moz-background-size: cover;
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
  background-image: url('assets/clouds-back-desktop.svg');
  -webkit-background-size: 200vh;
  -moz-background-size: 200vh;
  background-size: 200vh;
  background-position: top 40vh left;
  background-repeat: no-repeat;
  /*perspective: 2000px;*/
}

#star1 {
  width: 9vh;
  opacity: .6;
  left: 10vw;
  top: 20vh;
  position: absolute;
}
#star2 {
  width: 8vh;
  opacity: .6;
  left: 17vw;
  top: 3vh;
  position: absolute;
}
#star3 {
  width: 5vh;
  opacity: .6;
  left: 69vw;
  top: 8vh;
  position: absolute;
}
#star4 {
  width: 7vh;
  opacity: .6;
  left: 79vw;
  top: 26vh;
  position: absolute;
}

h1, h2 {
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

* {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
     box-sizing: border-box;
}
</style>

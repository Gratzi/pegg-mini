<template>
  <div id='getApp'>
    <!-- <img src='../assets/clouds-back-desktop.svg' id='clouds'/> -->
    <div class="flexContainer">
      <img id='unicorn' src='../assets/unicorn-white-triblue-full.svg'/>
      <div id='frontClouds'>
        <!-- <img id='frontClouds' src='../assets/clouds-front-desktop.svg'/> -->
        <svg version='1.1' id='peggType' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'
           width='42vw' height='14vh' viewBox='0 0 425.197 198.425' enable-background='new 0 0 425.197 198.425'
           xml:space='preserve'>
        <path fill='none' class='path' stroke='#FFFFFF' stroke-width='8' stroke-linecap='round' d='M309.802,83.75
          c3.945,7.073,10.229,12.376,18.097,14.392c16.811,4.306,34.493-8.025,39.494-27.545c0.718-2.799,1.126-5.595,1.265-8.342
          c0,0-6.574,97.333-33.43,112.123c-26.854,14.79-40.866-28.254-7.784-41.255c33.083-13.001,68.5-35.805,76.284-47.871'/>
        <path fill='none' class='path' stroke='#FFFFFF' stroke-width='8' stroke-linecap='round' d='M273.732,62.255c0,0-6.574,97.333-33.429,112.123
          c-26.855,14.79-40.867-28.254-7.784-41.255c33.081-13.001,69.085-36.109,77.283-49.372c-4.484-8.04-5.948-18.366-3.288-28.75
          c5.001-19.52,22.682-31.854,39.493-27.546c14.401,3.69,23.482,18.392,22.65,34.8'/>
        <path fill='none' class='path' stroke='#FFFFFF' stroke-width='8' stroke-linecap='round' d='M212.481,78.462
          c3.461,9.672,10.766,17.188,20.492,19.68c16.811,4.306,34.495-8.025,39.493-27.545c5.001-19.519-4.572-38.834-21.385-43.142
          c-16.812-4.308-34.493,8.026-39.494,27.546C209.48,63.227,209.961,71.417,212.481,78.462c0,0-8.471,18.661-23.552,20.538
          c-17.835,2.22-40.319-9.586-43.979-37.021c-3.309-24.795,10.282-42.55,23.546-35.381c16.346,8.834,1.341,39.668-13.427,57.486
          c-16.542,19.957-39.441,23.19-72.134,2.173C50.241,65.24,42.979,97.316,74.893,98.873c31.915,1.556,54.116-61.671,17.125-72.391
          c-33.117-9.598-49.817,32.303-49.817,32.303l-0.929,1.521l4.431-33.823l-19.071,145.56'/></svg>
      </div>
      <div id='tagline'>Spark Conversation</div>
      <div id='subtitle'>Get the free app:</div>
      <div id='buttons'>
        <span><a href="" target="_blank"><img  class='downloadButton' src='../assets/app-store-button.svg'/></a></span>
        <span><a href="" target="_blank"><img  class='downloadButton' src='../assets/google-play-button.svg'/></a></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // name: 'hello',
  // data () {
  //   return {
  //     msg: 'Welcome to Your Vue.js App'
  //   }
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  #getApp {

  }

  #frontClouds {
    height: 23vh;
    background-image: url('../assets/clouds-front-desktop.svg');
    -webkit-background-size: 100vw;
    -moz-background-size: 100vw;
    -o-background-size: 100vw;
    background-size: 100vw;
    /*background-position: top 40vh left;*/
    background-repeat: no-repeat;
    text-align: center;
    width: 100vw;
    z-index: 2;
  }

  #frontClouds .path{
    animation: dash 4s linear 1;
    animation-fill-mode: forwards;
    stroke-dasharray: 2000;
    stroke-dashoffset: 2000;
    -webkit-animation: dash 4s linear 1;
    -webkit-animation-fill-mode: forwards;
  }

  #peggType {
    margin-top: 40px;
  }

  .flexContainer {
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
  }

  #unicorn {
    /*width: 123px;*/
    height: 42vh;
    margin: auto;
    padding-top: 19px;
    top: 5vh;
    position: relative;
    z-index: 1;
    margin-top: 41px;
  }

  #tagline {
    font-size: 7vw;
    color: white;
    text-align: center;
    line-height: 26px;
    /*width: 351px;*/
    height: 50px;
    margin: auto;
  }

  #subtitle {
    color: rgba(255, 255, 255, 0.5);
    font-size: 6vw;
    text-align: center;
    /*width: 351px;*/
    height: 50px;
    margin: auto;
  }

  .downloadButton {
    width: 42vw;
    height: 10vh;
    padding: 5px;
  }

  #buttons {
    text-align: center;
  }

  @-webkit-keyframes dash {
    from {
      stroke-dashoffset: 2000;
    }
    to {
      stroke-dashoffset: 0;
    }
  }

  @keyframes dash {
    from {
      stroke-dashoffset: 2000;
    }
    to {
      stroke-dashoffset: 0;
    }
  }

  @media screen and (min-width : 801px) {

      #frontClouds {
        height: 480px;
        -webkit-background-size: 600px;
        -moz-background-size: 600px;
        -o-background-size: 600px;
        background-size: 600px;
        margin: 0 auto;
        width: 600px;
      }

      #frontClouds .path{
      }

      #peggType {
        margin-top: 100px;
        height: 100px;
      }

      .flexContainer {

      }

      #unicorn {
        height: 600px;
        padding-top: 0px;
        top: 50px;
        margin-top: 41px;
      }

      #tagline {
        font-size: 30px;
        height: 40px;
        top: -60px;
        position: relative;
      }

      #subtitle {
        font-size: 24px;
        height: 40px;
        top: -30px;
        position: relative;
      }

      .downloadButton {
        width: 200px;
        height: 60px;
        padding: 5px;
      }

      #buttons {
        text-align: center;
      }

  }

</style>

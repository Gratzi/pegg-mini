<template>
  <div id="cardContainer">
    <v-touch @pan="updateFlip" @panend="endFlip">
      <div class="loading" v-if="loading">
        Loading...
      </div>
      <div id="card" v-else>
        <div class="front">
          <img class='avatarUrl' :src="this.card.avatarUrl" />
          <div class='userName'>Pegg {{ this.card.userName }}</div>
          <h1 id='question'>{{ this.card.question }}</h1>
          <ul id='choices'>
            <li class="choice" v-for="(choice, id) in this.card.choices" v-on:click="cardClick(choice)">
              <div :class="choice.status"></div>
              <div class='number'>{{ choice.num }}</div>
              <div class='verticalCenter'>{{ choice.text.replace(/\[([^|]+)\|([^\]]+)]/g, '$1') }}</div>
            </li>
          </ul>
        </div>
        <div class="back">
          <img class='avatarUrl' :src="this.card.avatarUrl" />
          <div class='userName'>{{ this.card.userName }} Answered</div>
          <div id='answer'>{{ this.card.answer.text.replace(/\[([^|]+)\|([^\]]+)]/g, '$1') }}</div>
          <video id='answerImage' v-if="this.card.image.indexOf('mp4') > -1" preload="auto" autoplay muted loop webkit-playsinline playsinline>
            <source :src="this.card.image" type="video/mp4">
          </video>
          <img id='answerImage' :src="this.card.image" v-else />
        </div>
      </div>
    </v-touch>
    <div id='continueButton' v-on:click="done">Continue...</div>
  </div>
</template>

<script>
  import {TweenLite} from 'gsap'
  import Vue from 'vue'
  import Utils from '../lib/Utils'

  export default {
    name: 'PlayCard',

    data () {
      return {
        loading: true,
        canFlip: false,
        currentSide: 0,
        degrees: 0,
        card: {
          avatarUrl: '',
          userName: '',
          question: '',
          choices: {},
          answer: {},
          image: ''
        }
      }
    },
    created () {
      // fetch the data when the view is created and the data is
      // already being observed
      this.fetchCard()
    },
    watch: {
      // call again the method if the route changes
      '$route': 'fetchCard'
    },
    methods: {
      fetchCard () {
        this.loading = true
        let _this = this
        window.firebaseDB.child(this.$route.params.userId + '/' + this.$route.params.cardId).on('value', function (snapshot, prevChildKey) {
          if (snapshot.val() != null) {
            _this.loading = false
            let value = snapshot.val()
            _this.card = {
              avatarUrl: value.pref.user.avatarUrl + '?height=135&width=135&type=normal',
              userName: value.pref.user.firstName,
              question: value.question.replace(/\[([^|]+)\|([^\]]+)]/g, '$1'),
              choices: value.choices,
              answer: value.pref.answer,
              image: value.pref.answer.image.url
            }
          } else {
            debugger
          }
        })
      },
      cardClick (choice) {
        if (choice.id === this.card.answer.id) {
          Vue.set(this.card.choices[choice.id], 'status', 'selected win')
          this.canFlip = true
          this.currentSide = 1
          setTimeout(function () {
            TweenLite.to('#card', 1, {rotationY: -180})
            TweenLite.to('#continueButton', 1, {top: '78vh'})
          }, 1000)
        } else {
          Vue.set(this.card.choices[choice.id], 'status', 'selected fail')
          let _this = this
          setTimeout(function () {
            Vue.set(_this.card.choices[choice.id], 'status', 'selected fail faded')
          }, 1000)
        }
      },
      updateFlip (e) {
        // console.log(e.type)
        // debugger
        var x = e.deltaX
        var radians = (x / Utils.getViewportWidth()) * 2
        this.degrees = radians * (180 / Math.PI)
        if (this.currentSide === 1) {
          this.degrees += 180
        }
        // console.log(this.degrees)
        TweenLite.to('#card', 0.01, {rotationY: this.degrees})
      },
      endFlip (e) {
        // debugger
        let speed = 0.5
        if (this.currentSide === 0) {
          if (Math.abs(this.degrees) > 30 && this.canFlip) {
            TweenLite.to('#card', speed, {rotationY: -180})
            this.currentSide = 1
          } else {
            TweenLite.to('#card', speed, {rotationY: 0, force3D: true})
            this.currentSide = 0
          }
        } else {
          if (Math.abs(this.degrees) > 190) {
            TweenLite.to('#card', speed, {rotationY: 360})
            this.currentSide = 0
          } else {
            TweenLite.to('#card', speed, {rotationY: 180})
            this.currentSide = 1
          }
        }
      },
      done () {
        this.$router.push('/')
      }
    }
  }
</script>

<style>
  .avatarUrl {
    border-radius: 25vw;
    background-color: rgba(0, 0, 0, 0.4);
    width: 25vw;
    height: 25vw;
    position: absolute;
    top: -12%;
    left: 33vw;
  }

  .userName {
    font-size: 16px;
    font-family: Montserrat-Bold, sans-serif;
    color: rgb(0, 176, 255);
    width: 93vw;
    height: 5vh;
    top: 9%;
    position: absolute;
    text-align: center;
  }

  #question {
    font-size: 5vw;
    text-align: center;
    line-height: 4vh;
    width: 93vw;
    height: 9vh;
    padding: 20px;
    position: relative;
    top: 8%
  }

  #choices {
    color: black;
    font-size: 4.5vw;
    /*z-index: 10;*/
    opacity: 1;
    margin-left: 3vw;
    position: relative;
    top: 13%;
  }

  .choice {
    width: 95%;
    height: 12vh;
    margin: 0 auto;
    border-bottom: 1px solid black;
  }

  .number {
    font-size: 14vw;
    line-height: 12vh;
    height: 12vh;
    position: absolute;
    /*padding-left: 3vw;*/
    left: -3.5vw;
    width: 20vw;
    text-align: center;
  }

  .verticalCenter {
    position: relative;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    display: block;
    padding-left: 14vw;
  }

  #answer {
    font-size: 5vw;
    text-align: center;
    line-height: 4vh;
    width: 93vw;
    height: 9vh;
    padding: 20px;
    position: relative;
    top: 10%
  }

  #answerImage {
    object-fit: contain;
    width: 100%;
    position: absolute;
    top: 23vh;
    max-height: 50vh;
  }

  #cardContainer {
    width: 93vw;
    height: 76vh;
    position: relative;
    perspective: 2000px;
    margin: 0 auto;
    top: 50%;
    transform: translateY(-50%);
  }

  #card {
    color: #2c3e50;
    width: 100%;
    height: 100%;
    position: absolute;
    transform-style: preserve-3d;
  }

  #card .front, #card .back {
    margin: 0;
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    background-image: url('../assets/card-white.svg');
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: 93vw 76vh;
  }
  #card .front {

  }
  #card .back {
    transform: rotateY( 180deg );
  }

  #continueButton {
    font-family: Montserrat-Bold, sans-serif;
    background-color: rgba(255, 255, 255, 0.14);
    text-align: center;
    color: white;
    line-height: 9vh;
    border-radius: 2vw;
    font-size: 5vw;
    cursor: pointer;
    width: 50%;
    margin: 0 auto;
    height: 9vh;
    position: absolute;
    top: 100vh;
    transform: translateX(50%);
  }

  .selected {
    width: 0px;
    height: 12vh;
    animation: grow 0.5s forwards;
    /*animation-iteration-count: infinite;*/
    position: absolute;
    left: -3vw;
  }

  .win {
    background: #9deb00;
  }

  .fail {
    background: #FF694F;
  }

  .faded {
    opacity: .5;
  }

  @keyframes grow {
    from {
      width:0px;
    }
    to {
      width: 93vw;
    }
  }
</style>

<template>
  <div id="cardContainer">
    <div class="loading" v-if="loading">
      Loading...
    </div>
    <div id="card" v-else v-bind:class="{flipped: isFlipped}" v-on:click="cardClick">
      <div class="front">
        <img id='avatarUrl' :src="this.card.pref.user.avatarUrl" />
        <div id='userName'>Pegg {{ this.card.pref.user.firstName }}</div>
        <h1 id='question'>{{ this.card.question }}</h1>
        <ul id='answers'>
          <li class="answer" v-for="choice in this.card.choices"> <div class='verticalCenter'>{{choice.text}}</div></li>
        </ul>
      </div>
      <div class="back">
        <video id='answerImage' v-if="this.card.pref.answer.image.url.indexOf('mp4') > -1" preload="auto" autoplay muted loop webkit-playsinline playsinline>
          <source :src="this.card.pref.answer.image.url" type="video/mp4">
        </video>
        <img id='answerImage' :src="this.card.pref.answer.image.url" v-else />
      </div>
      <!-- <button class='button'>Pick answer</button> -->
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PlayCard',

    data () {
      return {
        loading: true,
        isFlipped: false,
        card: {}
      }
    },
    created () {
      // fetch the data when the view is created and the data is
      // already being observed
      this.fetchCard()
      this.width = window.innerWidth * 0.85
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
            _this.card = snapshot.val()
          } else {
            debugger
          }
        })
      },
      cardClick () {
        this.isFlipped = !this.isFlipped
      }
    }
  }
</script>

<style>
  #avatarUrl {
    border-radius: 100px;
    background-color: rgba(0, 0, 0, 0.4);
    width: 100px;
    height: 100px;
    transform-origin: 0% 0% 0px;
    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 124.5, -60, 2, 1);
    position: absolute;
  }

  #userName {
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
    font-size: 18px;
    text-align: center;
    line-height: 22px;
    width: 93vw;
    height: 9vh;
    padding: 20px;
    position: relative;
    top: 8%
  }

  #answers {
    color: black;
    font-size: 16px;
    /*z-index: 10;*/
    opacity: 1;
    margin-left: 20px;
    position: relative;
    top: 12%;
  }

  .answer {
    width: 93%;
    height: 10.5vh;
    margin: 0 auto;
  }

  .verticalCenter {
    position: relative;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    display: block;
  }

  #answerImage {
    max-width: 720px;
    max-height: 500px;
    object-fit: contain;
    width: 100%;
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
    transition: transform 1s;
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
  #card.flipped {
    transform: rotateY( -180deg );
  }
</style>

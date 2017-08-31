<template>
  <div id="Card">
    <div class="loading" v-if="loading">
      Loading...
    </div>
    <img :src="this.card.pref.answer.image.url" v-else id='answerImage'/>
    <h1 class='slide1 fade-out is-paused'>{{ this.card.question }}</h1>
    <!-- <h1 class='slide2 fade-in is-paused'>Shut up and buy it.</h1> -->
    <button v-on:click="cardClick" class='button' v-if="loading === false">Pick answer</button>
    <!-- <h1><a :href='this.userInput.prodUrl'>{{ this.userInput }}</a></h1> -->
  </div>
</template>

<script>
  export default {
    name: 'Card',

    data () {
      return {
        card: {
          question: '',
          choices: [],
          pref: {},
          peggee: {}
        }
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
          _this.card = snapshot.val()
          _this.loading = false
          // setTimeout(function () {
          //   var slide1 = document.querySelector('.slide1')
          //   var slide2 = document.querySelector('.slide2')
          //   slide1.classList.remove('is-paused')
          //   slide2.classList.remove('is-paused')
          // }, 3000)
          // setTimeout(function () {
          //
          // }, 5000)
        })
      },
      cardClick () {
        console.log('card cardClick')
      }
    }
  }
</script>

<style>
  #answerImage {
    max-width: 720px;
    max-height: 500px;
    object-fit: contain;
    width: 100%;
  }

  #Card {
    text-align: center;
    color: #2c3e50;
    margin-top: 30px;
    padding-bottom:50px;
    display: inline-block;
    margin: 0 0 1em;
    width: 100%;
    background-color: #fff;
    padding: 5% 5% 30px 5%;
    box-sizing: border-box;
  }

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    to {
      opacity: 0;
    }
  }

  .fade-in {
    opacity: 0;
    animation: fadeIn 1s ease-in 1 forwards;
  }

  .fade-out {
    opacity: 1;
    animation: fadeOut 1s ease-in 1 forwards;
  }

  .is-paused {
    animation-play-state: paused;
  }

</style>

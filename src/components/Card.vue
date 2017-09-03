<template>
  <div id="Card">
    <div class="loading" v-if="loading">
      Loading...
    </div>
    <img :src="this.card.image" v-else id='answerImage'/>
    <h1 class='question'>{{ this.card.question }}</h1>
    <button v-on:click="cardClick" class='button' v-if="loading === false">Pick answer</button>
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
          userName: '',
          image: ''
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
          if (snapshot.val() != null) {
            _this.loading = false
            _this.card = snapshot.val()
          } else {
            debugger
          }
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

</style>

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
// import VueFire from 'vuefire'
import VueRouter from 'vue-router'

import GetApp from './components/GetApp'
import Card from './components/Card'
import App from './App'
import Firebase from 'firebase'

// Vue.use(VueFire)
Vue.use(VueRouter)

let config = {
  apiKey: 'AIzaSyAmipeGHKpEfPcHNPI59edisxFgA4O2k-I',
  authDomain: 'pegg-staging.firebaseapp.com',
  databaseURL: 'https://pegg-staging.firebaseio.com',
  projectId: 'pegg-staging',
  storageBucket: 'pegg-staging.appspot.com',
  messagingSenderId: '250031922855'
}

// Here we are initializing the Firebase connection.
let app = Firebase.initializeApp(config)
let db = app.database()
window.firebaseDB = db.ref('public')

const routes = [
  { path: '/c/:userId/:cardId', component: Card },
  { path: '/', component: GetApp },
  { path: '*', component: { template: '<div>Not found</div>' } }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})

import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home'

new Vue({
  el: '#app',
  render: h => h(App)
})

new Vue({
  el: '#ejm',
  render: h => h(Home)
})
import Vue from 'vue'
import Vuelidate from 'vuelidate/src'
import App from './App.vue'
import router from './router'
import store from './store/index'
import datFilter from './filters/date.filter'
import currencyFilter from './filters/currebcy.filter'
import messagePlugin from './utils/message.plugin'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'
import Loader from './components/app/Loader'
import tooltipDirective from './directives/tooltip.directive'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'



Vue.config.productionTip = false
Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', datFilter)
Vue.filter('currency', currencyFilter)
Vue.directive('tooltip', tooltipDirective)
Vue.component('Loader', Loader)

const firebaseConfig = {
  apiKey: "AIzaSyCL2N4zoB3alVTkDG-mV0fCRHEbkbGeaFc",
  authDomain: "vue-expenses-a4564.firebaseapp.com",
  databaseURL: "https://vue-expenses-a4564.firebaseio.com",
  projectId: "vue-expenses-a4564",
  storageBucket: "vue-expenses-a4564.appspot.com",
  messagingSenderId: "136730493076",
  appId: "1:136730493076:web:be485817a5661642cf3481",
  measurementId: "G-K42054R75C"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

let app
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }


} )


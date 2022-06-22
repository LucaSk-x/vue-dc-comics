import Vue from 'vue'
import App from './App.vue'


//import all JavaScript
import "bootstrap";

//import all css bootsrtap
import 'bootstrap/dist/css/bootstrap.min.css';


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

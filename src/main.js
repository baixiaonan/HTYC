// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import './styles/index.less'
import router from './router'
// import axios from 'axios'
import axios from './utils/request'
import 'lib-flexible/flexible.js'


import { 
  RadioGroup,
   Radio,
   Progress,
   Cell,
    CellGroup,
    NavBar,
    Toast  
  } from 'vant'

  Vue
  .use(Radio)
  .use(RadioGroup)
  .use(Progress)
  .use(Cell)
  .use(CellGroup)
  .use(NavBar)
  .use(Toast)
axios.defaults.withCredentials = true

Vue.config.productionTip = false
// Vue.http.options.xhr = { withCredentials: true }  //跨域设置
Vue.prototype.$axios = axios // axios赋值给全局属性

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 先导入了vue
import Vue from 'vue'

// 再导入了APP
import App from './App'
import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true
//import './fullpage.scrollHorizontally.min' // Optional. When using fullpage extensions
import VueFullPage from 'vue-fullpage.js/dist/vue-fullpage'
import 'fullpage.js/dist/fullpage.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import AmazeVue from 'amaze-vue';
import 'amaze-vue/dist/amaze-vue.css';
import VueI18n from 'vue-i18n';
// 导入路由
import router from './router'

Vue.config.productionTip = false
Vue.use(VueFullPage)
Vue.use(AmazeVue);
Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'en-us',
  messages: {
    'zh-cn': require('../src/common/lang/zh-cn'),   // 中文语言包
    'en-us': require('../src/common/lang/en-us')    // 英文语言包
  }
})

/* eslint-disable no-new */
//使用let（变量）/const（常量）来表示变量
new Vue({
  el: '#app', //用于管理要挂在的元素
  router,
  i18n,
  components: { App },
  template: '<App/>'

})

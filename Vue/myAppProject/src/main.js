//导入Bootstrap
import 'bootstrap/dist/css/bootstrap.css'

//导入Vue
import Vue from 'vue'

import App from './js/App.vue'

//导入MintUI相关的东西
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import VueRouter from 'vue-router'

import router from '../src/router.js'
import axios from 'axios'
//导入 MUI 
import '../lib/mui/css/mui.min.css'
import '../lib/mui/css/icons-extra.css'

// 导入 Mose-UI
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'

//引入vant
import vant from 'vant'
import 'vant/lib/index.css'
import 'vant/lib/index.js'
import 'vant/lib/icon/local.css'



Vue.use(MintUI)
Vue.use(VueRouter)
Vue.use(MuseUI)
Vue.use(vant)
Vue.prototype.$axios = axios
Vue.prototype.$bus = new Vue()

var app = new Vue({
    el: '#app',
    router: router,
    render: c => c(App)
})




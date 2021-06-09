import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/css/index.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { 
	faUserSecret, 
	faWallet, 
	faUserCircle,
	faColumns,
	faTachometerAlt,
	faCreditCard
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)
library.add(faWallet)
library.add(faUserCircle)
library.add(faColumns)
library.add(faTachometerAlt)
library.add(faCreditCard)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

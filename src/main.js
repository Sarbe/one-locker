import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as firebase from 'firebase'
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
    created() {
        firebase.initializeApp({
            apiKey: "AIzaSyDocq3LnlChMnMwNki9U7x3BfZFNFQvDYc",
            authDomain: "onelocker-vue.firebaseapp.com",
            databaseURL: "https://onelocker-vue.firebaseio.com",
            projectId: "onelocker-vue",
            storageBucket: "onelocker-vue.appspot.com"
        })
    }
}).$mount('#app')
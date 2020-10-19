/* eslint-disable indent */
/* eslint-disable eol-last */
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ModalComponent from '@/components/Layouts/ModalComponent'
import FormInput from '@/components/Forms/FormInput'
import BaseTable from '@/components/Layouts/Tables/BaseTable'
import './assets/css/tailwind.css'
Vue.config.productionTip = false

// global components
Vue.component('dice-modal', ModalComponent)
Vue.component('form-input', FormInput)
Vue.component('dice-table', BaseTable)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
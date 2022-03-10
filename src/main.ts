import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import SolanaWallets from 'solana-wallets-vue';
import {walletOptions} from './solana-wallets/index'

// Styling
// You can either import the default styles 
import 'solana-wallets-vue/styles.css';
// or create your own.
import './assets/styles.css'


createApp(App)
    .use(store)
    .use(router)
    .use(SolanaWallets, walletOptions)
    .mount('#app');

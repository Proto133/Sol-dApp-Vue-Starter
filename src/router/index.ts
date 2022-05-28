import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import {computed} from 'vue'
import Home from '../views/HomeView.vue'
import store from '@/store'
import { initWallet } from 'solana-wallets-vue';
// import { useWallet } from 'solana-wallets-vue';
import {
  PhantomWalletAdapter,
  SlopeWalletAdapter,
  SolflareWalletAdapter,
} from '@solana/wallet-adapter-wallets';

const walletOptions = {
  wallets: [
    new PhantomWalletAdapter(),
    new SlopeWalletAdapter(),
    new SolflareWalletAdapter(),
  ],
  autoConnect: true,
}

initWallet(walletOptions);



const connected = computed(()=>store.state.connected)

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/auth',
    name: 'Auth',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/AuthView.vue')
  },
  {
    path: '/other',
    name: 'Other',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/OtherView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async (to) => {
  console.log(connected.value)
  console.log(to.path)
  if (connected.value == false && to.meta.requiresAuth) {
    // redirect the user to the login page
    return { name: 'Auth' }
  }
})

export default router

<script setup lang="ts">
import { computed, watchEffect } from 'vue';
import store from '@/store'
import Header from '@/components/MainHeader.vue'
import {useWallet} from 'solana-wallets-vue'
const wallet = useWallet();
watchEffect(()=> {
  store.commit('setConnected', wallet.connected.value );
store.commit('setUser', wallet.publicKey.value)})
</script>
<template>
  <Header/>

  <main>
    <router-view/>
    </main>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

main{
  min-height: 600px;
}

</style>

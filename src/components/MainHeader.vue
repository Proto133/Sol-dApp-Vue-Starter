<script setup lang="ts">
import {computed} from 'vue'
import { WalletMultiButton } from 'solana-wallets-vue'
import store from '@/store'


const connected = computed(()=>store.state.connected)


</script>
<template>
<div class="btn-container">
    <wallet-multi-button dark/>
</div>

    <router-link v-if="!connected" to="/auth">Auth</router-link>
<div v-if="connected" id="nav">
    <router-link to="/">Home</router-link> 
    <router-link to="/other">Other Page</router-link>
  </div>
</template>
<style scoped>
#nav {
display:flex;
flex-flow: row wrap;
justify-content: center;
gap: 1rem 1rem;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.btn-container{
   width: 100%;
   display: flex;
}

</style>
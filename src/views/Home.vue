<script setup lang="ts">
import { computed } from 'vue';
import store from '@/store'

const connected = computed(() => store.state.connected)
const user = computed(() => store.state.user)
</script>
<template>
  <div class="home">
    <h3>This is the home screen.</h3>
    <p v-if="connected">Connected as: {{ user.wallet }}</p>
  </div>
</template>


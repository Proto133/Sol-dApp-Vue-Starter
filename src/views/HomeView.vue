<script setup lang="ts">

import { computed } from 'vue';
import ImageEditor from '@toast-ui/vue-image-editor/src/ImageEditor.vue';
import store from '@/store'
const options = {
  usageStatistics: false,
  cssMaxWidth: 700,
  cssMaxHeight: 800
}

// const imageEditor = new ImageEditor('#tui-image-editor-container', options);

const connected = computed(() => store.state.connected)
const user = computed(() => store.state.user)
</script>
<template>
  <div class="home">
    <h3>This is the home screen.</h3>
    <p v-if="connected">Connected as: {{ user.wallet }}</p>
    <div class="image-editor-container">
    <ImageEditor :include-ui="true" :options="options" />
    </div>
  </div>
</template>

<style>
.home{
  min-height:600px;
  height: 100%;
}
.image-editor-container{
  height:800px;
  display: flex;
}
</style>

<script setup>
import { RouterView } from 'vue-router'
import Header from './components/layout/LayoutHeader.vue'
import Footer from './components/layout/LayoutFooter.vue'
</script>

<template>
  <Header />
  <main class="main">
    <RouterView />
  </main>
  <Footer />
</template>

<style scoped>
  .main {
    margin-top: 40px;
  }
</style>

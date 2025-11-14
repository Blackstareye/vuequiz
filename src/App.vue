<script setup lang="ts">
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
</script>

<template>
  <Header />
  <main class="flex-1">
    <router-view />
  </main>
  <Footer />
</template>

<style scoped></style>

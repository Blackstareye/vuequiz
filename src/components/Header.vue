<template>
  <header class="bg-blue-600 text-white py-4 shadow-md">
    <h1 class="text-center text-2xl font-bold">
      {{ pageTitle }}
    </h1>
  </header>
</template>

<script setup>
import { watch, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const pageTitle = ref(route.meta.title ?? 'Untitled')

// update title when route changes
watch(
  () => route.meta.title,
  (newTitle) => {
    pageTitle.value = newTitle ?? 'Untitled'
  },
)
</script>

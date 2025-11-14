<template>
  <div>
    <h1>User {{ id }}</h1>
    <p>Query: {{ route.query }}</p>
    <button @click="goHome">Go home programmatically</button>
  </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
import { toRef } from 'vue'

// props passed automatically when router config uses props: true
defineProps<{ id: string }>()

const route = useRoute()
const router = useRouter()

function goHome() {
  router.push({ name: 'home' })
}
</script>

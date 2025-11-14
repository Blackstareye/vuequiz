<script setup lang="ts">
defineProps<{
  question: string
}>()
</script>

<template>
  <div
    class="bg-blue-100 shadow lg:text-2xl font-bold mb-10 min-w-3xl lg:min-h-[20vh] p-10 rounded-2xl text-center"
  >
    {{ question }}
  </div>
</template>

<style scoped></style>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    src: string
    alt?: string
    rounded?: boolean
    cover?: boolean
    lazy?: boolean
    wrapperClass?: string
  }>(),
  {
    alt: '',
    rounded: true,
    cover: true,
    lazy: true,
    wrapperClass: '',
  },
)
</script>

<template>
  <img
    :src="src"
    :alt="alt"
    :loading="lazy ? 'lazy' : 'eager'"
    :class="`max-w-full ${wrapperClass} mx-auto rounded-lg aspect-video`"
  />
</template>

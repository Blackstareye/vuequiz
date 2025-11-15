<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    src: string
    preload?: 'auto' | 'metadata' | 'none'
    controls?: boolean
    wrapperClass?: string
    autoplay?: boolean
  }>(),
  {
    preload: 'metadata',
    controls: true,
    wrapperClass: '',
    autoplay: false,
  },
)
import { ref, computed } from 'vue'

const audio = ref<HTMLAudioElement | null>(null)

// Computed property to check if video is playing
const isPlaying = computed(() => {
  const a: HTMLAudioElement = audio.value as HTMLAudioElement
  return a && !a.paused && !a.ended && a.readyState > 2
})
</script>

<template>
  <div :class="`w-full ${wrapperClass}`">
    <!-- native audio element (styled by wrapper) -->
    <div class="flex-1 mt-auto m-2 p-2">
      <audio
        :autoplay="autoplay"
        :src="src"
        :preload="preload"
        :controls="controls"
        class="w-full"
      />
    </div>
  </div>
</template>

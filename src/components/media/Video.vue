<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    src: string
    poster?: string
    muted?: boolean
    playsinline?: boolean
    controls?: boolean
    autoplay?: boolean
    loop?: boolean
    wrapperClass?: string
  }>(),
  {
    poster: '',
    muted: false,
    playsinline: true,
    controls: true,
    autoplay: false,
    loop: false,
    wrapperClass: '',
  },
)
import { ref, computed } from 'vue'

const video = ref<HTMLVideoElement | null>(null)

// Computed property to check if video is playing
const isPlaying = computed(() => {
  const v: HTMLVideoElement = video.value as HTMLVideoElement
  return v && !v.paused && !v.ended && v.readyState > 2
})
</script>

<template>
  <div :class="`${wrapperClass}`">
    <div class="relative overflow-hidden rounded-2xl bg-black shadow-lg">
      <!-- keeps 16:9 / responsive -->
      <div class="w-full aspect-video">
        <video
          ref="video"
          :src="src"
          :poster="poster || undefined"
          :muted="muted"
          :playsinline="playsinline"
          :controls="controls"
          :autoplay="autoplay"
          :loop="loop"
          class="w-full h-full object-cover"
          preload="metadata"
        >
          Sorry, your browser doesn't support embedded videos.
        </video>
      </div>

      <!-- optional simple overlay play icon (purely decorative) -->
      <div
        v-if="isPlaying"
        class="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <svg
          class="w-16 h-16 opacity-0 sm:opacity-30"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden
        >
          <path d="M5 3v18l15-9L5 3z" />
        </svg>
      </div>
    </div>
  </div>
</template>

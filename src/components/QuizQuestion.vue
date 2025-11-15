<script setup lang="ts">
import type { Question } from '@/types/api'
import { MediaType } from '@/types/media'
import Image from './media/Image.vue'
import Video from './media/Video.vue'
import Audio from './media/Audio.vue'

defineProps<{
  q: Question
}>()
</script>

<!-- class="grid grid-cols-4 place-items-center bg-blue-100 shadow font-bold mb-10 min-w-3xl lg:max-h-[80vh] p-10 rounded-2xl text-center" -->
<!-- grid-cols-4 -->
<template>
  <div
    class="grid place-items-center lg:w-screen min-h-[50vh] bg-blue-100 shadow font-bold rounded-2xl text-center mb-5"
  >
    <Image
      v-if="q.media && q.media?.type === MediaType.IMAGE"
      wrapper-class="max-h-50 h-50"
      :src="q.media.path"
    />
    <Video
      v-if="q.media && q.media?.type === MediaType.VIDEO"
      wrapper-class="max-w-[30vw]"
      :autoplay="true"
      :src="q.media.path"
    />
    <Audio
      v-if="q.media && q.media?.type === MediaType.AUDIO"
      :autoplay="true"
      :src="q.media.path"
    />
    <!-- col-span-3 -->
    <div v-if="q.title" class="text-[clamp(0.5rem,2vw,1.2rem)]">
      {{ q.title }}
      <!-- Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint numquam sit voluptas natus
      quaerat, animi architecto dolorum laboriosam corrupti consectetur itaque. Debitis, perferendis
      at. Dolores magnam suscipit nulla ratione asperiores. -->
    </div>
  </div>
</template>

<style scoped></style>

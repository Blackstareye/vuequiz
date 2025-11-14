<script setup lang="ts">
import { computed, ref } from 'vue'
import QuizElement from './QuizElement.vue'
import QuizQuestion from './QuizQuestion.vue'

defineProps<{}>()
const question = {
  q: 'Hello this is a test?',
  sug: [
    'Hellokitty',
    'nulla consectetur ad quasi quidem sapiente magnam aperiam, nostrum distinctio velit, reprehenderit qui dolore alias illo saepe in beatae voluptates eum eaque aut dignissimos, repudiandae corrupti tempore? Officiis, eos placeat, tempore, natus consectetur corporis numquam nam quibusdam est facilis omnis voluptatem!"',
    'Ozelot',
    'Dubidum',
  ],
  cor: 1,
}

const clickedIndex = ref<number | null>(null)

function getButtonClass(index: number) {
  if (clickedIndex.value === null) return ''

  return index === question.cor ? 'bg-green-400' : clickedIndex.value === index ? 'bg-red-400' : ''
}

const buttonClasses = computed(() =>
  question.sug.map((option, index) => {
    if (clickedIndex.value === null) return ''
    return question.cor === index
      ? 'bg-green-400'
      : clickedIndex.value === index
        ? 'bg-red-400'
        : ''
  }),
)

function isCorrectNumber(id: number) {
  clickedIndex.value = id
  if (id === question.cor) {
    console.log('Correct!')
  }
}
</script>

<template>
  <QuizQuestion :question="question.q" />
  <div class="grid lg:grid-cols-2 max-md:grid-cols:1 lg:gap-20 max-md:gap-10 text-center">
    <!-- <template v-for="(value, index) in question['sug']">
      <QuizElement :click-handler="isCorrectNumber" :id="index" :msg="value" />
    </template> -->
    <QuizElement
      v-for="(option, index) in question.sug"
      :key="index"
      :id="index"
      :msg="option"
      :clickHandler="isCorrectNumber"
      :buttonClass="buttonClasses[index]!"
    />
  </div>
</template>

<!-- <QuizElement msg="HelloKitty" />
      <QuizElement
        msg="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit nulla consectetur ad quasi quidem sapiente magnam aperiam, nostrum distinctio velit, reprehenderit qui dolore alias illo saepe in beatae voluptates eum eaque aut dignissimos, repudiandae corrupti tempore? Officiis, eos placeat, tempore, natus consectetur corporis numquam nam quibusdam est facilis omnis voluptatem!"
      />
      <QuizElement msg="JH" />
      <QuizElement msg="a" /> -->
<style scoped></style>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import QuizElement from './QuizElement.vue'
import QuizQuestion from './QuizQuestion.vue'
import { fetcher } from '@/repo/api'
import { FAIL_CLASS, SUCCESS_CLASS } from '@/constants/Validation'

// Props (currently empty)
const props = defineProps<{
  sug: Array<string>
  cor: number
  isCorrectHandler: (isCorrect: boolean) => void
}>()

// State
const clickedIndex = ref<number | null>(null)

// Computed: button classes
const buttonClasses = computed(() => {
  const correctIndex = props.cor
  return props.sug.map((_, idx) => {
    if (clickedIndex.value === null) return ''
    if (idx === correctIndex) return SUCCESS_CLASS
    if (idx === clickedIndex.value) return FAIL_CLASS
    return ''
  })
})

// Click handler
function isCorrectNumber(id: number) {
  // isCorrectHandler
  clickedIndex.value = id
  props.isCorrectHandler(clickedIndex.value === props.cor)
}

// // Fetch on mount
// onMounted(fetchData)
</script>

<template>
  <!-- Question display -->
  <div class="flex flex-col">
    <slot></slot>
    <div class="grid lg:grid-cols-2 max-md:grid-cols-1 lg:gap-2 max-md:gap-10 text-center">
      <QuizElement
        v-for="(option, index) in sug"
        :key="index"
        :id="index"
        :msg="option"
        :clickHandler="isCorrectNumber"
        :buttonClass="buttonClasses[index]!"
      />
    </div>
  </div>
</template>

<style scoped></style>

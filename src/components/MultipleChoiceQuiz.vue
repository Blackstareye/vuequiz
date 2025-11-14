<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import QuizElement from './QuizElement.vue'
import QuizQuestion from './QuizQuestion.vue'
import { fetcher } from '@/repo/api'
import type { Question } from '@/types/api'

// Props (currently empty)
defineProps<{}>()

// State
const question = ref<Question | null>(null)
const loading = ref(true)
const error = ref<string | null>(null)
const clickedIndex = ref<number | null>(null)

// Computed: safeQuestion auto-unwrapped in template
// const safeQuestion = computed(() => question.value)

// Computed: button classes
const buttonClasses = computed(() => {
  if (!question.value || clickedIndex.value === null) return []
  const correctIndex = question.value.obj.cor
  return question.value.obj.sug.map((_, idx) => {
    if (idx === correctIndex) return 'bg-green-400'
    if (idx === clickedIndex.value) return 'bg-red-400'
    return ''
  })
})

// Fetch function
async function fetchData() {
  loading.value = true
  error.value = null

  try {
    const response: Question = await fetcher('/questions')
    question.value = response
    console.log('Fetched question:', response)
  } catch (err: any) {
    console.error(err)
    error.value = err.message
  } finally {
    loading.value = false
  }
}

// Click handler
function isCorrectNumber(id: number) {
  clickedIndex.value = id
  if (question.value && id === question.value.obj.cor) {
    console.log('Correct!')
  }
}

// Fetch on mount
onMounted(fetchData)
</script>

<template>
  <!-- Loading state -->
  <div v-if="loading" class="text-center">Loading...</div>

  <!-- Error state -->
  <div v-else-if="error" class="text-red-500 text-center">{{ error }}</div>

  <!-- Question display -->
  <div v-if="question">
    <QuizQuestion :question="question.q" />

    <div class="grid lg:grid-cols-2 max-md:grid-cols-1 lg:gap-20 max-md:gap-10 text-center">
      <QuizElement
        v-for="(option, index) in question.obj.sug"
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

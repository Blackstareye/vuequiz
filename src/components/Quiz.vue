<script setup lang="ts">
import { fetcher } from '@/repo/api'
import type { MultipleChoiceObject, QuestionObject, WritingObject } from '@/types/api'
import { onMounted, ref } from 'vue'
import MultipleChoiceQuiz from './MultipleChoiceQuiz.vue'
import { QuestionType } from '@/enums/QuestionType'
import QuizQuestion from './QuizQuestion.vue'
import WritingQuiz from './WritingQuiz.vue'

defineProps<{}>()

const question = ref<QuestionObject | null>(null)
const loading = ref(true)
const error = ref<string | null>(null)
// load Quizdata or receive it

// Fetch function
async function fetchData() {
  loading.value = true
  error.value = null

  try {
    const response: QuestionObject = await fetcher('/questions')
    question.value = response
    console.log('Fetched question:', response)
  } catch (err: any) {
    console.error(err)
    error.value = err.message
  } finally {
    loading.value = false
  }
}
// Fetch on mount
onMounted(fetchData)

function multipleChoiceScore(isCorrect: boolean) {
  console.log(`Choice: Player  ${isCorrect ? 'wins' : 'loose'}`)
}
function writingScore(isCorrect: boolean) {
  console.log(`Writing: Player  ${isCorrect ? 'wins' : 'loose'}`)
}
</script>

<template>
  <!-- Loading state -->
  <div v-if="loading" class="text-center">Loading...</div>

  <!-- Error state -->
  <div v-else-if="error" class="text-red-500 text-center">{{ error }}</div>

  <!-- if type MultipleChoice - put all in that -->
  <!-- A MultipleChoiceQuiz contains a question and a choice -->
  <!-- :auto-write="false" -->
  <WritingQuiz
    v-if="question && QuestionType.WRITING === question.t"
    :auto-write="true"
    :cor="(question.obj as WritingObject).answ"
    :is-correct-handler="writingScore"
  >
    <QuizQuestion :q="(question.obj as WritingObject).q"></QuizQuestion>
  </WritingQuiz>

  <MultipleChoiceQuiz
    v-if="question && QuestionType.MULTIPLE_CHOICE === question.t"
    :is-correct-handler="multipleChoiceScore"
    :sug="(question.obj as MultipleChoiceObject).sug"
    :cor="(question.obj as MultipleChoiceObject).cor"
  >
    <QuizQuestion :q="(question.obj as MultipleChoiceObject).q"></QuizQuestion>
  </MultipleChoiceQuiz>
</template>

<style scoped></style>

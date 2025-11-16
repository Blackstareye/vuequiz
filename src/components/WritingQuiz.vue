<script setup lang="ts">
import { ref, watch } from 'vue'
import { SUCCESS_CLASS, FAIL_CLASS } from '@/constants/Validation'
const props = defineProps<{
  cor: string
  autoWrite: boolean
  isCorrectHandler: (isCorrect: boolean) => void
}>()

const input = ref<string>('')
const isCorrect = ref<boolean>(false)

function _check() {
  isCorrect.value = input.value === props.cor
  if (isCorrect) {
    console.log('CORRECT')
    props.isCorrectHandler(isCorrect.value)
  }
}

function checkText() {
  _check()
}

watch(input, (val) => {
  if (props.autoWrite) {
    _check()
  }
})
</script>

<template>
  <div class="flex flex-col">
    <slot></slot>
    <div class="flex flex-col items-center">
      <p class="">
        Your Answer is: {{ input === '' ? 'empty' : input }} thus:
        <span :class="isCorrect ? SUCCESS_CLASS : FAIL_CLASS">
          {{ isCorrect ? 'right' : 'wrong' }}
        </span>
      </p>

      <input
        v-if="autoWrite"
        @change="checkText"
        v-model.trim="input"
        placeholder="write until you are correct"
      />
      <div class="flex flex-1" v-if="!autoWrite">
        <input v-model.trim="input" placeholder="write and pressButton" />
        <button
          class="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="button"
          v-if="!autoWrite"
          @click="checkText"
        >
          PressMe
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

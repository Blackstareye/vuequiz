<script setup lang="ts">
interface Props {
  id: number
  msg: string
  clickHandler: (id: number) => void
  buttonClass: string
}
// const props = defineProps<Props>()
// define props with default value for isCorrect
const props = withDefaults(defineProps<Props>(), {})
</script>

<!-- @click="{{ (m) => props.clickHandler()}}" -->
<template>
  <button
    @click="() => clickHandler(props.id)"
    :class="['hover:bg-amber-500 bg-amber-100 p-5 rounded-2xl lg:max-h-[10vh]', props.buttonClass]"
  >
    {{ props.msg }}
  </button>
</template>

<style scoped></style>

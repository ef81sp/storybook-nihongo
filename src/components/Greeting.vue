<script setup lang="ts">
const {
  /** ラベルテキスト */
  label = 'こんにちは',
  /** サイズ */
  size = '大きい',
} = defineProps<{
  label?: string
  size?: string
}>()
</script>

<template>
  <div :class="size">{{ label }}</div>
</template>

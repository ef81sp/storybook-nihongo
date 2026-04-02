<script setup lang="ts">
const props = withDefaults(defineProps<{
  /** ラベルテキスト */
  label?: string
  /** サイズ */
  size?: string
}>(), {
  label: 'こんにちは',
  size: '大きい',
})
</script>

<template>
  <div :class="props.size">{{ props.label }}</div>
</template>

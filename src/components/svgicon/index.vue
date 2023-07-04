<template>
  <svg :style="{ width: width + 'px', height: height + 'px' }">
    <use :xlink:href="perfix + name" :fill="color"></use>
  </svg>
</template>

<script setup lang="ts">
defineProps({
  perfix: {
    type: String,
    default: '#icon-',
  },
  // 一般传入name 👇🏻是样式
  name: String,
  color: {
    type: String,
    default: 'yellow',
  },
  width: {
    type: [String, Number],
    default: '20',
  },
  height: {
    type: [String, Number],
    default: '20',
  },
})
</script>

<style scoped></style>

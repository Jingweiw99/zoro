<template>
  <div class="navbar">
    <div class="nav-left">
      <el-icon v-if="collspan"><Expand /></el-icon>
      <el-icon v-if="!collspan"><Fold /></el-icon>
      left
    </div>
    <div class="nav-right">right</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const collspan = ref('true')
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .nav-left {
    padding-left: 10px;
  }
  .nav-right {
    padding-right: 10px;
  }
}
</style>

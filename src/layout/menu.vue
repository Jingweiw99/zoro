<template>
  <div>
    <el-menu
      default-active="home"
      background-color="#001529"
      text-color="white"
      @open="handleOpen"
      @close="handleClose"
    >
      <menu-child :menu-list="menuList"></menu-child>
    </el-menu>

    <!-- <el-menu
      default-active="2"
      class=""
      background-color="#001529"
      text-color="white"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-sub-menu index="1">
        <template #title>
          <el-icon><location /></el-icon>
          <span>Navigator One</span>
        </template>
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item two</el-menu-item>
        <el-sub-menu index="1-3">
          <template #title><span>item four</span></template>
          <el-menu-item index="1-3-1">item one</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="2">
        <el-icon><icon-menu /></el-icon>
        <template #title>Navigator Two</template>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <el-icon><document /></el-icon>
        <template #title>Navigator Three</template>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon><setting /></el-icon>
        <template #title>Navigator Four</template>
      </el-menu-item>
    </el-menu> -->
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import menuChild from './menuChild.vue'
defineProps(['menuList'])

const isCollapse = ref(false)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath, 'open')
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath, 'close')
}
</script>

<style lang="scss" scoped>
.el-menu {
  border-right-width: 0px;
}
</style>

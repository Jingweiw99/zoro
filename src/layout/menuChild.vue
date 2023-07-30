<template>
  <div>
    <template v-for="item in menuList" :key="item.path">
      <el-menu-item
        v-if="!item.children && !item.meta.isHidden"
        :index="item.path"
        @click="goPage"
      >
        <template #title>
          <el-icon><component :is="item.meta.icon"></component></el-icon>
          <span>{{ item.meta.title }}</span>
        </template>
      </el-menu-item>
      <el-menu-item
        v-else-if="item.children && item.children.length === 1"
        :index="item.children[0].path"
        @click="goPage"
      >
        <template #title>
          <el-icon>
            <component :is="item.children[0].meta.icon"></component>
          </el-icon>
          <span>{{ item.children[0].meta.title }}</span>
        </template>
      </el-menu-item>
      <el-sub-menu
        v-else-if="item.children && item.children.length > 1"
        :index="item.path"
      >
        <template #title>
          <el-icon><component :is="item.meta.icon"></component></el-icon>
          <span>{{ item.meta.title }}</span>
        </template>
        <!-- 递归组件，这里需要name属性 -->
        <menu-child :menu-list="item.children"></menu-child>
      </el-sub-menu>
    </template>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
defineProps(['menuList'])
let router = useRouter()
const goPage = (vc: any) => {
  console.log(vc, 'vc', vc.index)
  router.push(vc.index)
}
</script>
<script lang="ts">
export default {
  name: 'menuChild',
}
</script>

<style scoped></style>

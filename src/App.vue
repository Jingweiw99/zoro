<script setup lang="ts">
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'

const lang = zhCn
</script>

<template>
  <div>
    <el-row class="mb-4">
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
    </el-row>

    <!-- 设置中文 -->
    <el-config-provider :locale="lang">
      <el-calendar />
    </el-config-provider>
    <hello-world></hello-world>
  </div>
</template>

<style scoped></style>

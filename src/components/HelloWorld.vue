<template>
  <div class="box">123123box</div>
  <!-- test icon -->
  <icon :width="100" :height="100" name="phone" color="red"></icon>
  <svg-icon name="phone"></svg-icon>
</template>

<script setup lang="ts">
import icon from 'cpns/svgicon/index.vue'
// import { reqLogin } from '@/api/user'
// test message mock
// import { onMounted } from 'vue'
// import request from '@/utils/request'
// onMounted(() => {
//   request({
//     url: '/user/login/xxxx',
//     url: '/user/login',
//     method: 'post',
//     data: {
//       username: 'admin',
//       password: '111111',
//     },
//   }).then((res) => {
//     console.log(res)
//   })
// })

// test api
// onMounted(() => {
//   reqLogin({
//     username: 'admin',
//     password: '111111',
//   }).then((res) => {
//     console.log(res)
//   })
// })
</script>

<style lang="scss" scoped>
.box {
  color: $color1;
}
</style>

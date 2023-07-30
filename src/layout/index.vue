<template>
  <div class="layout">
    <div class="left menu">
      <div class="menu-logo">
        <img class="left-logo" :src="setting.logo" alt="" />
        <div class="right-content">{{ setting.title }}</div>
      </div>
      <div class="menu-content">
        <el-scrollbar>
          <Menu :menuList="loginStore.menuRoutes" />
        </el-scrollbar>
      </div>
    </div>
    <div class="right">
      <NavBar />
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import setting from '@/setting'
import Menu from './menu.vue'
import NavBar from './navbar.vue'
import useLoginStore from '@/store/module/login'
// menu
const loginStore = useLoginStore()
</script>

<style scoped lang="scss">
.layout {
  width: 100%;
  height: 100vh;
  display: flex;
  .menu {
    width: $menu-width;
    height: 100vh;
    background-color: $menu-background;
    .menu-logo {
      display: flex;
      align-items: center;
      height: 50px;
      color: white;
      padding: 10px;
      font-size: 20px;
      font-weight: 700;
      .left-logo {
        margin-left: 5px;
      }
      .right-content {
        position: relative;
        top: -2px;
        padding-left: 15px;
      }
    }
    .menu-content {
      height: calc(100vh - 50px);
      background: #001529;
    }
  }
  .right {
    flex: 1;
    .navbar {
      width: 100%;
      height: 50px;
      border-bottom: 1px solid balck;
    }
    .content {
      box-sizing: border-box;

      height: calc(100vh - 50px);
      padding: 10px;
      background: pink;
    }
  }
}
</style>

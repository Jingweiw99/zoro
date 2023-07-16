<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login_form" :model="userForm">
          <h1>hello</h1>
          <h2>欢迎来到硅谷甄选</h2>
          <el-form-item>
            <el-input v-model="userForm.username" prefix-icon="User"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              type="password"
              v-model="userForm.password"
              prefix-icon="Lock"
              :show-password="true"
            ></el-input>
          </el-form-item>
          <el-button
            :loading="loading"
            class="button"
            type="primary"
            @click="login"
          >
            登录
          </el-button>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import useLoginStore from '@/store/module/login'
import { useRouter } from 'vue-router'
import { ElNotification } from 'element-plus'
import 'element-plus/theme-chalk/el-notification.css'
import { getTime } from '@/utils/time'
const userForm = reactive({ username: 'admin', password: '111111' })
const loginStore = useLoginStore()
const router = useRouter()
// 登录业务
const loading = ref(false)
const login = async () => {
  loading.value = true
  // 通知仓库发送请求。 登陆成功，跳转到home页面。 登录失败，提示登录失败了。
  try {
    await loginStore.userLogin(userForm)
    router.push('/')
    loading.value = false
    ElNotification({
      type: 'success',
      message: '欢迎回来',
      title: `HI,${getTime()}好`,
    })
  } catch (error: any) {
    loading.value = false
    ElNotification({
      type: 'error',
      message: error.message,
    })
  }
}
</script>

<style lang="scss" scoped>
.login_container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;
  h1 {
    color: white;
    font-size: 40px;
  }

  h2 {
    font-size: 20px;
    color: white;
    margin: 20px 0px;
  }
  .login_form {
    position: relative;
    top: 30vh;
    width: 80%;
    padding: 40px;
    background: url('@/assets/images/login_form.png') no-repeat center
      center/cover;
  }
  .button {
    width: 100%;
  }
}
</style>

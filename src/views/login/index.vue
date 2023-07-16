<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form
          class="login_form"
          :model="userForm"
          :rules="rules"
          ref="loginForms"
        >
          <h1>hello</h1>
          <h2>欢迎来到硅谷甄选</h2>
          <el-form-item prop="username">
            <el-input v-model="userForm.username" prefix-icon="User"></el-input>
          </el-form-item>
          <el-form-item prop="password">
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
const loginForms = ref()
const loading = ref(false)
const login = async () => {
  try {
    await loginForms.value.validate()
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
  } catch (validateError: any) {
    const { username, password } = validateError
    console.error(
      username && username[0].message,
      password && password[0].message,
    )
  }
}

// 表单校验
// const passwordPass = (rule: any, value: any, cb: any) => {
//   // 自定义校验规则可以结合正则表达式，失败也需要调用并传入错误信息。
//   if (value.length >= 6) {
//     cb()
//   } else {
//     cb(new Error('密码长度至少六位'))
//   }
// }
const rules = {
  username: [
    // change文本发生变化，blur失去焦点
    { required: true, message: '用户名不能为空', trigger: 'blur' },
    {
      min: 5,
      max: 10,
      message: '用户名长度必须在5到10之间',
      trigger: 'change',
    },
  ],
  password: [
    {
      min: 6,
      max: 12,
      message: '密码长度必须在6到12之间',
      trigger: 'change',
    },
    // { validator: passwordPass, trigger: 'change' },
  ],
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

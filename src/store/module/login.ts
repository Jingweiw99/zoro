import { defineStore } from 'pinia'
import { reqLogin } from '@/api/user'
import { GET_TOKEN, SET_TOKEN } from '@/utils/token'

const useLoginStore = defineStore('login', {
  state: () => {
    return {
      token: GET_TOKEN() || '',
    }
  },
  actions: {
    // 用户登录的方法
    async userLogin(userInfo: any) {
      const result: any = await reqLogin(userInfo)
      // 成功200， 失败201
      if (result.code === 200) {
        this.token = result.data.token
        // 我们刷新需要刷新之后还可以有token，需要持久化。仓库是利用js对象保存的数据。(方案： 使用localStorage或者cookie)
        SET_TOKEN(result.data.token)
        return 'ok'
      } else if (result.code === 201) {
        throw new Error(result.data.message)
      }
    },
  },
  getters: {},
})

export default useLoginStore

// 用户相关
import request from '@/utils/request'
import type {
  loginFormData,
  loginResponseData,
  userInfoReponseData,
} from './type'

enum API {
  LOGIN_URL = '/user/login',
  USERINFO_URL = '/user/info',
}

// 登录
export const reqLogin = (userInfo: loginFormData) =>
  request.post<any, loginResponseData>(API.LOGIN_URL, userInfo)

// 获取用户信息
export const reqUserInfo = () =>
  request.get<any, userInfoReponseData>(API.USERINFO_URL)

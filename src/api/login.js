import request from '@/utils/request';
import { getToken } from '@/utils/auth'

export function login(username, password) {
  return request({
    url: '/v1/user/login',
    method: 'post',
    data: 'username='+username+'&password='+password
  })
}

export function getInfo() {
  return request({
    url: '/v1/user/info?access_token='+getToken(),
    method: 'get'
  })
}

export function logout() {
  return request({
    url: '/v1/user/logout',
    method: 'post'
  })
}

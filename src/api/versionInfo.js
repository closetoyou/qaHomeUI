import request from '@/utils/request'
import { getToken } from '@/utils/auth'

export function versionList(type, status) {
  return request({
    url:'/v1/version',
    method:'get',
    params: {
      access_token: getToken(),
      type: type,
      status:status
    }
  })
}

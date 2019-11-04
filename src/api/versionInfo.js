import request from '@/utils/request'
export function versionList() {
  return request({
    url:'/v1/version',
    method:'get'
  })
}

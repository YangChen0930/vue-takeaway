import axios from 'axios'

let baseUrl = (process.env.NODE_ENV === 'production' ? 'http://www.hcyangchen.xyz/sell/' : '/')

const ERR_OK = 0

export function get(url) {
  return function (params) {
    return axios.get(baseUrl + url, {
      params
    }).then((res) => {
      const {
        errno,
        data
      } = res.data
      if (errno === ERR_OK) {
        return data
      }
    }).catch((err) => {
      console.log(err)
    })
  }
}

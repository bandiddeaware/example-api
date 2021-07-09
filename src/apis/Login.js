import axios from 'axios'
import sconfig from './config'

// eslint-disable-next-line
export default (data) => {
  return axios({
    method: 'post',
    url: sconfig.url +'/auth/login',
    data : data
  })
}
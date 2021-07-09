import axios from 'axios'
import sconfig from './config'

// eslint-disable-next-line
export default (data, Token) => {
  return axios({
    method: 'post',
    url: sconfig.url +'/managepersoncard/person_card',
    headers: { 
      'Authorization': 'Bearer ' + Token, 
    },
    data : data
  })
}
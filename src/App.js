import React from 'react'
import { store } from './stores/store'

import Login from './apis/Login'
import getPersonCard from './apis/getPersonCard'

import {
  AccessToken,
  PersonCard
} from './stores/actions'

import Table from './componants/table'

function App() {

  const [isAuth, setisAuth ] = React.useState(false)

  React.useEffect(() => {

    return () => {

    }
  }, [])

  const getToken = async () => {
    let res
    try {
      var username = "admin"
      var password = "admin"
      let Form = new FormData();
      Form.append('username', username)
      Form.append('password', password)
      res = await Login(Form)
    } catch (e) {
      res = e.response
    }
    if (res.status === 200){
      store.dispatch(AccessToken(res.data.token))
      setisAuth(true)
    }else if (res.status >= 400 || res.status < 500){
      alert(res.data.errors.message)
    }else if (res.status >= 500){
      alert(res.data.errors.message)
    }
    console.log(res.data)
  }

  const getgetPersonCard1_5 = async () => {
    let res
    try {
      let Form = new FormData();
      Form.append('offset', 0)
      Form.append('limit', 5)
      res = await getPersonCard(Form, store.getState().AccessToken)
    } catch (e) {
      res = e.response
    }
    if (res.status === 200){
      store.dispatch(PersonCard(res.data.data))
      setisAuth(true)
    }else if (res.status >= 400 || res.status < 500){
      alert(res.data.errors.message)
    }else if (res.status >= 500){
      alert(res.data.errors.message)
    }
  }

  const getgetPersonCard6_10 = async () => {
    let res
    try {
      let Form = new FormData();
      Form.append('offset', 5)
      Form.append('limit', 5)
      res = await getPersonCard(Form, store.getState().AccessToken)
    } catch (e) {
      res = e.response
    }
    if (res.status === 200){
      store.dispatch(PersonCard(res.data.data))
      setisAuth(true)
    }else if (res.status >= 400 || res.status < 500){
      alert(res.data.errors.message)
    }else if (res.status >= 500){
      alert(res.data.errors.message)
    }
  }

  const getgetPersonCard1_10 = async () => {
    let res
    try {
      let Form = new FormData();
      Form.append('offset', 0)
      Form.append('limit', 10)
      res = await getPersonCard(Form, store.getState().AccessToken)
    } catch (e) {
      res = e.response
    }
    if (res.status === 200){
      store.dispatch(PersonCard(res.data.data))
      setisAuth(true)
    }else if (res.status >= 400 || res.status < 500){
      alert(res.data.errors.message)
    }else if (res.status >= 500){
      alert(res.data.errors.message)
    }
  }

  return (
    <div className="App">
      <button onClick={getToken}>Request Login</button>
      {
        (isAuth ? <div>
          <button onClick={getgetPersonCard1_10}>call api person 1 - 10</button>
          <button onClick={getgetPersonCard1_5}>call api person 1 - 5</button>
          <button onClick={getgetPersonCard6_10}>call api person 6 - 10</button>
          <Table store={store} />
        </div>: null)
      }
    </div>
  );
}

export default App;

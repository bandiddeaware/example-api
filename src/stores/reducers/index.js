import initialState from './state'

//eslint-disable-next-line
export default (state = initialState, action) => {
  switch (action.type) {
    case 'AccessToken':
      return Object.assign({}, state, {
        AccessToken: action.payload
      })
    case "PersonCard": 
      return Object.assign({}, state, {
        PersonCard: action.payload
      })
    default:
      return state
  }
}

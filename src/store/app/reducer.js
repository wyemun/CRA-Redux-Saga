import createReducer from '../../utils/create-reducer'

const initialState = {
  hello: ''
}

export default createReducer(initialState, {
  'APP/INIT': state => ({
    hello: `Initialized at ${(new Date()).toISOString()}`
  })
})

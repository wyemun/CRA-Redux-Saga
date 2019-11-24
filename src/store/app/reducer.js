import createReducer from '../../utils/create-reducer'

const initialState = {
  hello: ''
}

export default createReducer(initialState, {
  'APP/START': state => ({
    hello: 'world'
  })
})

import { combineReducers } from 'redux'
import { all } from 'redux-saga/effects'

import appReducer from './app/reducer'

// sagas list
import appSagas from './app/sagas'

export const createRootReducer = history =>
  combineReducers({
    app: appReducer
  })

export function * rootSaga () {
  yield all([
    // add saga here
    ...appSagas
  ])
}

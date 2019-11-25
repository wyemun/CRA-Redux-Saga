import { call, put, fork, takeEvery } from 'redux-saga/effects'

import { INIT, newEvent } from './actions'
import { delayedMessage } from './api'

export function * handleAppInit (action) {
  const message = yield call(delayedMessage)
  yield put(newEvent(message))
}

function * watchAppInit () {
  yield takeEvery(INIT, handleAppInit)
}

export default [
  fork(watchAppInit)
]

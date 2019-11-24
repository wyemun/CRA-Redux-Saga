import { call, put, fork, takeEvery } from 'redux-saga/effects'

const delayedMessage = async () => new Promise(resolve => {
  setTimeout(() => {
    resolve('Delayed messsage here')
  }, 5 * 1000)
})

function * handleAppInit () {
  const message = yield call(delayedMessage)
  yield put({
    type: 'NEW/EVENT',
    payload: { message }
  })
}

function * watchAppInit () {
  yield takeEvery('APP/INIT', handleAppInit)
}

export default [
  fork(watchAppInit)
]

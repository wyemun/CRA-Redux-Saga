import { recordSaga } from '../../utils/test-utils'
import { handleAppInit } from './sagas'
import * as api from './api'
import { INIT, newEvent } from './actions'

describe('Saga: App', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  it('handle app init', async () => {
    const initAction = {
      type: INIT
    }
    const someMessage = 'whatever'

    api.delayedMessage = jest.fn()
    api.delayedMessage.mockImplementation(() => someMessage)

    const dispatchRecord = await recordSaga(handleAppInit, initAction)

    expect(dispatchRecord).toContainEqual(newEvent(someMessage))
  })
})

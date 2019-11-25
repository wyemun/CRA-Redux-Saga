export const INIT = 'APP/INIT'
export const NEW_EVENT = 'NEW/EVENT' // temp example

export const initApp = () => ({
  type: INIT
})

export const newEvent = message => ({
  type: NEW_EVENT,
  payload: { message }
})

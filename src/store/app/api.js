// mock API call
export async function delayedMessage () {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Delayed message here')
    }, 2 * 1000)
  })
}

import React from 'react'
import { shallow } from 'enzyme'
import { Header } from './index'

describe('Component: Header', () => {
  let mockInitApp, wrapper

  const message = 'hey hey'

  beforeEach(() => {
    mockInitApp = jest.fn()
    const actions = {
      initApp: mockInitApp
    }
    wrapper = shallow(<Header actions={actions} message={message} />)
  })

  it('renders message', () => {
    expect(wrapper.text()).toEqual(message)
  })

  it('call initApp', () => {
    expect(mockInitApp).toHaveBeenCalledTimes(1)
  })
})

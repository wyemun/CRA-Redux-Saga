import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import styled from 'styled-components'

import { initApp } from '../../store/app/actions'

const BaseHeader = styled.header`
  background: #eee;
  width: 100%;
  padding: 2rem;
  display: block;
  box-sizing: border-box;
`

class Header extends Component {
  componentDidMount () {
    // do something with actions
    this.props.actions.initApp()
  }

  render () {
    const { message } = this.props

    return <BaseHeader>{message}</BaseHeader>
  }
}

const mapStateToProps = ({ app }) => {
  return {
    message: app.hello
  }
}

const mapDispatchToProps = dispatch => ({
  actions: {
    ...bindActionCreators({ initApp }, dispatch)
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)

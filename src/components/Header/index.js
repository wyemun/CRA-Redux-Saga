import React from 'react'
import styled from 'styled-components'

const BaseHeader = styled.header`
  background: #eee;
  width: 100%;
  padding: 2rem;
  display: block;
  box-sizing: border-box;
`

const Header = ({ children }) => (
  <BaseHeader>{children}</BaseHeader>
)

export default Header

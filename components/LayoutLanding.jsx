import React from 'react'
import HeaderLanding from './HeaderLanding'

const LayoutLanding = ({ children }) => {
  return (
    <>
      <HeaderLanding />
      {children}
    </>
  )
}

export default LayoutLanding

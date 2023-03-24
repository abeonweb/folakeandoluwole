import React from 'react'
import Navigation from "./Navigation"

const SharedLayout = ({children, }:{children: React.ReactNode}) => {
  return (
    <div>
        <Navigation />
        <main>{children}</main>
    </div>
  )
}

export default SharedLayout
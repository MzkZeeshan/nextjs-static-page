import React, { FC,ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

type LayoutProps = {children: ReactNode };

const Layout : FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
        <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout;
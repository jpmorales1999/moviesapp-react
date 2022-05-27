import React from 'react'
import { Layout } from 'antd'

import './Footer.scss'

export default function Footer() {
  const { Footer } = Layout
  return (
    <Footer className='footer'>
        <p>Todos los derechos reservados &copy; 2022</p>
    </Footer>
  )
}

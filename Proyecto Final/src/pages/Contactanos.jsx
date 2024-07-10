import React from 'react'
import NavbarFun from '../components/navBar/navBar'
import ContactMe from '../components/contactMe/ContactMe'

function Contactanos() {
  // recibe los componentes  <NavbarFun/>
//<ContactMe/>
  return (
    <div className='contactme'>
      <NavbarFun/>
      <ContactMe/>
    </div>
  )
}

export default Contactanos

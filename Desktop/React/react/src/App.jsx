import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './component/navbar'
import Content from './component/content'
import './index.css'
import React from 'react'



function Contain(props) {

   const [toggle, settoggle] = React.useState(false)
 
   

   return(
      <section className='bg-blac pt-2 pb-72'>
      <div className=''>
        <NavBar 
        toggle={toggle}
       />

       <Content 
       toggle={toggle}
       />
      </div>
      </section>
   )
}

export default Contain







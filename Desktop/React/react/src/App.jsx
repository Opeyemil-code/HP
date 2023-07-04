import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './component/navbar'
import Content from './component/content'
import './index.css'



function Contain(params) {
   return(
      <div className=''>
        <NavBar/>
       <Content/>
      </div>
   )
}

export default Contain







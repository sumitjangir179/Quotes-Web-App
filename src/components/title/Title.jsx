import React from 'react'
import './style.css'

const Title = ({children}) => {
  return(
    <div className='box'>
        <h2 className='title'>{children}</h2>
    </div>
  )
  
}

export default Title
import React from 'react'
import './style.css'

const Button = ({ children, onClick}) => {
    return (
        <div className='button'>
            <button className='btn' onClick={onClick}>{children}</button>
        </div>
    )
}

export default Button
import React from 'react'
import './style.css'

const Radio = ({ name, value, checked, onChange, ...props }) => {
    return (
        <>
            <input id={value} type='radio' name={name} value={value} checked={checked} onChange={onChange} {...props} />
            <label htmlFor={value}>{value}</label>
        </>

    )
}

export default Radio
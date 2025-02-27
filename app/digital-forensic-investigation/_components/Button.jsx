'use client';
import React from 'react'

const Button = ({ text, onClick, className, children }) => {
    return (
        <button onClick={onClick} className={`bg-primary text-white px-4 py-2 rounded-md flex gap-2 font-bold border border-transparent hover:border-primary hover:text-primary duration-200 hover:bg-transparent ${className}`}>
            {children}
        </button>
    )
}

export default Button
"use client"
import React from 'react'

const Header = () => {
    const handleSignOut = () =>{
        localStorage.removeItem('token');
        window.location.href = '/signin';
    }
    return (
        <div>
            <button onClick={handleSignOut}>Logout</button>
        </div>
    )
}

export default Header

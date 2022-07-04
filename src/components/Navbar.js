import React from 'react'
import Logo from "../images/meme-icon.png"
function Navbar() {
    return (
        <nav className="navbar">
            <img src={Logo} alt="logo" className="navbar--icon" />
            <h2 className="navbar--title">MemeGenerator</h2>
        </nav>
    )
}

export default Navbar;
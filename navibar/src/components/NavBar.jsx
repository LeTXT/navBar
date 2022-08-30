import React from "react";

import logo from '../img/logoNav.svg'

import { handleClickNav } from '../util/navBar.js'

export default function NavBar() {
    return (
        <>
            <div className="navBar">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="burguer" onClick={() => handleClickNav()}>
                    <div className="navB1"></div>
                    <div className="navB2"></div>
                    <div className="navB3"></div>
                </div>
                <div className="list">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
                </div>
            </div>        
        </>
    )
}
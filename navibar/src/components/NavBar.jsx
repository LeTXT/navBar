import React, { useRef } from "react";

import logo from '../img/logoNav.svg'

import { handleClickNav } from '../util/navBar.js'

export default function NavBar() {
    const burguer = useRef()
    const list = useRef()
    const li = useRef()

    return (
        <>
            <div className="navBar">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="burguer" ref={burguer} onClick={() => handleClickNav(burguer.current, list.current, li.current)}>
                    <div className="navB1"></div>
                    <div className="navB2"></div>
                    <div className="navB3"></div>
                </div>
                <div className="list" ref={list}>
                <ul ref={li}>
                    <li >Home</li>
                    <li >About</li>
                    <li >Services</li>
                    <li >Contact</li>
                </ul>
                </div>
            </div>        
        </>
    )
}
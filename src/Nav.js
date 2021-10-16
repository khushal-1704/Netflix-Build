import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import './Nav.css'

function Nav() {
    const [show, handleShow] = useState(false);
    const history = useHistory()

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true)
        } else {
            handleShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar);
        return () => window.removeEventListener('scroll', transitionNavBar)
    }, [])
    return (
        <div className={`nav ${show && 'nav__black'}`} >
            <div className="nav__contents">
                <img
                    onClick={() => history.push("/")}
                    className='nav__logo' src="/images/netflix-logo-0.png" alt="" />

                <img
                    onClick={() => history.push("/profile")}
                    className='nav__avatar' src="/images/avatar.png " alt="net-ava" />
            </div>
        </div>

    )
}

export default Nav

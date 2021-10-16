import React, { useState } from 'react';
import './LoginScreen.css'
import SignupScreen from './SighupScreen'


function LoginScreen() {
    const [signIn, setSignIn] = useState(false)

    function handleClick() {
        return setSignIn(true)
    }
    return (
        <div className='loginScreen' >
            <div className="loginScreen__background">
                <img
                    className='loginScreen__logo'
                    src="/images/netflix-big.png" alt="netflix-image" />
                <button className='loginScreen__button'
                    onClick={handleClick} >Sign In
                </button>
                <div className="loginScreen__gradient"></div>

                <div className="loginScreen__body">
                    {signIn ? (
                        <SignupScreen />
                    ) : (
                        <>
                            <h1>Unlimited films , TV programmes and more.</h1>
                            <h2>Watch anywhere . Cancel any time.</h2>
                            <h3>Ready to watch?Enter you email to create to restart your membership.</h3>

                            <div className="loginScreen__input"><form action="input">
                                <input type="email"
                                    placeholder='Email Address' />
                                <button
                                    onClick={handleClick} className="loginScreen__getStarted">
                                    GET STARTED
                                </button>
                            </form>
                            </div>
                        </>
                    )}

                </div>
            </div>
        </div>
    )
}

export default LoginScreen;

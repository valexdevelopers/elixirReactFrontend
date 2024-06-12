import React from 'react'
import LoginForm from '../partials/forms/LoginForm'

import '../../assets/styles/css/login.css'

function Login() {
    return (
        <div className="loginPage">
            <div className="fullheight">
                <LoginForm className="loginForm" />
                <div className="LoginFooter">
                    <footer>
                        <div>
                            <div className="footerSeperator">
                                <div className="footerLineSeperator"></div>

                            </div>
                            <div className="brandName">
                                <p>TOKSNET DIGITAL LIMITED</p>

                            </div>
                            <div className="appVersion">
                                <p><span>Version:</span> <b>1.0.1</b></p>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
            
        </div>
    )
}

export default Login

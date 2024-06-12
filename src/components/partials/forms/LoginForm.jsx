import React, {useState} from 'react'
import logo from '../../../assets/images/logo/elixir_logo.png'
import * as BIcons from 'react-bootstrap-icons';


function LoginForm() {
    const [userName, setUserName] = useState('');
    const [userPassword, setPassword] = useState('');
    const [passwordVisibility, setChangePasswordVisibility] = useState(false);
    
  return (
        <div className="loginFormWrap">
            <div className="form_wrap">
                <div className="logo_wrap">
                    <img src={logo} alt="" className="brandImage" />
                </div>
                <div className="loginformContainer">
                    <form action="">
                        <div className="formTitle">
                            <h3>Sign In</h3>
                        </div>
                        <div class="formContainer">
                            <label for="exampleFormControlInput1" class="form-label loginFormLabel">UserName</label>
                            <input
                                type="text"
                                class="form-control sqaureBorder"
                                id="exampleFormControlInput1"
                                required
                                value={userName}
                                onChange={(event) => setUserName(() => event.target.value)}
                            />
                        </div>
                      
                        <div class="formContainer">
                          <label for="exampleFormControlInput1" class="form-label loginFormLabel">Password</label>
                            <div class="input-group password">
                                <input
                                    type={passwordVisibility ? 'text' : 'password'}
                                    required
                                    class="form-control sqaureBorder removeOutline"
                                    aria-label="Password"
                                    aria-describedby="button-addon2"
                                   
                                    value={userPassword}
                                    onChange={(event) => setPassword(() => event.target.value)}
                                />
                                {
                                    passwordVisibility ? (
                                        <button
                                            class="btn showPassword"
                                            type="button"
                                            id="button-addon2"
                                            onClick={() => setChangePasswordVisibility((prevState) => !prevState)}
                                        >
                                            <BIcons.EyeSlash />
                                        </button>
                                    ): (
                                            <button
                                                class="btn showPassword"
                                                type="button"
                                                id="button-addon2"
                                                onClick={() => setChangePasswordVisibility((prevState) => !prevState)}
                                            >
                                                <BIcons.Eye />
                                            </button>     
                                    )
                                }
                                
                            </div>
                      </div>
                      <div className="remember">
                          <input type="checkbox" name="" id="" />
                          <label>Remember my login</label>
                        </div>
                        <div className="loginActionBtn">
                            <div className="formButtons"><button type="submit" className="appColorbtn btn-primary">Login</button></div>
                          <div className="formButtons"><button type="submit" className="appColorbtn btn-primary">Reset</button></div>
                        </div>
                        <div className="forgotPassword"><a href="/forgot-password">forgot password ?</a></div>
                    </form>
                </div>
            </div>
        
    </div>
  )
}

export default LoginForm

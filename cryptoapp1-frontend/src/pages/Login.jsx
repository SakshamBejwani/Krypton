import React from 'react'
import GoogleLogin from 'react-google-login'
import {useHistory, Link} from 'react-router-dom'

const responseGoogle = (response) => {
    console.log("Google Data", response.profileObj);
    localStorage.setItem('gdata', response.profileObj)
  }
function Login() {
    return (
        <div class="authincation h-100 vh-100">
        <div class="container h-100">
            <div class="row justify-content-center h-100 align-items-center">
                <div class="col-md-6">
                    <div class="authincation-content">
                        <div class="row no-gutters">
                            <div class="col-xl-12">
                                <div class="auth-form">
									<div class="text-center mb-3">
										<img src="images/logo-full.png" alt="" />
									</div>
                                    <h4 class="text-center mb-4">Sign in your account</h4>
                                    <form action="index.html">
                                        <div class="form-group">
                                            <label class="mb-1"><strong>Email</strong></label>
                                            <input type="email" class="form-control" value="hello@example.com" />
                                        </div>
                                        <div class="form-group">
                                            <label class="mb-1"><strong>Password</strong></label>
                                            <input type="password" class="form-control" value="Password" />
                                        </div>
                                        <div class="form-row d-flex justify-content-between mt-4 mb-2">
                                            <div class="form-group">
                                               <div class="custom-control custom-checkbox ml-1">
													<input type="checkbox" class="custom-control-input" id="basic_checkbox_1"/>
													<label class="custom-control-label" for="basic_checkbox_1">Remember my preference</label>
												</div>
                                            </div>
                                            <div class="form-group">
                                                <a href="page-forgot-password.html">Forgot Password?</a>
                                            </div>
                                        </div>
                                        <div class="text-center">
                                            <button type="submit" class="btn btn-primary btn-block">Sign Me In</button>
                                        </div>
                                        <hr/>
                                        <div class="text-center">
                                            <GoogleLogin class="btn btn-primary btn-block"
                                            clientId="730717924427-ipl776uruqsjrbc0tfuqk39jt1bi5bea.apps.googleusercontent.com"
                                            buttonText="Login"
                                            onSuccess={responseGoogle}
                                            />  
                                        </div>                              
                                    </form>
                                    <div class="new-account mt-3">
                                        <p>Don't have an account? <a class="text-primary" href="./page-register.html">Sign up</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Login

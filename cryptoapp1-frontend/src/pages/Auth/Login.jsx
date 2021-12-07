import React,{useState, useEffect} from 'react'
import GoogleLogin from 'react-google-login'
import { useHistory, Redirect  } from 'react-router';
import Snackbar from '@mui/material/Snackbar';

function Login() {
    const [SnackMessage, setSnackMessage] = useState("")
    const [isSnackBar, setIsSnackBar] = useState(false)
    const [userData, setUserData] = useState(null)
    const [redirectPage, setRedirectPage] = useState(false)
    
    const responseGoogle = (response) => {
        setRedirectPage(true)
        console.log("Google Data", response.profileObj);
        // setUserData(response.profileObj)
        // console.log(userData.profileObj.name)
        // console.log(userData.profileObj.givenName)
        // console.log(userData.profileObj.imageUrl)
        localStorage.setItem('gdata', userData.profileObj)
        setIsSnackBar(true)
        setSnackMessage("Logged in Successfully" )
        refreshTokenSetup(response)
    }
    const errorGoogle = (response) => {
        setIsSnackBar(true)
        setSnackMessage("Something Went Wrong!" )
        
    }
    const refreshTokenSetup = (res) => {
        let refreshTiming = (res.tokenObj.expires_in || 3600 - 5 *60) * 1000;

        const refreshToken = async () => {
            const newAuthRes = await res.reloadAuthResponse();
            refreshTiming = (newAuthRes.expires_in || 3600 - 5 *60) * 1000;
            console.log('New AuthToken', newAuthRes.id_token);
            setTimeout(refreshToken, refreshTiming);

        };
        setTimeout(refreshToken, refreshTiming);
    };

    const closeSnack=()=>{
        setIsSnackBar(false)
        setSnackMessage("")
    }

    return (
        
        (redirectPage) ? 
            (<Redirect to="/home"/>)
        :
        (
        <>
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
                                            <input type="email" class="form-control" placeholder="hello@example.com" />
                                        </div>
                                        <div class="form-group">
                                            <label class="mb-1"><strong>Password</strong></label>
                                            <input type="password" class="form-control" placeholder="Password" />
                                        </div>
                                        <div class="form-row d-flex justify-content-between mt-4 mb-2">
                                            <div class="form-group">
                                               <div class="custom-control custom-checkbox ml-1">
													<input type="checkbox" class="custom-control-input" id="basic_checkbox_1"/>
													<label class="custom-control-label" for="basic_checkbox_1">Remember my preference</label>
												</div>
                                            </div>
                                            <div class="form-group">
                                                <a href="#">Forgot Password?</a>
                                            </div>
                                        </div>
                                        <div class="text-center">
                                            <button type="submit" class="btn btn-primary btn-block">Sign Me In</button>
                                        </div>
                                        <hr/>
                                        <div class="text-center">
                                            <GoogleLogin class="btn btn-primary btn-block"
                                            clientId="730717924427-ipl776uruqsjrbc0tfuqk39jt1bi5bea.apps.googleusercontent.com"
                                            approvalPrompt="force"
                                            prompt='consent'
                                            buttonText="Login"
                                            onSuccess={responseGoogle}
                                            onFailure={errorGoogle}
                                            />  
                                        </div>                              
                                    </form>
                                    {/* <div class="new-account mt-3">
                                        <p>Don't have an account? <a class="text-primary" href="#">Sign up</a></p>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Snackbar
        open={isSnackBar}
        onClose={(e)=>closeSnack(e)}
        anchorOrigin={{vertical: 'bottom', horizontal: 'center',}}
        message= {SnackMessage}
        autoHideDuration={6000}
        />
    </div>
    </>)
    
    )
}

export default Login

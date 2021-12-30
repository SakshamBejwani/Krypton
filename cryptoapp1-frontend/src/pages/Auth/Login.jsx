import React,{useState, useEffect} from 'react'
import GoogleLogin from 'react-google-login'
import { useHistory, Redirect } from 'react-router';
import {Link} from 'react-router-dom'
import Snackbar from '@mui/material/Snackbar';
import {useDispatch} from 'react-redux'
import {SET_USER_DETAILS, SET_AUTH_STATUS} from '../../Reducers/types'
function Login() {
    const dispatch = useDispatch()
    const [SnackMessage, setSnackMessage] = useState("")
    const [isSnackBar, setIsSnackBar] = useState(false)
    const [userData, setUserData] = useState(null)
    const [redirectPage, setRedirectPage] = useState(false)
    
    const responseGoogle = (response) => {
        setRedirectPage(true)
        console.log("Google Data", response.profileObj);
        localStorage.setItem('userDetails', response.profileObj)
        setIsSnackBar(true)
        setSnackMessage("Logged in Successfully" )
        refreshTokenSetup(response)
        dispatch({ type: SET_USER_DETAILS, payload: { userDetails: response.profileObj } })
        
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
									<div class="text-center ">
                                    <svg width="200" height="200" viewBox="0 0 1742 592" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect y="92" width="500" height="500" rx="70" fill="url(#paint0_radial_13_22)"/>
<path d="M102.6 322.4H112.2L165 249.6H220.2V252L156.2 342.8V350L226.6 445.6V448H169L112.2 370.4H102.6V448H52.2V168H102.6V322.4ZM271.522 249.6H355.522V278.4H362.722C366.455 267.467 372.722 259.067 381.522 253.2C390.589 247.067 401.389 244 413.922 244C433.655 244 449.522 250.267 461.522 262.8C473.522 275.067 479.522 293.867 479.522 319.2V328L427.522 332.8V327.2C427.522 316.267 424.722 307.6 419.122 301.2C413.522 294.533 405.122 291.2 393.922 291.2C382.722 291.2 373.922 295.067 367.522 302.8C361.122 310.533 357.922 321.6 357.922 336V400H403.522V448H266.722V400H307.522V297.6H271.522V249.6Z" fill="black"/>
<path d="M682.6 249.6H733V496.8C733 505.867 730.067 513.333 724.2 519.2C718.6 525.067 711.267 528 702.2 528H584.2V480H671.8C679 480 682.6 476 682.6 468V419.2H675.4C666.6 442.133 647.667 453.6 618.6 453.6C608.733 453.6 599.533 452 591 448.8C582.467 445.6 575 440.667 568.6 434C562.2 427.333 557.133 419.067 553.4 409.2C549.933 399.067 548.2 387.2 548.2 373.6V249.6H598.6V363.2C598.6 377.333 601.933 388.4 608.6 396.4C615.267 404.133 625.267 408 638.6 408C653.8 408 664.867 403.2 671.8 393.6C679 383.733 682.6 370.4 682.6 353.6V249.6ZM833.122 528H782.722V249.6H833.122V278.4H840.322C845.655 267.467 853.389 259.067 863.522 253.2C873.655 247.067 886.589 244 902.322 244C914.055 244 925.122 246.267 935.522 250.8C946.189 255.333 955.389 262 963.122 270.8C971.122 279.333 977.389 289.867 981.922 302.4C986.722 314.933 989.122 329.2 989.122 345.2V352.4C989.122 368.667 986.855 383.067 982.322 395.6C977.789 408.133 971.655 418.8 963.922 427.6C956.189 436.133 946.989 442.667 936.322 447.2C925.922 451.467 914.589 453.6 902.322 453.6C893.255 453.6 885.389 452.667 878.722 450.8C872.055 448.933 866.189 446.4 861.122 443.2C856.322 440 852.189 436.4 848.722 432.4C845.522 428.133 842.722 423.733 840.322 419.2H833.122V528ZM885.922 405.6C901.655 405.6 914.322 400.8 923.922 391.2C933.789 381.333 938.722 368 938.722 351.2V346.4C938.722 329.6 933.789 316.4 923.922 306.8C914.322 296.933 901.655 292 885.922 292C870.189 292 857.389 297.067 847.522 307.2C837.922 317.067 833.122 330.133 833.122 346.4V351.2C833.122 367.467 837.922 380.667 847.522 390.8C857.389 400.667 870.189 405.6 885.922 405.6ZM1032.44 249.6H1091.24V168H1141.64V249.6H1213.24V297.6H1141.64V388C1141.64 396 1145.24 400 1152.44 400H1206.04V448H1122.04C1112.98 448 1105.51 445.067 1099.64 439.2C1094.04 433.333 1091.24 425.867 1091.24 416.8V297.6H1032.44V249.6ZM1477.37 351.2C1477.37 367.733 1474.57 382.4 1468.97 395.2C1463.37 407.733 1455.77 418.4 1446.17 427.2C1436.57 435.733 1425.5 442.267 1412.97 446.8C1400.7 451.333 1387.77 453.6 1374.17 453.6C1360.57 453.6 1347.5 451.333 1334.97 446.8C1322.7 442.267 1311.77 435.733 1302.17 427.2C1292.57 418.4 1284.97 407.733 1279.37 395.2C1273.77 382.4 1270.97 367.733 1270.97 351.2V346.4C1270.97 330.133 1273.77 315.733 1279.37 303.2C1284.97 290.4 1292.57 279.6 1302.17 270.8C1311.77 262 1322.7 255.333 1334.97 250.8C1347.5 246.267 1360.57 244 1374.17 244C1387.77 244 1400.7 246.267 1412.97 250.8C1425.5 255.333 1436.57 262 1446.17 270.8C1455.77 279.6 1463.37 290.4 1468.97 303.2C1474.57 315.733 1477.37 330.133 1477.37 346.4V351.2ZM1374.17 405.6C1381.37 405.6 1388.17 404.4 1394.57 402C1400.97 399.6 1406.57 396.133 1411.37 391.6C1416.17 387.067 1419.9 381.6 1422.57 375.2C1425.5 368.533 1426.97 361.067 1426.97 352.8V344.8C1426.97 336.533 1425.5 329.2 1422.57 322.8C1419.9 316.133 1416.17 310.533 1411.37 306C1406.57 301.467 1400.97 298 1394.57 295.6C1388.17 293.2 1381.37 292 1374.17 292C1366.97 292 1360.17 293.2 1353.77 295.6C1347.37 298 1341.77 301.467 1336.97 306C1332.17 310.533 1328.3 316.133 1325.37 322.8C1322.7 329.2 1321.37 336.533 1321.37 344.8V352.8C1321.37 361.067 1322.7 368.533 1325.37 375.2C1328.3 381.6 1332.17 387.067 1336.97 391.6C1341.77 396.133 1347.37 399.6 1353.77 402C1360.17 404.4 1366.97 405.6 1374.17 405.6ZM1578.29 448H1527.89V249.6H1578.29V279.2H1585.49C1590.02 268 1597.35 259.333 1607.49 253.2C1617.62 247.067 1629.49 244 1643.09 244C1652.69 244 1661.62 245.6 1669.89 248.8C1678.42 251.733 1685.89 256.4 1692.29 262.8C1698.69 269.2 1703.62 277.333 1707.09 287.2C1710.82 297.067 1712.69 308.8 1712.69 322.4V448H1662.29V335.2C1662.29 321.067 1658.82 310 1651.89 302C1645.22 293.733 1635.49 289.6 1622.69 289.6C1607.75 289.6 1596.55 294.667 1589.09 304.8C1581.89 314.667 1578.29 328 1578.29 344.8V448Z" fill="white"/>
<defs>
<radialGradient id="paint0_radial_13_22" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(250 342) rotate(90) scale(250)">
<stop stop-color="white"/>
<stop offset="1" stop-color="#DBDBDB"/>
</radialGradient>
</defs>
</svg>

									</div>
                                    <h4 class="text-center mb-1">Sign in your account</h4>
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
                                    <div class="new-account mt-3">
                                        <p>Continue as Guest? <a class="text-primary" href="#"><Link to="/latest">Click here</Link></a></p>
                                    </div>
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

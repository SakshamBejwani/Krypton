import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
function Nav() {
    const userDetails = useSelector((state) => state.userDetails)
    console.log('getting user data at nav ', userDetails)
    return (
        <div class="nk-header nk-header-fluid is-theme">
                <div class="container-xl wide-xl">
                    <div class="nk-header-wrap">
                        <div class="nk-menu-trigger mr-sm-2 d-lg-none">
                            <a href="#" class="nk-nav-toggle nk-quick-nav-icon" data-target="headerNav"><em class="icon ni ni-menu"></em></a>
                        </div>
                        <div class="nk-header-brand">
                        <Link to="/latest">
                        <a href="#" class="logo-link">
                        <svg width="97.7" height="30" viewBox="0 0 1742 592" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                        </a>
                        </Link>
                        </div>
                        <div class="nk-header-menu" data-content="headerNav">
                            <div class="nk-header-mobile">
                                <div class="nk-header-brand">
                                    <a href="html/index.html" class="logo-link">
                                        {/* <svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="500" height="500" rx="70" fill="url(#paint0_radial_10_9)"/>
                                        <path d="M254.8 359.2H259.6L286 322.8H313.6V324L281.6 369.4V373L316.8 420.8V422H288L259.6 383.2H254.8V422H229.6V282H254.8V359.2ZM339.261 322.8H381.261V337.2H384.861C386.728 331.733 389.861 327.533 394.261 324.6C398.794 321.533 404.194 320 410.461 320C420.328 320 428.261 323.133 434.261 329.4C440.261 335.533 443.261 344.933 443.261 357.6V362L417.261 364.4V361.6C417.261 356.133 415.861 351.8 413.061 348.6C410.261 345.267 406.061 343.6 400.461 343.6C394.861 343.6 390.461 345.533 387.261 349.4C384.061 353.267 382.461 358.8 382.461 366V398H405.261V422H336.861V398H357.261V346.8H339.261V322.8Z" fill="black"/>
                                        <defs>
                                        <radialGradient id="paint0_radial_10_9" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(250 250) rotate(90) scale(250)">
                                        <stop stop-color="white"/>
                                        <stop offset="1" stop-color="#DBDBDB"/>
                                        </radialGradient>
                                        </defs>
                                        </svg> */}

                                    </a>
                                </div>
                                <div class="nk-menu-trigger mr-n2">
                                    <a href="#" class="nk-nav-toggle nk-quick-nav-icon" data-target="headerNav"><em class="icon ni ni-arrow-left"></em></a>
                                </div>
                            </div>
                            <ul class="nk-menu nk-menu-main ui-s2">
                                <li class="nk-menu-item">
                                    <span class="nk-menu-text none-decorate"><Link to="/latest">Cryptocurrencies</Link></span>
                                    
                                    
                                    
                                    
                                </li>
                                <li class="nk-menu-item">
                                    
                                        <span class="nk-menu-text "><Link to="/compare">Compare</Link></span>
                                    
                                    
                                    
                                </li>
                                <li class="nk-menu-item">
                                   
                                        <span class="nk-menu-text"><Link to="/contact">Contact</Link></span>
                                    
                                </li>
                                        
                               
                            </ul>   
                               
                        </div>
                        <div class="nk-header-tools">
                            <ul class="nk-quick-nav">
                                <li class="dropdown notification-dropdown">
                                    <a href="#" class="dropdown-toggle nk-quick-nav-icon" data-toggle="dropdown">
                                        <div class="icon-status icon-status-info"><em class="icon ni ni-bell"></em></div>
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-xl dropdown-menu-right dropdown-menu-s1">
                                        <div class="dropdown-head">
                                            <span class="sub-title nk-dropdown-title">Notifications</span>
                                            <a href="#">Mark All as Read</a>
                                        </div>
                                        <div class="dropdown-body">
                                            <div class="nk-notification">
                                                <div class="nk-notification-item dropdown-inner">
                                                    <div class="nk-notification-icon">
                                                        <em class="icon icon-circle bg-warning-dim ni ni-curve-down-right"></em>
                                                    </div>
                                                    <div class="nk-notification-content">
                                                        <div class="nk-notification-text">You have requested to <span>Widthdrawl</span></div>
                                                        <div class="nk-notification-time">2 hrs ago</div>
                                                    </div>
                                                </div>
                                                <div class="nk-notification-item dropdown-inner">
                                                    <div class="nk-notification-icon">
                                                        <em class="icon icon-circle bg-success-dim ni ni-curve-down-left"></em>
                                                    </div>
                                                    <div class="nk-notification-content">
                                                        <div class="nk-notification-text">Your <span>Deposit Order</span> is placed</div>
                                                        <div class="nk-notification-time">2 hrs ago</div>
                                                    </div>
                                                </div>
                                                <div class="nk-notification-item dropdown-inner">
                                                    <div class="nk-notification-icon">
                                                        <em class="icon icon-circle bg-warning-dim ni ni-curve-down-right"></em>
                                                    </div>
                                                    <div class="nk-notification-content">
                                                        <div class="nk-notification-text">You have requested to <span>Widthdrawl</span></div>
                                                        <div class="nk-notification-time">2 hrs ago</div>
                                                    </div>
                                                </div>
                                                <div class="nk-notification-item dropdown-inner">
                                                    <div class="nk-notification-icon">
                                                        <em class="icon icon-circle bg-success-dim ni ni-curve-down-left"></em>
                                                    </div>
                                                    <div class="nk-notification-content">
                                                        <div class="nk-notification-text">Your <span>Deposit Order</span> is placed</div>
                                                        <div class="nk-notification-time">2 hrs ago</div>
                                                    </div>
                                                </div>
                                                <div class="nk-notification-item dropdown-inner">
                                                    <div class="nk-notification-icon">
                                                        <em class="icon icon-circle bg-warning-dim ni ni-curve-down-right"></em>
                                                    </div>
                                                    <div class="nk-notification-content">
                                                        <div class="nk-notification-text">You have requested to <span>Widthdrawl</span></div>
                                                        <div class="nk-notification-time">2 hrs ago</div>
                                                    </div>
                                                </div>
                                                <div class="nk-notification-item dropdown-inner">
                                                    <div class="nk-notification-icon">
                                                        <em class="icon icon-circle bg-success-dim ni ni-curve-down-left"></em>
                                                    </div>
                                                    <div class="nk-notification-content">
                                                        <div class="nk-notification-text">Your <span>Deposit Order</span> is placed</div>
                                                        <div class="nk-notification-time">2 hrs ago</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="dropdown-foot center">
                                            <a href="#">View All</a>
                                        </div>
                                    </div>
                                </li>
                                <li class="dropdown user-dropdown order-sm-first">
                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                        <div class="user-toggle">
                                            <div class="user-avatar sm">
                                                <em class="icon ni ni-user-alt"></em>
                                            </div>
                                            <div class="user-info d-none d-xl-block">
                                                <div class="user-status">User</div>
                                                <div class="user-name dropdown-indicator">Saksham Bejwani</div>
                                            </div>
                                        </div>
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-md dropdown-menu-right dropdown-menu-s1 is-light">
                                        <div class="dropdown-inner user-card-wrap bg-lighter d-none d-md-block">
                                            <div class="user-card">
                                                <div class="user-avatar">
                                                    <span>AB</span>
                                                </div>
                                                <div class="user-info">
                                                    <span class="lead-text">Abu Bin Ishtiyak</span>
                                                    <span class="sub-text">info@softnio.com</span>
                                                </div>
                                                <div class="user-action">
                                                    <a class="btn btn-icon mr-n2" href="html/invest/profile-setting.html"><em class="icon ni ni-setting"></em></a>
                                                </div>
                                            </div>
                                        </div>
                                       
                                        <div class="dropdown-inner">
                                            <ul class="link-list">
                                                <li><a href="html/invest/profile.html"><em class="icon ni ni-user-alt"></em><span>View Profile</span></a></li>
                                                {/* <li><a href="html/invest/profile-setting.html"><em class="icon ni ni-setting-alt"></em><span>Account Setting</span></a></li>
                                                <li><a href="html/invest/profile-activity.html"><em class="icon ni ni-activity-alt"></em><span>Login Activity</span></a></li>
                                                <li><a class="dark-mode-switch" href="#"><em class="icon ni ni-moon"></em><span>Dark Mode</span></a></li> */}
                                            </ul>
                                        </div>
                                        <div class="dropdown-inner">
                                            <ul class="link-list">
                                                <li><a href="#"><em class="icon ni ni-signout"></em><span>Sign out</span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        
    )
}

export default Nav

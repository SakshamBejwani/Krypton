import React from 'react'

function Nav() {
    return (
        <div>
        <div id="preloader">
        <div class="sk-three-bounce">
            <div class="sk-child sk-bounce1"></div>
            <div class="sk-child sk-bounce2"></div>
            <div class="sk-child sk-bounce3"></div>
        </div>
    </div>
    
    <div id="main-wrapper">

        
        <div class="nav-header">
            <a href="index.html" class="brand-logo">
            <svg width="70" height="66" viewBox="0 0 70 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.952 10V0.0599995H3.248V4.344L6.888 0.0599995H9.464L5.74 4.498L9.716 10H7.084L4.284 6.01L3.248 7.074V10H0.952ZM11.154 10V0.0599995H15.634C16.1006 0.0599995 16.53 0.158 16.922 0.354C17.3233 0.540666 17.6686 0.797333 17.958 1.124C18.2473 1.44133 18.4713 1.80067 18.63 2.202C18.798 2.60333 18.882 3.00933 18.882 3.42C18.882 3.83067 18.8166 4.22267 18.686 4.596C18.5553 4.96 18.3686 5.29133 18.126 5.59C17.8833 5.87933 17.594 6.11733 17.258 6.304L19.442 10H16.908L15.004 6.794H13.45V10H11.154ZM13.45 4.792H15.55C15.7366 4.792 15.9 4.736 16.04 4.624C16.1893 4.50267 16.3106 4.33933 16.404 4.134C16.4973 3.92867 16.544 3.69067 16.544 3.42C16.544 3.14933 16.488 2.916 16.376 2.72C16.2733 2.51467 16.1426 2.356 15.984 2.244C15.8253 2.132 15.6573 2.076 15.48 2.076H13.45V4.792ZM22.226 0.0599995L24.368 4.456L26.538 0.0599995H29.044L25.502 6.612V10H23.22V6.584L19.734 0.0599995H22.226ZM30.6692 10V0.0599995H34.9112C35.3872 0.0599995 35.8212 0.158 36.2132 0.354C36.6145 0.540666 36.9599 0.797333 37.2492 1.124C37.5385 1.44133 37.7625 1.80067 37.9212 2.202C38.0799 2.60333 38.1592 3.014 38.1592 3.434C38.1592 4.00333 38.0239 4.54467 37.7532 5.058C37.4919 5.57133 37.1232 5.99133 36.6472 6.318C36.1805 6.63533 35.6252 6.794 34.9812 6.794H32.9652V10H30.6692ZM32.9652 4.792H34.8412C35.0185 4.792 35.1819 4.74067 35.3312 4.638C35.4805 4.53533 35.6019 4.38133 35.6952 4.176C35.7885 3.97067 35.8352 3.71867 35.8352 3.42C35.8352 3.112 35.7792 2.86 35.6672 2.664C35.5645 2.45867 35.4292 2.30933 35.2612 2.216C35.1025 2.12267 34.9345 2.076 34.7572 2.076H32.9652V4.792ZM47.6658 2.076H44.6418V10H42.3458V2.076H39.3078V0.0599995H47.6658V2.076ZM53.6498 10.084C52.9031 10.084 52.2264 9.944 51.6198 9.664C51.0224 9.37467 50.5044 8.992 50.0658 8.516C49.6364 8.03067 49.3051 7.48933 49.0718 6.892C48.8384 6.28533 48.7218 5.66 48.7218 5.016C48.7218 4.35333 48.8431 3.72333 49.0858 3.126C49.3378 2.52867 49.6831 1.99667 50.1218 1.53C50.5698 1.054 51.0971 0.680666 51.7038 0.409999C52.3104 0.139333 52.9731 0.00399935 53.6918 0.00399935C54.4291 0.00399935 55.0964 0.148666 55.6938 0.438C56.3004 0.717999 56.8184 1.10067 57.2478 1.586C57.6864 2.07133 58.0224 2.61733 58.2558 3.224C58.4891 3.82133 58.6058 4.43267 58.6058 5.058C58.6058 5.72067 58.4844 6.35067 58.2418 6.948C57.9991 7.54533 57.6538 8.082 57.2058 8.558C56.7578 9.02467 56.2304 9.398 55.6238 9.678C55.0264 9.94867 54.3684 10.084 53.6498 10.084ZM51.0598 5.044C51.0598 5.42667 51.1158 5.8 51.2278 6.164C51.3398 6.51867 51.5031 6.836 51.7178 7.116C51.9418 7.396 52.2171 7.62 52.5438 7.788C52.8704 7.956 53.2438 8.04 53.6638 8.04C54.1024 8.04 54.4851 7.956 54.8118 7.788C55.1384 7.61067 55.4091 7.37733 55.6238 7.088C55.8384 6.79867 55.9971 6.47667 56.0998 6.122C56.2118 5.758 56.2678 5.38933 56.2678 5.016C56.2678 4.63333 56.2118 4.26467 56.0998 3.91C55.9878 3.55533 55.8198 3.238 55.5958 2.958C55.3718 2.66867 55.0964 2.44467 54.7698 2.286C54.4431 2.12733 54.0744 2.048 53.6638 2.048C53.2251 2.048 52.8424 2.132 52.5158 2.3C52.1984 2.468 51.9278 2.69667 51.7038 2.986C51.4891 3.266 51.3258 3.588 51.2138 3.952C51.1111 4.30667 51.0598 4.67067 51.0598 5.044ZM62.9285 4.316V10H60.6325V0.0599995H62.4525L67.0585 5.912V0.0599995H69.3545V10H67.4785L62.9285 4.316Z" fill="white"/>
            </svg>

            </a>

            <div class="nav-control">
                <div class="hamburger">
                    <span class="line"></span><span class="line"></span><span class="line"></span>
                </div>
            </div>
        </div>
        
			
        <div class="header">
            <div class="header-content">
                <nav class="navbar navbar-expand">
                    <div class="collapse navbar-collapse justify-content-between">
                        <div class="header-left">
							<div class="input-group search-area right d-lg-inline-flex d-none">
								<input type="text" class="form-control" placeholder="Find something here..."/>
								<div class="input-group-append">
									<span class="input-group-text"><a href="javascript:void(0)"><i class="flaticon-381-search-2"></i></a></span>
								</div>
							</div>
                        </div>
                        <ul class="navbar-nav header-right main-notification">
							
                            <li class="nav-item dropdown header-profile">
                                <a class="nav-link" href="#" role="button" data-toggle="dropdown">
                                    <div class="header-info">
										<span>Saksham</span>
										<small>Admin</small>
									</div>
                                </a>
                                <div class="dropdown-menu dropdown-menu-right">
                                    <a href="./app-profile.html" class="dropdown-item ai-icon">
                                        <svg id="icon-user1" xmlns="http://www.w3.org/2000/svg" class="text-primary" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                        <span class="ml-2">Profile </span>
                                    </a>
                                    
                                    <a href="./page-login.html" class="dropdown-item ai-icon">
                                        <svg id="icon-logout" xmlns="http://www.w3.org/2000/svg" class="text-danger" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                                        <span class="ml-2">Logout </span>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
        
        <div class="deznav">
            <div class="deznav-scroll">
				<div class="main-profile">
					<img src="images/Untitled-1.jpg" alt=""/>
					
					<h5 class="mb-0 fs-20 text-black "><span class="font-w400">Hello,</span> Saksham</h5>
					<p class="mb-0 fs-14 font-w400">sakshambejwani@gmail.com</p>
				</div>
				<ul class="metismenu" id="menu">
                    <li><a class="has-arrow ai-icon" href="javascript:void()" aria-expanded="false">
							<i class="flaticon-144-layout"></i>
							<span class="nav-text">Dashboard</span>
						</a>
                        <ul aria-expanded=" ">
							<li><a href="index.html">Dashboard</a></li>
							<li><a href="my-wallets.html">Wallet</a></li>
							<li><a href="tranasactions.html">Transactions</a></li>
							<li><a href="coin-details.html">Coin Details</a></li>
							<li><a href="portofolio.html">Portofolio</a></li>
							<li><a href="market-capital.html">Market Capital</a></li>
						</ul>

                    </li>
                    {/* <li><a class="has-arrow ai-icon" href="javascript:void()" aria-expanded="false">
						<i class="flaticon-077-menu-1"></i>
							<span class="nav-text">Apps</span>
						</a>
                        <ul aria-expanded="false">
                            <li><a href="./app-profile.html">Profile</a></li>
							<li><a href="./post-details.html">Post Details</a></li>
                            <li><a class="has-arrow" href="javascript:void()" aria-expanded="false">Email</a>
                                <ul aria-expanded="false">
                                    <li><a href="./email-compose.html">Compose</a></li>
                                    <li><a href="./email-inbox.html">Inbox</a></li>
                                    <li><a href="./email-read.html">Read</a></li>
                                </ul>
                            </li>
                            <li><a href="./app-calender.html">Calendar</a></li>
							<li><a class="has-arrow" href="javascript:void()" aria-expanded="false">Shop</a>
                                <ul aria-expanded="false">
                                    <li><a href="./ecom-product-grid.html">Product Grid</a></li>
									<li><a href="./ecom-product-list.html">Product List</a></li>
									<li><a href="./ecom-product-detail.html">Product Details</a></li>
									<li><a href="./ecom-product-order.html">Order</a></li>
									<li><a href="./ecom-checkout.html">Checkout</a></li>
									<li><a href="./ecom-invoice.html">Invoice</a></li>
									<li><a href="./ecom-customers.html">Customers</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><a class="has-arrow ai-icon" href="javascript:void()" aria-expanded="false">
							<i class="flaticon-061-puzzle"></i>
							<span class="nav-text">Charts</span>
						</a>
                        <ul aria-expanded="false">
                            <li><a href="./chart-flot.html">Flot</a></li>
                            <li><a href="./chart-morris.html">Morris</a></li>
                            <li><a href="./chart-chartjs.html">Chartjs</a></li>
                            <li><a href="./chart-chartist.html">Chartist</a></li>
                            <li><a href="./chart-sparkline.html">Sparkline</a></li>
                            <li><a href="./chart-peity.html">Peity</a></li>
                        </ul>
                    </li>
                    <li><a class="has-arrow ai-icon" href="javascript:void()" aria-expanded="false">
							<i class="flaticon-003-diamond"></i>
							<span class="nav-text">Bootstrap</span>
						</a>
                        <ul aria-expanded="false">
                            <li><a href="./ui-accordion.html">Accordion</a></li>
                            <li><a href="./ui-alert.html">Alert</a></li>
                            <li><a href="./ui-badge.html">Badge</a></li>
                            <li><a href="./ui-button.html">Button</a></li>
                            <li><a href="./ui-modal.html">Modal</a></li>
                            <li><a href="./ui-button-group.html">Button Group</a></li>
                            <li><a href="./ui-list-group.html">List Group</a></li>
                            <li><a href="./ui-media-object.html">Media Object</a></li>
                            <li><a href="./ui-card.html">Cards</a></li>
                            <li><a href="./ui-carousel.html">Carousel</a></li>
                            <li><a href="./ui-dropdown.html">Dropdown</a></li>
                            <li><a href="./ui-popover.html">Popover</a></li>
                            <li><a href="./ui-progressbar.html">Progressbar</a></li>
                            <li><a href="./ui-tab.html">Tab</a></li>
                            <li><a href="./ui-typography.html">Typography</a></li>
                            <li><a href="./ui-pagination.html">Pagination</a></li>
                            <li><a href="./ui-grid.html">Grid</a></li>

                        </ul>
                    </li>
                    <li><a class="has-arrow ai-icon" href="javascript:void()" aria-expanded="false">
							<i class="flaticon-053-heart"></i>
							<span class="nav-text">Plugins</span>
						</a>
                        <ul aria-expanded="false">
                            <li><a href="./uc-select2.html">Select 2</a></li>
                            <li><a href="./uc-nestable.html">Nestedable</a></li>
                            <li><a href="./uc-noui-slider.html">Noui Slider</a></li>
                            <li><a href="./uc-sweetalert.html">Sweet Alert</a></li>
                            <li><a href="./uc-toastr.html">Toastr</a></li>
                            <li><a href="./map-jqvmap.html">Jqv Map</a></li>
							<li><a href="./uc-lightgallery.html">Light Gallery</a></li>
                        </ul>
                    </li>
                    <li><a href="widget-basic.html" class="ai-icon" aria-expanded="false">
							<i class="flaticon-381-settings-2"></i>
							<span class="nav-text">Widget</span>
						</a>
					</li>
                    <li><a class="has-arrow ai-icon" href="javascript:void()" aria-expanded="false">
							<i class="flaticon-044-file"></i>
							<span class="nav-text">Forms</span>
						</a>
                        <ul aria-expanded="false">
                            <li><a href="./form-element.html">Form Elements</a></li>
                            <li><a href="./form-wizard.html">Wizard</a></li>
                            <li><a href="./form-editor-summernote.html">Summernote</a></li>
                            <li><a href="form-pickers.html">Pickers</a></li>
                            <li><a href="form-validation-jquery.html">Jquery Validate</a></li>
                        </ul>
                    </li>
                    <li><a class="has-arrow ai-icon" href="javascript:void()" aria-expanded="false">
							<i class="flaticon-381-network"></i>
							<span class="nav-text">Table</span>
						</a>
                        <ul aria-expanded="false">
                            <li><a href="table-bootstrap-basic.html">Bootstrap</a></li>
                            <li><a href="table-datatable-basic.html">Datatable</a></li>
                        </ul>
                    </li>
                    <li><a class="has-arrow ai-icon" href="javascript:void()" aria-expanded="false">
							<i class="flaticon-049-copy"></i>
							<span class="nav-text">Pages</span>
						</a>
                        <ul aria-expanded="false">
                            <li><a href="./page-register.html">Register</a></li>
                            <li><a href="./page-login.html">Login</a></li>
                            <li><a class="has-arrow" href="javascript:void()" aria-expanded="false">Error</a>
                                <ul aria-expanded="false">
                                    <li><a href="./page-error-400.html">Error 400</a></li>
                                    <li><a href="./page-error-403.html">Error 403</a></li>
                                    <li><a href="./page-error-404.html">Error 404</a></li>
                                    <li><a href="./page-error-500.html">Error 500</a></li>
                                    <li><a href="./page-error-503.html">Error 503</a></li>
                                </ul>
                            </li>
                            <li><a href="./page-lock-screen.html">Lock Screen</a></li>
                        </ul>
                    </li> */}
                </ul>
				<div class="copyright">
					<p><strong>Krypton Crypto Admin Dashboard</strong> © 2021 All Rights Reserved</p>
					<p class="fs-12">Made with love by Saksham Bejwani</p>
				</div>
			</div>
        </div>
        </div>
        </div>
    )
}

export default Nav

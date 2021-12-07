import React, {useEffect} from 'react'


function Home() {
	
    return (
        <>
            
        <div class="content-body">
			<div class="container-fluid">
				<div class="form-head mb-sm-5 mb-3 d-flex flex-wrap align-items-center">
					<h2 class="font-w600 mb-2 mr-auto ">Dashboard</h2>
					<div class="weather-btn mb-2">
						<span class="mr-3 fs-22 font-w600 text-black"><i class="fa fa-cloud mr-2"></i>21</span>
						<select class="form-control style-1 default-select  mr-3 ">
							<option>Medan, IDN</option>
							<option>Jakarta, IDN</option>
							<option>Surabaya, IDN</option>
						</select>
					</div>
					<a href="javascript:void(0);" class="btn btn-secondary text-white mb-2"><i class="las la-calendar scale5 mr-3"></i>Filter Periode</a>
				</div>
				<div class="row pt-3">
					<div class="col-xl-3 col-sm-6 m-t35">
						<div class="card card-coin">
							<div class="card-body text-center">
								<svg class="mb-3 currency-icon" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
									<circle cx="40" cy="40" r="40" fill="white"/>
									<path d="M40.725 0.00669178C18.6241 -0.393325 0.406678 17.1907 0.00666126 39.275C-0.393355 61.3592 17.1907 79.5933 39.2749 79.9933C61.3592 80.3933 79.5933 62.8093 79.9933 40.7084C80.3933 18.6241 62.8092 0.390041 40.725 0.00669178ZM39.4083 72.493C21.4909 72.1597 7.17362 57.3257 7.50697 39.4083C7.82365 21.4909 22.6576 7.17365 40.575 7.49033C58.5091 7.82368 72.8096 22.6576 72.493 40.575C72.1763 58.4924 57.3257 72.8097 39.4083 72.493Z" fill="#00ADA3"/>
									<path d="M40.5283 10.8305C24.4443 10.5471 11.1271 23.3976 10.8438 39.4816C10.5438 55.549 23.3943 68.8662 39.4783 69.1662C55.5623 69.4495 68.8795 56.599 69.1628 40.5317C69.4462 24.4477 56.6123 11.1305 40.5283 10.8305ZM40.0033 19.1441L49.272 35.6798L40.8133 30.973C40.3083 30.693 39.6966 30.693 39.1916 30.973L30.7329 35.6798L40.0033 19.1441ZM40.0033 60.8509L30.7329 44.3152L39.1916 49.022C39.4433 49.162 39.7233 49.232 40.0016 49.232C40.28 49.232 40.56 49.162 40.8117 49.022L49.2703 44.3152L40.0033 60.8509ZM40.0033 45.6569L29.8296 39.9967L40.0033 34.3364L50.1754 39.9967L40.0033 45.6569Z" fill="#00ADA3"/>
								</svg>
								<h2 class="text-black mb-2 font-w600">$168,331.09</h2>
								<p class="mb-0 fs-14">
									<svg  width="29" height="22" viewBox="0 0 29 22" fill="none" xmlns="http://www.w3.org/2000/svg">
										<g filter="url(#filter0_d1)">
										<path d="M5 16C5.91797 14.9157 8.89728 11.7277 10.5 10L16.5 13L23.5 4" stroke="#2BC155" stroke-width="2" stroke-linecap="round"/>
										</g>
										<defs>
										<filter id="filter0_d1" x="-3.05176e-05" y="-6.10352e-05" width="28.5001" height="22.0001" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
										<feFlood flood-opacity="0" result="BackgroundImageFix"/>
										<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
										<feOffset dy="1"/>
										<feGaussianBlur stdDeviation="2"/>
										<feColorMatrix type="matrix" values="0 0 0 0 0.172549 0 0 0 0 0.72549 0 0 0 0 0.337255 0 0 0 0.61 0"/>
										<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
										<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
										</filter>
										</defs>
									</svg>
									<span class="text-success mr-1">45%</span>This week
								</p>	
							</div>
						</div>
					</div>
					<div class="col-xl-3 col-sm-6 m-t35">
						<div class="card card-coin">
							<div class="card-body text-center">
								<svg class="mb-3 currency-icon" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
									<circle cx="40" cy="40" r="40" fill="white"/>
									<path d="M40 0C17.9083 0 0 17.9083 0 40C0 62.0917 17.9083 80 40 80C62.0917 80 80 62.0917 80 40C80 17.9083 62.0917 0 40 0ZM40 72.5C22.0783 72.5 7.5 57.92 7.5 40C7.5 22.08 22.0783 7.5 40 7.5C57.9217 7.5 72.5 22.0783 72.5 40C72.5 57.9217 57.92 72.5 40 72.5Z" fill="#FFAB2D"/>
									<path d="M42.065 41.2983H36.8133V49.1H42.065C43.125 49.1 44.1083 48.67 44.7983 47.9483C45.52 47.2566 45.95 46.275 45.95 45.1833C45.9517 43.0483 44.2 41.2983 42.065 41.2983Z" fill="#FFAB2D"/>
									<path d="M40 10.8333C23.9167 10.8333 10.8333 23.9166 10.8333 40C10.8333 56.0833 23.9167 69.1666 40 69.1666C56.0833 69.1666 69.1667 56.0816 69.1667 40C69.1667 23.9183 56.0817 10.8333 40 10.8333ZM45.935 53.5066H42.495V58.9133H38.8867V53.5066H36.905V58.9133H33.28V53.5066H26.9067V50.1133H30.4233V29.7799H26.9067V26.3866H33.28V21.0883H36.905V26.3866H38.8867V21.0883H42.495V26.3866H45.6283C47.3783 26.3866 48.9917 27.1083 50.1433 28.26C51.295 29.4116 52.0167 31.025 52.0167 32.775C52.0167 36.2 49.3133 38.995 45.935 39.1483C49.8967 39.1483 53.0917 42.3733 53.0917 46.335C53.0917 50.2816 49.8983 53.5066 45.935 53.5066Z" fill="#FFAB2D"/>
									<path d="M44.385 36.5066C45.015 35.8766 45.3983 35.0316 45.3983 34.08C45.3983 32.1916 43.8633 30.655 41.9733 30.655H36.8133V37.52H41.9733C42.91 37.52 43.77 37.12 44.385 36.5066Z" fill="#FFAB2D"/>
								</svg>
								<h2 class="text-black mb-2 font-w600">$24,098</h2>
								<p class="mb-0 fs-13">
									<svg width="29" height="22" viewBox="0 0 29 22" fill="none" xmlns="http://www.w3.org/2000/svg">
										<g filter="url(#filter0_d2)">
										<path d="M5 16C5.91797 14.9157 8.89728 11.7277 10.5 10L16.5 13L23.5 4" stroke="#2BC155" stroke-width="2" stroke-linecap="round"/>
										</g>
										<defs>
										<filter id="filter0_d2" x="-3.05176e-05" y="-6.10352e-05" width="28.5001" height="22.0001" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
										<feFlood flood-opacity="0" result="BackgroundImageFix"/>
										<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
										<feOffset dy="1"/>
										<feGaussianBlur stdDeviation="2"/>
										<feColorMatrix type="matrix" values="0 0 0 0 0.172549 0 0 0 0 0.72549 0 0 0 0 0.337255 0 0 0 0.61 0"/>
										<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
										<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
										</filter>
										</defs>
									</svg>
									<span class="text-success mr-1">45%</span>This week
								</p>	
							</div>
						</div>
					</div>
					<div class="col-xl-3 col-sm-6 m-t35">
						<div class="card card-coin">
							<div class="card-body text-center">
								<svg class="mb-3 currency-icon" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
									<circle cx="40" cy="40" r="40" fill="white"/>
									<path d="M40.725 0.00669178C18.6241 -0.393325 0.406678 17.1907 0.00666126 39.275C-0.393355 61.3592 17.1907 79.5933 39.2749 79.9933C61.3592 80.3933 79.5933 62.8093 79.9933 40.7084C80.3933 18.6241 62.8092 0.390041 40.725 0.00669178ZM39.4083 72.493C21.4909 72.1597 7.17362 57.3257 7.50697 39.4083C7.82365 21.4909 22.6576 7.17365 40.575 7.49033C58.5091 7.82368 72.8096 22.6576 72.493 40.575C72.1763 58.4924 57.3257 72.8097 39.4083 72.493Z" fill="#374C98"/>
									<path d="M40.5283 10.8305C24.4443 10.5471 11.1271 23.3976 10.8438 39.4816C10.5438 55.549 23.3943 68.8662 39.4783 69.1662C55.5623 69.4495 68.8795 56.599 69.1628 40.5317C69.4462 24.4477 56.6123 11.1305 40.5283 10.8305ZM52.5455 56.9324H26.0111L29.2612 38.9483L25.4944 39.7317V36.6649L29.8279 35.7482L32.6447 20.2809H43.2284L40.8283 33.4481L44.5285 32.6647V35.7315L40.2616 36.6149L37.7949 50.2154H54.5122L52.5455 56.9324Z" fill="#374C98"/>
								</svg>
								<h2 class="text-black mb-2 font-w600">$667,224</h2>
								<p class="mb-0 fs-14">
									<svg width="29" height="22" viewBox="0 0 29 22" fill="none" xmlns="http://www.w3.org/2000/svg">
										<g filter="url(#filter0_d4)">
										<path d="M5 4C5.91797 5.08433 8.89728 8.27228 10.5 10L16.5 7L23.5 16" stroke="#FF2E2E" stroke-width="2" stroke-linecap="round"/>
										</g>
										<defs>
										<filter id="filter0_d4" x="-3.05176e-05" y="0" width="28.5001" height="22.0001" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
										<feFlood flood-opacity="0" result="BackgroundImageFix"/>
										<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
										<feOffset dy="1"/>
										<feGaussianBlur stdDeviation="2"/>
										<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.180392 0 0 0 0 0.180392 0 0 0 0.61 0"/>
										<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
										<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
										</filter>
										</defs>
									</svg>
									<span class="text-danger mr-1">45%</span>This week
								</p>	
							</div>
						</div>
					</div>
					<div class="col-xl-3 col-sm-6 m-t35">
						<div class="card card-coin">
							<div class="card-body text-center">
								<svg class="mb-3 currency-icon" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
									<circle cx="40" cy="40" r="40" fill="white"/>
									<path d="M40.725 0.00669178C18.6241 -0.393325 0.406708 17.1907 0.00669178 39.275C-0.393325 61.3592 17.1907 79.5933 39.275 79.9933C61.3592 80.3933 79.5933 62.8093 79.9933 40.7084C80.3933 18.6241 62.8093 0.390041 40.725 0.00669178ZM39.4083 72.493C21.4909 72.1597 7.17365 57.3257 7.507 39.4083C7.82368 21.4909 22.6576 7.17365 40.575 7.49033C58.5091 7.82368 72.8097 22.6576 72.493 40.575C72.1763 58.4924 57.3257 72.8097 39.4083 72.493Z" fill="#FF782C"/>
									<path d="M40.525 10.8238C24.441 10.5405 11.1238 23.391 10.8405 39.475C10.7455 44.5352 11.9605 49.3204 14.1639 53.5139H23.3326V24.8027C23.3326 23.0476 25.7177 22.4893 26.4928 24.0643L40 51.4171L53.5072 24.066C54.2822 22.4893 56.6674 23.0476 56.6674 24.8027V53.5139H65.8077C67.8578 49.6171 69.0779 45.2169 69.1595 40.525C69.4429 24.441 56.609 11.1238 40.525 10.8238Z" fill="#FF782C"/>
									<path d="M53.3339 55.1806V31.943L41.4934 55.919C40.9334 57.0574 39.065 57.0574 38.5049 55.919L26.6661 31.943V55.1806C26.6661 56.1007 25.9211 56.8474 24.9994 56.8474H16.2474C21.4326 64.1327 29.8629 68.9795 39.475 69.1595C49.4704 69.3362 58.3908 64.436 63.786 56.8474H55.0006C54.0789 56.8474 53.3339 56.1007 53.3339 55.1806Z" fill="#FF782C"/>
								</svg>
								<h2 class="text-black mb-2 font-w600">$667,224</h2>
								<p class="mb-0 fs-14">
									<svg width="29" height="22" viewBox="0 0 29 22" fill="none" xmlns="http://www.w3.org/2000/svg">
										<g filter="url(#filter0_d5)">
										<path d="M5 16C5.91797 14.9157 8.89728 11.7277 10.5 10L16.5 13L23.5 4" stroke="#2BC155" stroke-width="2" stroke-linecap="round"/>
										</g>
										<defs>
										<filter id="filter0_d5" x="-3.05176e-05" y="-6.10352e-05" width="28.5001" height="22.0001" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
										<feFlood flood-opacity="0" result="BackgroundImageFix"/>
										<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
										<feOffset dy="1"/>
										<feGaussianBlur stdDeviation="2"/>
										<feColorMatrix type="matrix" values="0 0 0 0 0.172549 0 0 0 0 0.72549 0 0 0 0 0.337255 0 0 0 0.61 0"/>
										<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
										<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
										</filter>
										</defs>
									</svg>
									<span class="text-success mr-1">45%</span>This week
								</p>	
							</div>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-xl-9 col-xxl-8">
						<div class="card">
							<div class="card-header border-0 flex-wrap pb-0">
								<div class="mb-3">
									<h4 class="fs-20 text-black">Market Overview</h4>
									<p class="mb-0 fs-12 text-black">Lorem ipsum dolor sit amet, consectetur</p>
								</div>
								<div class="d-flex flex-wrap mb-2">
									<div class="custom-control check-switch custom-checkbox mr-4 mb-2">
										<input type="checkbox" class="custom-control-input" id="customCheck9"/>
										<label class="custom-control-label" for="customCheck9">
											<span class="d-block  font-w500 mt-2">BTC</span>
										</label>
									</div>
									<div class="custom-control check-switch custom-checkbox mr-4 mb-2">
										<input type="checkbox" class="custom-control-input" id="customCheck91"/>
										<label class="custom-control-label" for="customCheck91">
											<span class="d-block  font-w500 mt-2">XRP</span>
										</label>
									</div>
									<div class="custom-control check-switch custom-checkbox mr-4 mb-2">
										<input type="checkbox" class="custom-control-input" id="customCheck92"/>
										<label class="custom-control-label" for="customCheck92">
											<span class="d-block font-w500 mt-2">ETH</span>
										</label>
									</div>
									<div class="custom-control check-switch custom-checkbox mr-4 mb-2">
										<input type="checkbox" class="custom-control-input" id="customCheck93"/>
										<label class="custom-control-label" for="customCheck93">
											<span class="d-block font-w500 mt-2">ZEC</span>
										</label>
									</div>
								</div>
								<select class="form-control style-1 default-select">
									<option>Weekly (2021)</option>
									<option>Daily (2021)</option>
									<option>Yearly (2021)</option>
								</select>
							</div>
							<div class="card-body pb-0">
								<div id="marketChart" class="market-line"></div>
							</div>
						</div>
					</div>
					<div class="col-xl-3 col-xxl-4">
						<div class="card">
							<div class="card-header border-0 pb-0">
								<h4 class="fs-20 text-black">Current Statistic</h4>
							</div>
							<div class="card-body pb-0">
								<div id="currentChart" class="current-chart"></div>
								<div class="chart-content">	
									<div class="d-flex justify-content-between mb-2 align-items-center">
										<div>
											<svg class="mr-2" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
												<rect width="15" height="15" rx="7.5" fill="#EB8153"/>
											</svg>
											<span class="fs-14">Income (66%)</span>
										</div>
										<div>
											<h5 class="mb-0">$167,884.21</h5>
										</div>
									</div>
									<div class="d-flex justify-content-between mb-2 align-items-center">
										<div>
											<svg class="mr-2" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
												<rect width="15" height="15" rx="7.5" fill="#71B945"/>
											</svg>

											<span class="fs-14">Income (50%)</span>
										</div>
										<div>
											<h5 class="mb-0">$56,411.33</h5>
										</div>
									</div>
									<div class="d-flex justify-content-between mb-2 align-items-center">
										<div>
											<svg class="mr-2" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
												<rect width="15" height="15" rx="7.5" fill="#4A8CDA"/>
											</svg>
											<span class="fs-14">Income (11%)</span>
										</div>
										<div>
											<h5 class="mb-0">$81,981.22</h5>
										</div>
									</div>
									<div class="d-flex justify-content-between mb-2 align-items-center">
										<div>
											<svg class="mr-2" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
												<rect width="15" height="15" rx="7.5" fill="#6647BF"/>
											</svg>
											<span class="fs-14">Income (23%)</span>
										</div>
										<div>
											<h5 class="mb-0">$12,432.51</h5>
										</div>
									</div>
								</div>	
							</div>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-xl-6 col-xxl-12">
						<div class="row">
							<div class="col-sm-6">
								<div class="card">
									<div class="card-header border-0 pb-0">
										<h4 class="mb-0 fs-20 text-black">Sell Order</h4>
										<div class="dropdown custom-dropdown mb-0 tbl-orders-style">
											<div class="btn sharp tp-btn" data-toggle="dropdown">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
													<path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
													<path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
												</svg>
											</div>
											<div class="dropdown-menu dropdown-menu-right">
												<a class="dropdown-item" href="javascript:void(0);">Details</a>
												<a class="dropdown-item text-danger" href="javascript:void(0);">Cancel</a>
											</div>
										</div>
									</div>
									<div class="card-body p-3 pb-0">
										<div class="dropdown custom-dropdown d-block tbl-orders">
											<div class="btn  d-flex align-items-center border-0 order-bg rounded " data-toggle="dropdown">
												<svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M23.4169 0.00384777C10.7089 -0.226161 0.233857 9.88466 0.00384777 22.5831C-0.226161 35.2815 9.88466 45.7661 22.5831 45.9961C35.2815 46.2261 45.7661 36.1153 45.9961 23.4073C46.2261 10.7089 36.1153 0.224273 23.4169 0.00384777ZM22.6598 41.6834C12.3573 41.4918 4.12485 32.9622 4.31652 22.6598C4.49861 12.3573 13.0281 4.12485 23.3306 4.30694C33.6427 4.49861 41.8655 13.0281 41.6834 23.3306C41.5013 33.6331 32.9622 41.8655 22.6598 41.6834Z" fill="#374C98"/>
													<path d="M23.3038 6.22751C14.0555 6.06459 6.3981 13.4536 6.23518 22.7019C6.06267 31.9406 13.4517 39.598 22.7 39.7705C31.9483 39.9334 39.6057 32.5444 39.7686 23.3057C39.9315 14.0574 32.5521 6.40002 23.3038 6.22751ZM30.2136 32.7361H14.9564L16.8252 22.3952L14.6593 22.8457V21.0823L17.151 20.5552L18.7707 11.6615H24.8563L23.4763 19.2326L25.6039 18.7822V20.5456L23.1504 21.0535L21.732 28.8738H31.3445L30.2136 32.7361Z" fill="#374C98"/>
												</svg>
												<div class="text-left ml-3">
													<span class="d-block fs-16 text-black">Litecoin</span>
												</div>
												<i class="fa fa-angle-down scale5 ml-auto"></i>
											</div>
											<div class="dropdown-menu dropdown-menu-right">
												<a class="dropdown-item" href="javascript:void(0);">Bitcoin</a>
												<a class="dropdown-item" href="javascript:void(0);">ETH coin</a>
											</div>
										</div>
										<div class="table-responsive">
											<table class="table text-center bg-info-hover tr-rounded order-tbl">
												<thead>
													<tr>
														<th class="text-left">Price</th>
														<th class="text-center">Amount</th>
														<th class="text-right">Total</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td class="text-left">82.3</td>
														<td>0.15</td>
														<td class="text-right">$134,12</td>
													</tr>
													<tr>
														<td class="text-left">83.9</td>
														<td>0.18</td>
														<td class="text-right">$237,31</td>
													</tr>
													<tr>
														<td class="text-left">84.2</td>
														<td>0.25</td>
														<td class="text-right">$252,58</td>
													</tr>
													<tr>
														<td class="text-left">86.2</td>
														<td>0.35</td>
														<td class="text-right">$126,26</td>
													</tr>
													<tr>
														<td class="text-left">91.6</td>
														<td>0.75</td>
														<td class="text-right">$46,92</td>
													</tr>
													<tr>
														<td class="text-left">92.6</td>
														<td>0.21</td>
														<td class="text-right">$123,27</td>
													</tr>
													<tr>
														<td class="text-left">93.9</td>
														<td>0.55</td>
														<td class="text-right">$212,56</td>
													</tr>
													<tr>
														<td class="text-left">94.2</td>
														<td>0.18</td>
														<td class="text-right">$129,26</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
									<div class="card-footer border-0 p-0 caret">
										<a href="coin-details.html" class="btn-link"><i class="fa fa-caret-down" aria-hidden="true"></i></a>
									</div>
								</div>	
							</div>
							<div class="col-sm-6">
								<div class="card">
									<div class="card-header border-0 pb-0">
										<h4 class="mb-0 text-black fs-20">Buy Order</h4>
										<div class="dropdown custom-dropdown mb-0 tbl-orders-style">
											<div class="btn sharp tp-btn" data-toggle="dropdown">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
													<path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
													<path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
												</svg>
											</div>
											<div class="dropdown-menu dropdown-menu-right">
												<a class="dropdown-item" href="javascript:void(0);">Details</a>
												<a class="dropdown-item text-danger" href="javascript:void(0);">Cancel</a>
											</div>
										</div>
									</div>
									<div class="card-body p-3 pb-0">
										<div class="dropdown custom-dropdown d-block tbl-orders">
											<div class="btn  d-flex align-items-center order-bg border-0 rounded" data-toggle="dropdown">
												<svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M23.4169 0.00384778C10.7089 -0.226162 0.233857 9.88467 0.00384778 22.5831C-0.226162 35.2816 9.88467 45.7662 22.5831 45.9962C35.2816 46.2262 45.7662 36.1153 45.9962 23.4073C46.2262 10.7089 36.1153 0.224274 23.4169 0.00384778ZM22.6598 41.6835C12.3573 41.4918 4.12485 32.9623 4.31653 22.6598C4.49862 12.3573 13.0281 4.12485 23.3306 4.30694C33.6427 4.49862 41.8656 13.0281 41.6835 23.3306C41.5014 33.6332 32.9623 41.8656 22.6598 41.6835Z" fill="#FF782C"/>
													<path d="M23.3019 6.22369C14.0536 6.06076 6.3962 13.4498 6.23327 22.6981C6.17864 25.6077 6.8773 28.3592 8.14427 30.7705H13.4163V14.2616C13.4163 13.2524 14.7877 12.9313 15.2334 13.837L23 29.5649L30.7667 13.838C31.2123 12.9313 32.5837 13.2524 32.5837 14.2616V30.7705H37.8395C39.0182 28.5298 39.7198 25.9997 39.7667 23.3019C39.9297 14.0536 32.5502 6.3962 23.3019 6.22369Z" fill="#FF782C"/>
													<path d="M30.667 31.7289V18.3672L23.8587 32.1534C23.5367 32.808 22.4624 32.808 22.1403 32.1534L15.333 18.3672V31.7289C15.333 32.2579 14.9046 32.6872 14.3746 32.6872H9.34223C12.3237 36.8763 17.1712 39.6632 22.6981 39.7667C28.4455 39.8683 33.5747 37.0507 36.6769 32.6872H31.6254C31.0954 32.6872 30.667 32.2579 30.667 31.7289Z" fill="#FF782C"/>
												</svg>
												<div class="text-left ml-3">
													<span class="d-block fs-16 text-black">Monero</span>
												</div>
												<i class="fa fa-angle-down scale5 ml-auto"></i>
											</div>
											<div class="dropdown-menu dropdown-menu-right">
												<a class="dropdown-item" href="javascript:void(0);">Dash coin</a>
												<a class="dropdown-item" href="javascript:void(0);">ETH coin</a>
											</div>
										</div>
										<div class="table-responsive">
											<table class="table text-center bg-warning-hover tr-rounded order-tbl">
												<thead>
													<tr>
														<th class="text-left">Price</th>
														<th class="text-center">Amount</th>
														<th class="text-right">Total</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td class="text-left">82.3</td>
														<td>0.15</td>
														<td class="text-right">$134,12</td>
													</tr>
													<tr>
														<td class="text-left">83.9</td>
														<td>0.18</td>
														<td class="text-right">$237,31</td>
													</tr>
													<tr>
														<td class="text-left">84.2</td>
														<td>0.25</td>
														<td class="text-right">$252,58</td>
													</tr>
													<tr>
														<td class="text-left">86.2</td>
														<td>0.35</td>
														<td class="text-right">$126,26</td>
													</tr>
													<tr>
														<td class="text-left">91.6</td>
														<td>0.75</td>
														<td class="text-right">$46,92</td>
													</tr>
													<tr>
														<td class="text-left">92.6</td>
														<td>0.21</td>
														<td class="text-right">$123,27</td>
													</tr>
													<tr>
														<td class="text-left">93.9</td>
														<td>0.55</td>
														<td class="text-right">$212,56</td>
													</tr>
													<tr>
														<td class="text-left">94.2</td>
														<td>0.18</td>
														<td class="text-right">$129,26</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
									<div class="card-footer border-0 p-0 caret">
										<a href="coin-details.html" class="btn-link"><i class="fa fa-caret-down" aria-hidden="true"></i></a>
									</div>
								</div>
							</div>
							
						</div>
					</div>
					<div class="col-xl-6 col-xxl-12">
						<div class="row">
							<div class="col-sm-6">
								<div class="card-bx stacked card">
									<img src="images/card/card1.jpg" alt=""/>
									<div class="card-info">
										<p class="mb-1 text-white fs-14">Main Balance</p>
										<div class="d-flex justify-content-between">
											<h2 class="num-text text-white mb-5 font-w600">$673,412.66</h2>
											<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M19.2744 18.8013H16.0334V23.616H19.2744C19.9286 23.616 20.5354 23.3506 20.9613 22.9053C21.4066 22.4784 21.672 21.8726 21.672 21.1989C21.673 19.8813 20.592 18.8013 19.2744 18.8013Z" fill="white"/>
												<path d="M18 0C8.07429 0 0 8.07429 0 18C0 27.9257 8.07429 36 18 36C27.9257 36 36 27.9247 36 18C36 8.07531 27.9247 0 18 0ZM21.6627 26.3355H19.5398V29.6722H17.3129V26.3355H16.0899V29.6722H13.8528V26.3355H9.91954V24.2414H12.0898V11.6928H9.91954V9.59863H13.8528V6.3288H16.0899V9.59863H17.3129V6.3288H19.5398V9.59863H21.4735C22.5535 9.59863 23.5491 10.044 24.2599 10.7547C24.9706 11.4655 25.416 12.4611 25.416 13.5411C25.416 15.6549 23.7477 17.3798 21.6627 17.4744C24.1077 17.4744 26.0794 19.4647 26.0794 21.9096C26.0794 24.3453 24.1087 26.3355 21.6627 26.3355Z" fill="white"/>
												<path d="M20.7062 15.8441C21.095 15.4553 21.3316 14.9338 21.3316 14.3465C21.3316 13.1812 20.3842 12.2328 19.2178 12.2328H16.0334V16.4695H19.2178C19.7959 16.4695 20.3266 16.2226 20.7062 15.8441Z" fill="white"/>
											</svg>
										</div>
										<div class="d-flex">
											<div class="mr-4 text-white">
												<p class="fs-12 mb-1 op6">VALID THRU</p>
												<span>08/21</span>
											</div>
											<div class="text-white">
												<p class="fs-12 mb-1 op6">CARD HOLDER</p>
												<span>Marquezz Silalahi</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-sm-6">
								<div class="card-bx stacked card">
									<img src="images/card/card2.jpg" alt=""/>
									<div class="card-info">
										<p class="fs-14 mb-1 text-white">Main Balance</p>
										<div class="d-flex justify-content-between">
											<h2 class="num-text text-white mb-5 font-w600">$673,412.66</h2>
											<svg width="55" height="34" viewBox="0 0 55 34" fill="none" xmlns="http://www.w3.org/2000/svg">
												<circle cx="38.0091" cy="16.7788" r="16.7788" fill="white" fill-opacity="0.67"/>
												<circle cx="17.4636" cy="16.7788" r="16.7788" fill="white" fill-opacity="0.67"/>
											</svg>
										</div>
										<div class="d-flex">
											<div class="mr-4 text-white">
												<p class="fs-12 mb-1 op6">VALID THRU</p>
												<span>08/21</span>
											</div>
											<div class="text-white">
												<p class="fs-12 mb-1 op6">CARD HOLDER</p>
												<span>Marquezz Silalahi</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-sm-6">
								<div class="card-bx stacked card">
									<img src="images/card/card3.jpg" alt=""/>
									<div class="card-info">
										<p class="mb-1 text-white fs-14">Main Balance</p>
										<div class="d-flex justify-content-between">
											<h2 class="num-text text-white mb-5 font-w600">$673,412.66</h2>
											<svg width="55" height="34" viewBox="0 0 55 34" fill="none" xmlns="http://www.w3.org/2000/svg">
												<circle cx="38.0091" cy="16.7788" r="16.7788" fill="white" fill-opacity="0.67"/>
												<circle cx="17.4636" cy="16.7788" r="16.7788" fill="white" fill-opacity="0.67"/>
											</svg>
										</div>
										<div class="d-flex">
											<div class="mr-4 text-white">
												<p class="fs-12 mb-1 op6">VALID THRU</p>
												<span>08/21</span>
											</div>
											<div class="text-white">
												<p class="fs-12 mb-1 op6">CARD HOLDER</p>
												<span>Marquezz Silalahi</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-sm-6">
								<div class="card-bx stacked card">
									<img src="images/card/card4.jpg" alt=""/>
									<div class="card-info">
										<p class="mb-1 text-white fs-14">Main Balance</p>
										<div class="d-flex justify-content-between">
											<h2 class="num-text text-white mb-5 font-w600">$673,412.66</h2>
											<svg width="55" height="34" viewBox="0 0 55 34" fill="none" xmlns="http://www.w3.org/2000/svg">
												<circle cx="38.0091" cy="16.7788" r="16.7788" fill="white" fill-opacity="0.67"/>
												<circle cx="17.4636" cy="16.7788" r="16.7788" fill="white" fill-opacity="0.67"/>
											</svg>
										</div>
										<div class="d-flex">
											<div class="mr-4 text-white">
												<p class="fs-12 mb-1 op6">VALID THRU</p>
												<span>08/21</span>
											</div>
											<div class="text-white">
												<p class="fs-12 mb-1 op6">CARD HOLDER</p>
												<span>Marquezz Silalahi</span>
											</div>
										</div>
										
										
										
									</div>
								</div>
							</div>
							
							
						</div>
					</div>
				</div>
			</div>
		</div>
        </>
    )
}
export default Home

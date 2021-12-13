import React, {useEffect, useState} from 'react'
import { getCoinMetaData } from '../../api/coins'
import Skeleton from '@mui/material/Skeleton'
import  Header  from '../../components/Header/Nav';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';

function About(props) {
	const [metaData, setMetaData] = useState([]);
    const [loading, setLoading] = useState(true)
    var symbolCrypto = props.match.params.crypto;
    useEffect(() => {
        getCoinMetaData(symbolCrypto, getCoinMetaDataCallback)
		console.log(symbolCrypto)
    }, [])
	
	const getCoinMetaDataCallback =(response)=>{
        if(response.status === 200){
            response.json().then(data=>{
                
                console.log('Getting Meta data Of Coin', data.data)
                setMetaData(data.data)
                console.log('Meta data', metaData)
                // console.log(Object.entries(metaData[0]))
                setLoading(false)
            })       
        }
    }

    return (
        <>
        <Header/>
        <div class="content-body">
			<div class="container-fluid ">
				<div class=" form-head d-flex flex-wrap mb-4 align-items-start justify-content-between">
					<h2 class="text-black mr-auto font-w600 mb-2">Coin Details</h2>
                    <div class="ml-3 font-orange">
                    {loading? (
                                <>
                                    
                                     <Skeleton variant="rectangular"  animation="wave"  className="w-10" height={40} />
                                     
                                                
                                </>  
                            ):(
						<h4 class="font-w600 text-black pr-5 title">5000.00 USD</h4>
                            )}
					</div>
				</div>
                <div class="row">
							<div class="col-xl-12 col-xxl-12  ">
								<div class="card ">
									
                                    {loading? (
                                                <>
                                               
                                                <Skeleton variant="rectangular"  animation="wave"  className="w-5 my-4" height={100} />
                                                
                                                
                                              </>  
                                            ):(
                                                <>
                                                <div class="card-header pb-0 border-0">
                                                    <h4 class="mb-0 text-black fs-20">About</h4>
                                                </div>
                                                    <div class="d-flex align-items-start justify-content-around mb-3 about-coin">
                                                        <div>
                                                            <img src="" alt="coin-logo"/>
                                                        </div>

                                                        <div class="ml-3 card-body flex-d">
                                                            <span class="font-w600">About Goes Here</span>

                                                        </div>	
										            </div>
                                        </>
                                            )}
									</div>
									
								</div>
                                    
                                </div>
                            <div class="row px-4 widget">
                            <TradingViewWidget
                                symbol={symbolCrypto+"USD"}
                                theme={Themes.DARK}
                                locale="en"
                            />
                            </div>
                        
                    
            </div>
        </div>
                        
        </>
    )
}

export default About

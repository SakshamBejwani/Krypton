import React, {useEffect, useState} from 'react'
import { getCoinMetaData } from '../../api/coins'
import Skeleton from '@mui/material/Skeleton'
import  Header  from '../../components/Header/Nav';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import { getNewsByCrypto } from '../../api/news'
import NewsRow from './NewsRow'

function About(props) {
	const [metaData, setMetaData] = useState([]);
    const [news, setNews] = useState([])
    const [loading, setLoading] = useState(true)
    var symbolCrypto = props.match.params.crypto;
    useEffect(() => {
        getNewsByCrypto(symbolCrypto, getNewsByCryptoCallback)
        getCoinMetaData(symbolCrypto, getCoinMetaDataCallback)
		console.log(symbolCrypto)
    }, [])
	
    const getNewsByCryptoCallback =(response)=>{
        if(response.status === 200){
            response.json().then(data=>{
                console.log('Getting News Of Coin', data.value)
                setNews(data.value)
            })       
        }
    }

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
        <div class="nk-content nk-content-fluid">
                <div class="container-xl wide-xl">
                    <div class="nk-block-head-content">
                    News
                        <div class="row">
                            {loading? (
                                                <>
                                                <td colspan="12">
                                                <Skeleton variant="rectangular"  animation="wave"  className="w-10" height={40} />
                                                </td>
                                                
                                              </>  
                                    ):(
                                        <>
                                       
                                        {news.map((item, index)=>
                                            <NewsRow row={item} index={index}
                                            />
                                        )} 
                                        

                                        {news =="" &&
                                        <td colspan="12" className="text-center">
                                            No Coins Found!
                                        </td>
                                        }
                                    </>
                                            )}
                                        </div>
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
                            About
								<div class="card ">
									
                                    {loading? (
                                                <>
                                               
                                                <Skeleton variant="rectangular"  animation="wave"  className="w-5 my-4" height={100} />
                                                
                                                
                                              </>  
                                            ):(
                                                <>
                                                
                                                <div class="card-header pb-0 border-0">
                                                    
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
                            <div class="row p-4 widget">
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

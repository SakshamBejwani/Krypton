import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import { getSpecificCoinMetaData } from '../../api/coins'
import HomeRow from '../Home/HomeRow'
import Skeleton from '@mui/material/Skeleton'
import Header from '../../components/Header/Nav'
import { getNewsByCrypto } from '../../api/news'
import HomeNewsRow from './HomeNewsRow'
import {getGlobalStats} from '../../api/coins'
import Footer from '../../components/Footer/Footer'
function Home() {
	const [coinData, setCoinData] = useState([])
    const [loading, setLoading] = useState(true)
    const [rows, setRows] = useState(20)
    const [news, setNews] = useState([])
    const [globalData, setGlobalData] = useState([])
    const [globalMetricsLoading, setGlobalMetricsLoading] = useState(true)

	useEffect(() => {
        getSpecificCoinMetaData(getSpecificCoinMetaDataCallback)
        getNewsByCrypto('crypto', getNewsByCryptoCallback)
        getGlobalStats(getGlobalStatsCallback)
    }, [rows])
    const getGlobalStatsCallback =(response)=>{
        if(response.status === 200){
            response.json().then(data=>{
                console.log(data.data)
                setGlobalData(data.data)
                console.log('globaldata', globalData)
                setGlobalMetricsLoading(false)
            })       
        }
    }
    const getNewsByCryptoCallback =(response)=>{
        if(response.status === 200){
            response.json().then(data=>{
                // console.log('Getting News Of Coin', data.value)
                setNews(data.value)
                setLoading(false)
            })       
        }
    }
	const getSpecificCoinMetaDataCallback =(response)=>{
        if(response.status === 200){
            response.json().then(data=>{
                console.log('Getting specific data Of Coin', data.data)
                setCoinData(data.data.slice(0, rows))
                console.log("Specific Coin Data in State", coinData)
                setLoading(false)
            })       
        }
    }
    return (
        <>
        <Header />
        <div class="nk-content nk-content-fluid">
                <div class="container-xl wide-xl">
                    <div class="nk-block-head-content">
                    <div class="row">
                           <div class="row px-2 d-flex justify-content-between">
                            {loading? (
                                                <>
                                                <td colspan="12">
                                                <Skeleton variant="text"className="w-10" height={200} />
                                                </td>
                                                
                                              </>  
                                    ):(
                                        <>
                                       
                                        {news.map((item, index)=>
                                            <HomeNewsRow row={item} index={index}
                                            />
                                        )} 
                                        

                                        {news =="" &&
                                        <td colspan="12" className="text-center">
                                            No News Found!
                                        </td>
                                        }
                                    </>
                                    )}
                                    </div>       
                         </div>
                        <h3 class=" page-title mt-2">Today's Cryptocurrency Prices by Krypton</h3>
                        {globalMetricsLoading? (
                            <>
                                          
                            </>  
                        ):(
                        <div class="text-soft">
                            <p>The global crypto market cap is <strong class="none-decorate">${globalData.quote.USD.total_market_cap},</strong> a {parseFloat(globalData.quote.USD.total_market_cap_yesterday_percentage_change).toFixed(2)}%  over the last day</p>
                        </div>
                        )}
                        
				<div class="row mt-1">
                    <div class="col-lg-12">
                        <div class="row pb-2  d-flex justify-content-end align-items-center">
                        <div class="dropdown pr-2 d-flex align-items-center">
                            <a href="#" class="btn btn-round btn-secondary ml-2 " data-toggle="dropdown"><span>{rows}</span><em class="icon ni ni-chevron-down"></em></a>
                            <div class="dropdown-menu dropdown-menu-right dropdown-menu-sm mt-1">
                                <ul class="link-list-plain">
                                    <li><a href='#' onClick={(e)=>setRows(20)}>20</a></li>
                                    <li><a href='#' onClick={(e)=>setRows(50)}>50</a></li>
                                    <li><a href='#' onClick={(e)=>setRows(100)}>100</a></li>
                                    
                                </ul>
                            </div>
                        </div>
                        </div>
                                                
                                <div class="row">
							        <table class=" col table  table-borderless">
                                        <thead>
                                        {loading? (
                                                <>
                                                <td colspan="12">
                                                <Skeleton variant="rectangular"  animation="wave"  className="w-10" height={40} />
                                                </td>
                                                
                                              </>  
                                            ):(
                                            <tr class="tb-odr-item" >
                                                <th className="text-center"><strong>#</strong></th>
                                                <th className="text-center"><strong>Name</strong></th>
                                                <th className="text-center"><strong>Symbol</strong></th>
                                                <th className="text-center"><strong>Price</strong></th>
                                                <th className="text-center"><strong>24%</strong></th>
                                                <th className="text-center"><strong>7d%</strong></th>
                                                <th className="text-center"><strong>Market Cap</strong></th>
                                                <th className="text-center"><strong>Volume</strong></th>
                                                <th></th>
                                                
                                            </tr>
                                            )}
                                        </thead>
                                        <tbody>
                                            {loading? (
                                                <>
                                                <td colspan="12">
                                                <Skeleton variant="rectangular"  animation="wave"  className="w-10" height={40} />
                                                </td>
                                                
                                              </>  
                                            ):(
                                        <>
                                        {coinData.map((item, index)=>
                                            <HomeRow row={item} index={index}
                                            />
                                        )} 

                                        {coinData =="" &&
                                        <td colspan="12" className="text-center">
                                            No Coins Found!
                                        </td>
                                        }
                                    </>
                                            )}
                                        


										</tbody>
									</table>
								</div>
							
						
					</div>
				</div>
			
				
			
			
		</div>
        </div>
        </div>
        
        <Footer/>
        </>
    )
}
export default Home

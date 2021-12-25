import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import { getSpecificCoinMetaData } from '../../api/coins'
import HomeRow from '../Home/HomeRow'
import Skeleton from '@mui/material/Skeleton'
import Header from '../../components/Header/Nav'

function Home() {
	const [coinData, setCoinData] = useState([])
    const [loading, setLoading] = useState(true)
	useEffect(() => {
        getSpecificCoinMetaData(getSpecificCoinMetaDataCallback)
        
    }, [])
	

	const getSpecificCoinMetaDataCallback =(response)=>{
        if(response.status === 200){
            response.json().then(data=>{
                console.log('Getting specific data Of Coin', data.data)
                setCoinData(data.data.slice(0, 50))
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
                        <h3 class="nk-block-title page-title">Crypto Markets</h3>
                        <div class="nk-block-des text-soft">
                            <p>Worldwide</p>
                        </div>
				<div class="row pt-5">
                    <div class="col-lg-12">
                       
                                <div class="card card-bordered card-preview">
							        <table class="table table-orders">
                                        <thead class="tb-odr-head">
                                        {loading? (
                                                <>
                                                <td colspan="12">
                                                <Skeleton variant="rectangular"  animation="wave"  className="w-10" height={40} />
                                                </td>
                                                
                                              </>  
                                            ):(
                                            <tr class="py-5 tb-odr-item" >
                                                <th className="text-center"><strong>#</strong></th>
                                                <th className="px-5"><strong>Name</strong></th>
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
        
        
        </>
    )
}
export default Home

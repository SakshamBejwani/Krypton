import React, {useEffect, useState} from 'react'
import { getCoinMetaData } from '../../api/coins'
import Skeleton from '@mui/material/Skeleton'
import  Header  from '../../components/Header/Nav';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import { getNewsByCrypto } from '../../api/news'
import NewsRow from './NewsRow'
import { ControlOutlined } from '@ant-design/icons/lib/icons';

function About(props) {

    const metaData1 = []
	const [metaData, setMetaData] = useState([]);
    const [news, setNews] = useState([])
    const [coinLoading, setCoinLoading] = useState(true)
    const [loading, setLoading] = useState(true)
    const [tags, setTags] = useState([])
    const [contract, setContract] = useState([])
    const symbolCrypto = props.match.params.crypto;
    useEffect(() => {
        getNewsByCrypto(symbolCrypto, getNewsByCryptoCallback)
        getCoinMetaData(symbolCrypto, getCoinMetaDataCallback)
		// console.log(symbolCrypto)
    }, [])
	
    const getNewsByCryptoCallback =(response)=>{
        if(response.status === 200){
            response.json().then(data=>{
                // console.log('Getting News Of Coin', data.value)
                setNews(data.value)
                setLoading(false)
            })       
        }
    }

	const getCoinMetaDataCallback =(response)=>{
        
        if(response.status === 200){
            response.json().then(data=>{
                metaData1.push(data.data)
                setMetaData(metaData1[0][symbolCrypto])
                // console.log('Getting Meta data Of Coin', data.data)
                // console.log('Meta data', metaData)
                setTags(metaData.tags)
                setContract(metaData.contract_address)
                console.log('contract', metaData.contract_address)
                setCoinLoading(false)
                console.log('tags',metaData.tags)
                console.log(localStorage.getItem('cryptoPrice'))
            })       
        }
    }
	
    return (
        <>
        <Header/>
        <div class="nk-content nk-content-fluid">
                <div class="container-xl wide-xl">
                    <div class="nk-block-head-content">
                    <div class="ml-3 font-orange">
                    </div>
				</div>
                <div class="container-fluid">
                <div class="row pt-3 pb-5 px-2 ">
							<div class="col-xl-12 col-xxl-12  ">
                            
							 {coinLoading? (
                                         <>
                                            <Skeleton variant="rectangular"  animation="wave"  className="w-5 my-4" height={200} />
                                          </>  
                                            ):(
                                                <>
                                                <div class="mw-100">
                                                <div class="row pt-3 ">
                                                    <div class="col col-lg-4 col-md-5 col-sm-12">
                                                        <div class="row d-flex align-items-center">
                                                            <div class="w-max-90px">
                                                                 <img src={metaData.logo} alt="coin logo"/>
                                                            </div>
                                                            <h3 class=" ml-2">{metaData.name}</h3>
                                                            <div class="h-100">
                                                            <span class="badge badge-light ml-2">{metaData.symbol}</span>
                                                            </div>
                                                        </div>
                                                        <div class="row mt-4 mb-2">
                                                            <div>
                                                                <span class="badge badge-light">Rank #{sessionStorage.getItem('rank')}</span>
                                                            </div>
                                                            <div>
                                                                <span class="badge badge-light ml-2">{metaData.category}</span>
                                                            </div>
                                                            
                                                        </div>
                                                        
                                                        <div class="row mt-1 d-flex flex-column justify-contents-center">
                                                        <p>Tags:</p>
                                                        <div>
                                                        {(coinLoading) ? (
                                                            <></>
                                                        ):(
                                                           <>
                                                            {(metaData.tags.slice(0,4)).map((item, index)=>
                                                                <span class="badge badge-light mr-2 mb-1">{item}</span>
                                                                
                                                            )} 
                                                            </>
                                                        )}
                                                        <span class="badge badge-pill badge-primary"  data-toggle="modal" data-target="#tagsModal">View All</span>
                                                         
                                                        </div>
                                                          
                                                            
                                                        </div>
                                                    </div>
                                                    <div class="col col-lg-8 col-md-7 col-sm-12">
                                                    <div class="row">
                                                        {metaData.name} Price ({metaData.symbol})
                                                    </div>
                                                    <div class="row mt-1 d-flex align-items-center justify-content-start">
                                                        <h3 class="mt-1">$  {parseFloat(sessionStorage.getItem('cryptoPrice')).toFixed(4)}</h3>
                                                        {((sessionStorage.getItem('percentChange'))>0) ? (
                                                            <>
                                                                <span class="badge badge-sm mx-2  badge-success"><h5>+{parseFloat(sessionStorage.getItem('percentChange')).toFixed(2)}%</h5></span>
                                                            </>
                                                        ):(
                                                           <>
                                                            <span class="badge badge-sm mx-2 badge-danger"><h5>{parseFloat(sessionStorage.getItem('percentChange')).toFixed(2)}%</h5></span>
                                                            </>
                                                        )}
                                                        
                                                        
                                                        
                                                    </div>
                                                    <hr class="seperator"/>
                                                    <div class="row d-flex align-items-start">
                                                        
                                                        <div class="col card rounded bg-alert  py-4 mx-1 d-flex flex-column justify-content-center">
                                                            <div class="row px-3">
                                                                Market Cap
                                                            </div>
                                                            <div class="row px-3 ">
                                                                <h6>878321783217</h6>
                                                            </div>
                                                        </div>
                                                        <div class="col card rounded bg-alert  py-4 mx-1 d-flex flex-column justify-content-center">
                                                            <div class="row px-3">
                                                                Market Cap1
                                                            </div>
                                                            <div class="row px-3 ">
                                                                <h6>878321783217</h6>
                                                            </div>
                                                        </div>
                                                        <div class="col card rounded bg-alert  py-4 mx-1 d-flex flex-column justify-content-center">
                                                            <div class="row px-3">
                                                                Market Cap
                                                            </div>
                                                            <div class="row px-3 ">
                                                                <h6>878321783217</h6>
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                    </div>
                                                    </div> 
                                                </div>
                                                
                                        </>
                                            )}
									
									
								</div>
                                </div>
                        </div>
                    
                    <div class="row px-1 py-1">
                        
                        <div class="col h-500px col-lg-8 col-md-12 col-sm-12 col-xs-12 py-1">
                            <TradingViewWidget
                                    symbol={symbolCrypto+"USD"}
                                    theme={Themes.DARK}
                                    locale="en"
                                    autosize="true"
                                    // height= ""
                                    // width= ""
                                />
                        </div>
                        <div class="col card p-3">
                            <div class="row px-4 mt-2">
                                <h4>{symbolCrypto} Price Statistics</h4>
                            </div>
                            
                        <div class="row px-4 mt-5">ID: 
                            <h5 class="pl-5">{metaData.id}</h5>
                        </div>
                        <hr class="px-3"/>
                        <div class="row px-4 mt-3">Circulating Volume: 
                            <h5 class="pl-3">73847</h5>
                        </div>
                        <hr class="px-3"/>
                        <div class="row px-4 mt-3">Market Cap: 
                            <h5 class="pl-3">73847</h5>
                        </div>
                        <hr class="px-3"/>
                        <div class="row  px-4 mt-3">Market Rank: 
                            <h5 class="pl-3">73847</h5>
                        </div>
                        <hr class="px-3"/>
                        

                        </div>
                            </div>
                            <div class="row">
                                <div class="col py-4 px-2">
                            <div id="accordion-1" class="accordion accordion-s2">
                                <div class="accordion-item px-3">
                                    <a href="#" class="accordion-head" data-toggle="collapse" data-target="#accordion-item-1-1">
                                        <h6 class="title py-2 px-2">About {metaData.name}</h6>
                                        <span class="accordion-icon"></span>
                                    </a>
                                    <div class="accordion-body collapse show" id="accordion-item-1-1" data-parent="#accordion-1">
                                        {coinLoading? (
                                         <>
                                            <Skeleton variant="rectangular"  animation="wave"  className="w-5 my-4" height={20} />
                                          </>  
                                            ):(<>
                                        <div class="accordion-inner px-2">
                                            <strong>{metaData.description}</strong>
                                        </div>
                                        <div class="accordion-inner px-2">
                                            <p class="text-primary"><strong>Date Added: </strong>{metaData.date_added.substring(0,10)}</p>
                                        </div>
                                            </>)}
                                    </div>
                                </div>
                            </div>
                            </div>
                            </div>
                            {/* <div class="row px-2">
                                <div class="row px-2 mb-1">
                                    <h6>Markets</h6>
                                </div>
                            <table class="table">
                                <thead class="thead-light">
                                    <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                </tbody>
                            </table>
                            <div class="row d-flex align-items-center justify-content-center w-100 py-2">
                                <button class="btn btn-dark">See All Markets</button>
                            </div>
                            </div> */}
                            <div class="row">
                            <span class="px-2">Latest {symbolCrypto} News</span>
                            <div class="row px-2  my-2 d-flex justify-content-between">
                            {loading? (
                                                <>
                                                <td colspan="12">
                                                <Skeleton variant="rectangular"  animation="wave"  className="w-10" height={100} />
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
                                            No News Found!
                                        </td>
                                        }
                                    </>
                                            )}
                         </div>
                         </div>
                         </div>
            </div>
        
        
        <div class="modal fade" tabindex="-1" id="tagsModal">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <a href="#" class="close" data-dismiss="modal" aria-label="Close">
                        <em class="icon ni ni-cross"></em>
                    </a>
                    <div class="modal-header">
                        <h5 class="modal-title">{metaData.name} Tags</h5>
                    </div>
                    <div class="modal-body">
                    {(coinLoading) ? (<> </>) 
                    : (
                        <>
                        {(metaData.tags).map((item, index)=>
                            <span class="badge badge-sm badge-light mr-2 mb-1">{item}</span>
                            
                        )} 
                        </>)
                     }
                    </div>
                    
                </div>
            </div>
        </div>               
        </>
    )
}

export default About

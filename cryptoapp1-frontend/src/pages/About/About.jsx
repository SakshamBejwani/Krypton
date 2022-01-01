import React, {useEffect, useState} from 'react'
import { getCoinMetaData, getCoinQuote } from '../../api/coins'
import Skeleton from '@mui/material/Skeleton'
import  Header  from '../../components/Header/Nav';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import { getNewsByCrypto } from '../../api/news'
import NewsRow from './NewsRow'
import Footer from '../../components/Footer/Footer';
function About(props) {

    const metaData1 = []
    const quoteArr =[]
	const [metaData, setMetaData] = useState([]);
    const [news, setNews] = useState([])
    const [coinLoading, setCoinLoading] = useState(true)
    const [loading, setLoading] = useState(true)
    const [quoteLoading, setQuoteLoading] =useState(true)
    const [quote, setQuote] = useState([])
    const [tags, setTags] = useState([])
    const [contract, setContract] = useState([])
    const symbolCrypto = props.match.params.crypto;
    useEffect(() => {
        getCoinQuote(symbolCrypto, getCoinQuoteCallback)
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
    const getCoinQuoteCallback =(response)=>{
        if(response.status === 200){
            response.json().then(data=>{
                quoteArr.push(data.data)
                console.log(data.data)
                setQuote(quoteArr[0][symbolCrypto])
                setQuoteLoading(false)
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
                                                                <span class="badge badge-light">Rank #{quote.cmc_rank}</span>
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
                                                    <div class="col col-lg-8 col-md-7 col-sm-12 col-xs-12">
                                                    <div class="row d-flex justify-content-between">
                                                        <div>
                                                            {metaData.name} Price ({metaData.symbol})
                                                        </div>
                                                        <div class="text-white d-flex align-items-center 
                                                        ">         <span class="badge badge-pill badge-dark my-1"> 
                                                                 <span> Last Updated:   </span> 
                                                                 {quote.last_updated}</span>  
                                                        </div>
                                                        
                                                    </div>
                                                    <div class="row mt-1 d-flex align-items-center justify-content-start">
                                                    
                                                    {quoteLoading? (
                                                            <>
                                                            <td colspan="12">
                                                            <Skeleton variant="rectangular"  animation="wave"  className="w-10" height={80} />
                                                            </td>
                                                            
                                                        </>  
                                                        ):(
                                                          <>  
                                                        <h3 class="mt-1">$  {parseFloat(quote.quote.USD.price).toFixed(2).toLocaleString('en-US')}</h3>
                                                        {((quote.quote.USD.percent_change_24h)>0) ? (
                                                            <>
                                                                <span class="badge badge-sm mx-2  badge-success"><h5>+{parseFloat(quote.quote.USD.percent_change_24h).toFixed(2)}%</h5></span>
                                                            </>
                                                        ):(
                                                           <>
                                                            <span class="badge badge-sm mx-2 badge-danger"><h5>{parseFloat(quote.quote.USD.percent_change_24h).toFixed(2)}%</h5></span>
                                                            </>
                                                        )}
                                                        </>
                                                        )} 
                                                        
                                                    </div>
                                                    <hr class=""/>
                                                    <div class="row">
                                                    {quoteLoading? (
                                                            <>
                                                            <td colspan="12">
                                                            <Skeleton variant="rectangular"  animation="wave"  className="w-10" height={80} />
                                                            </td>
                                                            
                                                        </>  
                                                        ):(
                                                            <>
                                                                <div class="bg-light col pt-4 pb-5 pl-3 mx-1 rounded">
                                                                    <p>
                                                                    <span class="text-small">Market Cap</span>
                                                                    <em class="pl-2 icon ni ni-info-fill" data-toggle="tooltip" data-placement="bottom" title="The total market value of a cryptocurrency's circulating supply. It is analogous to the free-float capitalization in the stock market.

                                                                    Market Cap = Current Price x Circulating Supply."></em>
                                                                    </p>
                                                                    <p CLASS="text-white fw-bold">
                                                                        ${quote.quote.USD.market_cap}
                                                                    </p>
                                                                </div>
                                                                <div class="col pt-4 pb-5  pl-2 mx-1  rounded">
                                                                    <p>
                                                                        <span  class="text-small">Diluted Market Cap
                                                                        </span>
                                                                        <em class="pl-2 icon ni ni-info-fill" data-toggle="tooltip" data-placement="bottom" title="The market cap if the max supply was in circulation.Fully-diluted market cap (FDMC) = price x max supply. If max supply is null, FDMC = price x total supply. if max supply and total supply are infinite or not available, fully-diluted market cap shows - -."></em>
                                                                    </p>
                                                                    <p CLASS="text-white fw-bold">
                                                                       $ {quote.quote.USD.fully_diluted_market_cap}
                                                                    </p>
                                                                </div>
                                                                <div class="col pt-4 pb-5  pl-3 mx-1 rounded">
                                                                    <p>
                                                                        <span  class="text-small">Volume
                                                                        </span>
                                                                        <span class="badge ml-1 badge-light">24h</span>
                                                                        <em class="pl-2 icon ni ni-info-fill" data-toggle="tooltip" data-placement="bottom" title="A measure of how much of a cryptocurrency was traded in the last 24 hours."></em>
                                                                    </p>
                                                                    <p CLASS="text-white fw-bold">
                                                                       $ {quote.quote.USD.volume_24h}
                                                                    </p>
                                                                </div>
                                                                <div class="col pt-4 pb-5  pl-3 mx-1 rounded">
                                                                    <p><span class="text-small">Circulating Supply
                                                                    </span>
                                                                    <em class="pl-2 icon ni ni-info-fill" data-toggle="tooltip" data-placement="bottom" title="The amount of coins that are circulating in the market and are in public hands. It is analogous to the flowing shares in the stock market."></em>
                                                                    <em class=" pl-1 text-primary icon ni ni-check-circle-fill" data-toggle="tooltip" data-placement="bottom" title="The Krypton team has verified the project's circulating supply."></em>
                                                                    </p>
                                                                    <p CLASS="text-white fw-bold">
                                                                       {quote.circulating_supply} {quote.symbol}
                                                                    </p>
                                                                </div>
                                                        
                                                        </>
                                                        )}
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
                        {quoteLoading? (
                            <>
                            <td colspan="12">
                            <Skeleton variant="text"  animation="wave"  className="w-10" height={200} />
                            </td>
                                                            
                        </>  
                        ):(
                        <>
                            <div class="row px-4 mt-2">
                                <h4>{symbolCrypto}  Statistics</h4>
                            </div>
                        <div class="row px-4 mt-4 d-flex justify-content-between">
                            <div class="text-small">{quote.name} Price: </div>
                        <h6 class="pl-5">${quote.quote.USD.price.toFixed(2)}</h6>
                        </div> 
                        <hr class="mx-2 custom-hr"/>
                        <div class="row px-4  d-flex justify-content-between">
                            <div class="text-small">ID: </div>
                            <h6 class="pl-5">{quote.id}</h6>
                        </div>
                        <hr class="mx-2 custom-hr"/>
                        <div class="row px-4 d-flex justify-content-between">
                            <div class="text-small">Circulating Volume:</div> 
                            <h6 class="pl-3">{quote.circulating_supply}{quote.symbol}</h6>
                        </div>
                        <hr class="mx-2 custom-hr"/>
                        <div class="row px-4 d-flex justify-content-between">
                            <div class="text-small">Market Dominance:</div> 
                            <h6 class="pl-3">{parseFloat(quote.quote.USD.market_cap_dominance).toFixed(1)} %</h6>
                        </div>
                        <hr class="mx-2 custom-hr"/>
                        <div class="row  px-4 d-flex justify-content-between">
                            <div class="text-small">Market Rank:</div> 
                            <h6 class="pl-3">#{quote.cmc_rank}</h6>
                        </div>
                        <div class="row  px-4 mt-5 d-flex justify-content-between">
                            <div class="badge badge-dark text-small ">{quote.name} Market cap</div> 
                        </div>
                        <hr class="mx-2 custom-hr"/>

                        <div class="row  px-4  d-flex justify-content-between">
                            <div class="text-small">Market Cap:</div> 
                            <h6 class="pl-3">${quote.quote.USD.market_cap}</h6>
                        </div>
                        <hr class="mx-2 custom-hr"/>

                        <div class="row  px-4  d-flex justify-content-between">
                            <div class="text-small">Fully Diluted Market Cap:</div> 
                            <h6 class="pl-3">${quote.quote.USD.fully_diluted_market_cap}</h6>
                        </div>
                        </>
                        )}

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
                            
                            {loading? (
                                                <>
                                                <td colspan="12">
                                                <Skeleton variant="rectangular"  animation="wave"  className="w-10" height={100} />
                                                </td>
                                                
                                              </>  
                                    ):(
                                        <>
                                       <span class="px-2">Latest {symbolCrypto} News</span>
                                        <div class="row px-2  my-2 d-flex justify-content-between">
                                        {news.map((item, index)=>
                                            <NewsRow row={item} index={index}
                                            />
                                        )} 
                                        

                                        {news =="" &&
                                        <td colspan="12" className="text-center">
                                            No News Found!
                                        </td>
                                        }
                                        </div>
                                    </>
                                            )}
                         
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
        <Footer/>             
        </>
    )
}

export default About

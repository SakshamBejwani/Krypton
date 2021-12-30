import React from 'react'
import Nav from '../../components/Header/Nav'
import Footer from '../../components/Footer/Footer'
import CompareRow from './CompareRow'
import { getSpecificCoinMetaData } from '../../api/coins'
import {useState, useEffect} from 'react'
import Skeleton from '@mui/material/Skeleton'
import {Link} from 'react-router-dom'
import Snackbar from '@mui/material/Snackbar';
import { useHistory, Redirect } from 'react-router';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';


function Compare() {

    const compareArray=[]
    console.log(compareArray)
    const [graphShow, setGraphShow] = useState(false)
    const [SnackMessage, setSnackMessage] = useState("")
    const [isSnackBar, setIsSnackBar] = useState(false)
    const [cryptoList, setCryptoList] = useState([])
    const [crypto, setCrypto] = useState([])
    const [removeCrypto, setRemoveCrypto] = useState([])
    const [coinData, setCoinData] = useState([])
    const [loading, setLoading] = useState(true)
    const [disabled, setDisabled] = useState(false)
    const [showCompareRow ,setShowCompareRow] = useState(false)
    useEffect(() => {
        getSpecificCoinMetaData(getSpecificCoinMetaDataCallback)
    }, [])
    useEffect(() => {
        setShowCompareRow(true)
        if((cryptoList.length)>7){
            setDisabled(true)
            setIsSnackBar(true)
            setSnackMessage("Limit Reached" )
        }
        if (!disabled) {
        compareArray.push(crypto)
        setCryptoList(cryptoList.concat(compareArray))
        console.log('compare list', cryptoList)
        }
    }, [crypto])


    const changeState =()=>{
        setGraphShow(!graphShow)  
    }
    const closeSnack=()=>{
        setIsSnackBar(false)
        setSnackMessage("")
    }
    const getSpecificCoinMetaDataCallback =(response)=>{
        if(response.status === 200){
            response.json().then(data=>{
                console.log('Getting specific data Of Coin', data.data)
                setCoinData(data.data)
                console.log("Specific Coin Data in compare row", coinData)
                setLoading(false)
            })       
        }
    }
    return (
        <>
        {graphShow ? (
                    <>  <div class="row px-3 py-1"><span class="badge badge-primary watchlist-button" onClick={changeState}>Go Back</span></div>
                       <div class="row">
                            <div class="col col-md-6 col-lg-4 col-sm-4">
                                    <TradingViewWidget
                                        symbol={"BTC"+"USD"}
                                        theme={Themes.DARK}
                                        locale="en"
                                        autosize="true"
                                        // height= ""
                                        // width= ""
                                    />
                            </div>
                            <div class="col col-md-6 col-lg-4 col-sm-4">
                                    <TradingViewWidget
                                        symbol={"BTC"+"USD"}
                                        theme={Themes.DARK}
                                        locale="en"
                                        autosize="true"
                                        // height= ""
                                        // width= ""
                                    />
                            </div>
                            <div class="col col-md-6 col-lg-4 col-sm-4">
                                    <TradingViewWidget
                                        symbol={"BTC"+"USD"}
                                        theme={Themes.DARK}
                                        locale="en"
                                        autosize="true"
                                        // height= ""
                                        // width= ""
                                    />
                            </div>
                            <div class="col col-md-6 col-lg-4 col-sm-4">
                                    <TradingViewWidget
                                        symbol={"BTC"+"USD"}
                                        theme={Themes.DARK}
                                        locale="en"
                                        autosize="true"
                                        // height= ""
                                        // width= ""
                                    />
                            </div>
                            <div class="col col-md-6 col-lg-4 col-sm-4">
                                    <TradingViewWidget
                                        symbol={"BTC"+"USD"}
                                        theme={Themes.DARK}
                                        locale="en"
                                        autosize="true"
                                        // height= ""
                                        // width= ""
                                    />
                            </div>
                            <div class="col col-md-6 col-lg-4 col-sm-4">
                                    <TradingViewWidget
                                        symbol={"BTC"+"USD"}
                                        theme={Themes.DARK}
                                        locale="en"
                                        autosize="true"
                                        // height= ""
                                        // width= ""
                                    />
                            </div>
                            <div class="col col-md-6 col-lg-4 col-sm-4">
                                    <TradingViewWidget
                                        symbol={"BTC"+"USD"}
                                        theme={Themes.DARK}
                                        locale="en"
                                        autosize="true"
                                        // height= ""
                                        // width= ""
                                    />
                            </div>
                            <div class="col col-md-6 col-lg-4 col-sm-4">
                                    <TradingViewWidget
                                        symbol={"BTC"+"USD"}
                                        theme={Themes.DARK}
                                        locale="en"
                                        autosize="true"
                                        // height= ""
                                        // width= ""
                                    />
                            </div>

                            
                        </div>
                     </>  
                    ):(
                    <>
            <Nav/>
            <div class="nk-content nk-content-fluid" >
            <div class="container-xl wide-xl">
                <div class="row mb-3">
                    <h5>Compare Cryptos'</h5>
                </div>
                {showCompareRow ? (
                         <>
                    <div class="row rounded mt-2 mb-3 d-flex flex-row-reverse justify-content-end">
                        <div class="col card bg-primary text-white btn d-flex flex-row align-items-center justify-content-center" onClick={changeState}>Compare <em class=" mr-3 ml-1 icon ni ni-list-check"></em></div>


                        {(cryptoList.slice(1)).map((item, index)=>
                            <>  
                            <div class="col text-center align-items-center justify-content-center btn text-white bg-gray-700 mr-1"><Link to={"/coin/"+item}>{item} </Link></div>
                                
                            </>
                        )}
                        </div>
                    </>  
                        ):(
                             <>
                                <td colspan="12">
                                 <Skeleton variant="text"className="w-10" height={10} />
                                 </td>
                             </>
                        )}
            <div class="row card rounded">
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
                                                {/* <th className="text-white text-center"><strong></strong></th> */}
                                                <th className="text-white text-center"><strong>#</strong></th>
                                                <th className="text-white text-center"><strong>Name</strong></th>
                                                <th className="text-white text-center"><strong>Symbol</strong></th>
                                                <th className="text-white text-center"><strong>Price</strong></th>
                                                <th className="text-white text-center"><strong>Market Cap</strong></th>
                                                <th className="text-white text-center"><strong>24%</strong></th>
                                                <th className="text-white text-center"><strong></strong></th>
                                                <th></th>
                                                
                                            </tr>
                                            )}
                                        </thead>
                                        <tbody>
                                            {loading? (
                                                <>
                                                <td colspan="12">
                                                <Skeleton variant="rectangular"  animation="wave"  className="w-10" height={150} />
                                                </td>
                                                
                                              </>  
                                            ):(
                                        <>
                                        {coinData.map((item, index)=>
                                            <CompareRow row={item} index={index} setCrypto={setCrypto} setRemoveCrypto={setRemoveCrypto} disabled={disabled}
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
            <Snackbar
        open={isSnackBar}
        onClose={(e)=>closeSnack(e)}
        anchorOrigin={{vertical: 'bottom', horizontal: 'center',}}
        message= {SnackMessage}
        autoHideDuration={6000}
        />
        
        
            <Footer/>
            </>
            )}
        </>
    )
}

export default Compare

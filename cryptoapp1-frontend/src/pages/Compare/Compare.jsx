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
            if ( !( crypto in compareArray ) ){
                compareArray.push(crypto)
                setCryptoList(cryptoList.concat(compareArray))
                console.log('compare list', cryptoList)
        }}
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
                    <> 
                    
                    <div class="bg-white graphWrapper-100">
                       <div class="row  m-0">
                       {cryptoList.map((item, index)=>
                       <> 
                        
                        <div class="col h-33 bg-secondary customColumn p-0 col-md-6 col-lg-4 col-sm-4">
                                    <TradingViewWidget
                                        symbol={item+"USD"}
                                        theme={Themes.DARK}
                                        locale="en"
                                        autosize="true"
                                        hide_top_toolbar={true}
                                        hideideas={true}
                                        hide_side_toolbar={true}
                                        // height= ""
                                        // width= ""
                                    />
                            </div>
                            </>
                            )}      
                            </div>

                          </div>  
                        
                     </>  
                    ):(
                    <>
            <Nav/>
            <div class="nk-content nk-content-fluid" >
            <div class="container-xl wide-xl">
                <div class="row mb-3">
                    <h5>Comparison powered by Krypton</h5>
                </div>
                
            <div class="row  rounded d-flex">
                <div class="col col-xl-8 col-lg-8 col-md-12 col-sm-12 col-xs-12  bg-light rounded">
				    <table class="table  table-borderless ">
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
                <div class="col col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 rounded px-2 ">
                {(cryptoList.length)>1 ? (
                         <>
                    <div class="row rounded mt-2 mb-3 px-3 d-flex flex-column justify-content-end">
                        <div class="col card mb-3 bg-primary text-white btn d-flex flex-row align-items-center justify-content-center py-2" onClick={changeState}>Compare <em class=" mr-3 ml-1 icon ni ni-list-check"></em></div>


                        {(cryptoList.slice(1)).map((item, index)=>
                            <>  
                            <div class="col text-center align-items-center mb-1 justify-content-center btn text-white bg-gray-700 mr-1"><Link to={"/coin/"+item}>{item} </Link></div>
                                
                            </>
                        )}
                        </div>
                    </>  
                        ):(
                             <>
                                <div class="row rounded mt-2 mb-3 px-3 d-flex flex-column justify-content-end">
                                    {/* <div class="col card mb-3 bg-primary text-white btn d-flex flex-row align-items-center justify-content-center" disabled>Compare <em class=" mr-3 ml-1 icon ni ni-list-check"></em></div> */}
                                    <button type="button" class="text-white btn d-flex flex-row align-items-center justify-content-center  btn btn-secondary btn-lg" disabled>Compare <em class=" mr-3 ml-1 icon ni ni-list-check"></em></button>

                                </div>
                                
                             </>
                        )}
                </div>
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

import React from 'react'
import {Link} from 'react-router-dom'
function HomeRow(props) {
    const {index, row} = props;
    
    return (
        
        <tr class="py-5">
            <td className="text-center text-white"><strong>{index + 1}</strong></td>
            <td onClick={(e)=>{
                        sessionStorage.setItem('cryptoPrice', row.quote.USD.price)
                        sessionStorage.setItem('cryptoVolume', row.quote.USD.volume_24h)
                        sessionStorage.setItem('cryptoMarketCap', row.quote.USD.market_cap )
                        sessionStorage.setItem('circulatingSupply', row.circulating_supply)
                        sessionStorage.setItem('dilutedCap', row.quote.USD.fully_diluted_market_cap )
                        sessionStorage.setItem('percentChange', row.quote.USD.percent_change_24h )
                        sessionStorage.setItem('rank', row.cmc_rank)
                        sessionStorage.setItem('marketDominance', row.quote.USD.market_cap_dominance )

            }}>
                <Link to={"/coin/"+row.symbol}><strong class="none-decorate text-white">{row.name}</strong></Link>
            </td>
            <td className="text-center text-white">{row.symbol}</td>
            <td className="text-center text-white">${parseFloat(row.quote.USD.price).toFixed(6)}</td>
            {(parseFloat(row.quote.USD.percent_change_24h)>0) ? (
                 <>
                    <td class="font-green text-center"><em class="icon ni ni-chevron-up"></em>{parseFloat(row.quote.USD.percent_change_24h).toFixed(2)}%</td>
                </>
            ):(
                <>
                 <td class="font-orange text-center"><em class="icon ni ni-chevron-down"></em>{parseFloat(row.quote.USD.percent_change_24h).toFixed(2)}%</td>
                </>
            )}
            {(parseFloat(row.quote.USD.percent_change_7d)>0) ? (
                 <>
                    <td class="font-green text-center">+{parseFloat(row.quote.USD.percent_change_7d).toFixed(2)}%</td>
                </>
            ):(
                <>
                 <td class="font-orange text-center">{parseFloat(row.quote.USD.percent_change_7d).toFixed(2)}%</td>
                </>
            )}
            
            {/* <td class="font-orange text-center">{parseFloat(row.quote.USD.percent_change_7d).toFixed(2)}%</td> */}
            <td className="text-center text-white">{row.quote.USD.market_cap.toFixed(0)}</td>
            <td className="text-center text-white">{row.quote.USD.volume_24h.toFixed(0)}</td>
            {/* <td class="tb-odr-action">
                                                        
                                                        <div class="dropdown">
                                                            <a class="text-soft dropdown-toggle btn btn-icon btn-trigger" data-toggle="dropdown" data-offset="-8,0"><em class="icon ni ni-more-h"></em></a>
                                                            <div class="dropdown-menu dropdown-menu-right dropdown-menu-xs">
                                                                <ul class="link-list-plain">
                                                                    <li><a href="#" class="text-primary">Edit</a></li>
                                                                    <li><a href="#" class="text-primary">View</a></li>
                                                                    <li><a href="#" class="text-danger">Remove</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </td> */}
        </tr>
                                        
            
    )
}

export default HomeRow

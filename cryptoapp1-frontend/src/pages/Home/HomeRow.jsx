import React from 'react'
import {Link} from 'react-router-dom'
function HomeRow(props) {
    const {index, row} = props;
    console.log(row)
    return (
        
        <tr class="py-5">
            <td className="text-center"><strong>{index + 1}</strong></td>
            <td ><Link to={"/coin/"+row.symbol}>{row.name}</Link></td>
            <td className="text-center">{row.symbol}</td>
            <td className="text-center">{parseFloat(row.quote.USD.price).toFixed(6)}</td>
            <td class="font-orange text-center">{parseFloat(row.quote.USD.percent_change_24h).toFixed(2)}%</td>
            <td class="font-orange text-center">{parseFloat(row.quote.USD.percent_change_7d).toFixed(2)}%</td>
            <td className="text-center">{row.quote.USD.market_cap}</td>
            <td className="text-center">{row.quote.USD.volume_24h}</td>
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

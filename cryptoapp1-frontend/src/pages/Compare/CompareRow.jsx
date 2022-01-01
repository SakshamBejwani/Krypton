import React, {useState} from 'react'
import {Link} from 'react-router-dom'
function CompareRow(props) {
    const {index, row, setCrypto, setRemoveCrypto, disabled} = props;
    const [selected, setSelected] = useState(false)
    return (
        <tr>
            {/* <td class="watchlist-button"><em class="icon ni ni-star"></em></td> */}
            <td className="text-center text-white"><strong>{index + 1}</strong></td>
            <td class="text-center">
                <Link to={"/coin/"+row.symbol}><strong class="none-decorate text-white">{row.name}</strong></Link>
            </td>
            <td className="text-center text-white">{row.symbol}</td>
            <td className="text-center text-white">${parseFloat(row.quote.USD.price).toFixed(6)}</td>
            <td className="text-center text-white">{row.quote.USD.market_cap.toFixed(0)}</td>
            {(parseFloat(row.quote.USD.percent_change_24h)>0) ? (
                 <>
                    <td class="font-green text-center">+{parseFloat(row.quote.USD.percent_change_24h).toFixed(2)}%</td>
                </>
            ):(
                <>
                 <td class="font-orange text-center">{parseFloat(row.quote.USD.percent_change_24h).toFixed(2)}%</td>
                </>
            )}
            {disabled ? (
                    <>
                        <td className=" text-center text-light">
                        <span class="badge badge-pill  badge-light">
                            <em class="icon ni ni-cross"></em>
                        </span></td>
                                                
                     </>  
                    ):(
                    <>

                {selected ? (
                    <>
                        <td className="text-danger text-center">
                        <span class="badge badge-pill watchlist-button  badge-danger"  onClick={(e)=>{ 
                        setSelected(!selected)
                        setRemoveCrypto(row.symbol)}}><em class="icon ni ni-minus"></em></span></td>
                                                
                     </>  
                    ):(
                     <>
                     <td className="text-primary text-center">
                     <span class="badge badge-pill watchlist-button badge-primary" onClick={(e)=>{ 
                         setSelected(!selected)
                        setCrypto(row.symbol)}}><em class=" icon ni ni-plus" ></em></span>
                     </td>
                    </>
                    )}
            </>
                    )}
            
            
            
        </tr>
    )
}

export default CompareRow

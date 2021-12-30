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
                        <td className=" text-center text-light"><em class="icon ni ni-cross"></em></td>
                                                
                     </>  
                    ):(
                    <>

                {selected ? (
                    <>
                        <td className="text-danger text-center"><em class="watchlist-button icon ni ni-minus" onClick={(e)=>{ 
                        setSelected(!selected)
                        setRemoveCrypto(row.symbol)}}></em></td>
                                                
                     </>  
                    ):(
                     <>
                <td className="text-primary text-center"><em class="watchlist-button icon ni ni-plus" onClick={(e)=>{ 
                 setSelected(!selected)
                 setCrypto(row.symbol)}}></em></td>
                    </>
                    )}
            </>
                    )}
            
            
            
        </tr>
    )
}

export default CompareRow

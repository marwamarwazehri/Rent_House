import React from 'react'
import './Sales.css'
import {data} from './data';


const Sales = () => {
  return (
    <div className='Sales' id="sales">
      {data.map((sale)=>{
        return (<div className='a-sale'>
           <div className='icon'><span>{sale.icon}</span></div>
           <h3>{sale.title}</h3>
           <p>{sale.text1}<br/>{sale.text2}</p>
          
        </div>)
      })}
    </div>
  )
}

export default Sales

import React from 'react'
import './Properties.css';
import { houses } from './houses';



const Properties = () => {
  return (<section className='container' id='properties'>
    <div className='Text'>
        <h4>Recent</h4>
        <h1>our Feautred Properties</h1>
        <p>Lorem Ipsum is simply dummy text of the printing<br/>
                    industry Lorem Ipsum has been the</p>
      
    </div>

    <div className='houses-property'>
        {houses.map((house)=>{
        return (<div className='property-container'>
               <div className='img'>
                <img src={house.img} alt='house'/>
               </div>
               <h3 className='price'>{house.price}</h3>
               <div className='content'>
                <div className='name-location'>
                    <h3><span className='name'>{house.name}</span>
                    <br/><span className='location'>{house.location}</span></h3>
                  </div>

                <div className='bed-bath'>
                    <span>{house.icon1} {house.bedrooms}</span>
                    <span>{house.icon2} {house.baths}</span>
                </div>
               </div>
        </div>)
       })}
    
    </div>
    </section>

   
  )
}

export default Properties

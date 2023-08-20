import React from 'react'
import './About.css';

const About = () => {
  return (
    <div className='about' id='about'>
      <div className='left'>
        <div className='about-img'></div>
</div>

<div className='right'>
  <div className='title'>
    <h4>ABOUT US</h4>
    <h1>We Provide The Best<br/> Property for you!</h1>
  </div>

  <div className='text'>
    <p>It is a long established fact that a reader will be distracted
       by the readable content of a page when looking at its layout.<br/>
        The point of using Lorem Ipsum 
      </p>
    <p>It is a long established fact that a reader will be distracted
       by the readable content of a page when looking at its layout.<br/>
        The point of using Lorem Ipsum </p>
    <p>It is a long established fact that a reader will be distracted
       by the readable content of a page when looking at its layout.<br/>
        The point of using Lorem Ipsum </p>
  </div>
  <div className='button'>
<button>Learn More</button>
</div>
    
</div>



    </div>
  )
}

export default About

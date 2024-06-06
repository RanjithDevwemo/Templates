import CountUp from 'react-countup';
// import { FaUsers } from "react-icons/fa";
import "../Css/ScrollCounding.css"
import ScrollTrigger from 'react-scroll-trigger';

import React, { useState } from 'react'


export default function ScrollCounding() {
const [startcout,setstartcount]=useState(false);

  return (
    <div className="main">
      <h1 className='heading'>Some numbers to Support Us (ScrollCounding)</h1>
    <div className='scroll'>
      
          <ScrollTrigger onEnter={()=>setstartcount(true)} onExit={()=>setstartcount(false)}>
        
<div className='counting'>

<div className='temp'>
  {/* <div className='icon-con'>
  <FaUsers className='icon' />
  </div> */}
  
  <div className='number'>
<h2 className='numbers'>
    {startcout &&
<CountUp start={0} end={20} duration={3.5}></CountUp>
}
+</h2>
  </div>
  <div className='cont'>
 <h4 className='cus'>Clients</h4>
 <p>That works with us</p>
  </div>
</div>

<div className='temp'>
  {/* <div className='icon-con'>
  <FaUsers className='icon' />
  </div> */}
  
  <div className='number'>
<h2 className='numbers'>
    {startcout &&
<CountUp start={0} end={5} duration={3.5}></CountUp>
}
+</h2>
  </div>
  <div className='cont'>
 <h4 className='cus'>Years</h4>
 <p>Serving customers</p>
  </div>
</div>


<div className='temp'>
  <div className='icon'>

  </div>
 
  <div className='number'>
<h2 className='numbers'> {startcout &&
<CountUp start={0} end={500} duration={3.5}></CountUp>}
+</h2>

</div>
<div className='cont'>
<h4 className='cus'>Projects</h4>
<p>Serving customers</p>
  </div>
</div>


<div className='temp'>
  <div className='icon'>

  </div>
  
  <div className='number'>
<h2 className='numbers'>
{startcout &&
<CountUp start={0} end={1000} duration={3.5}></CountUp>}
+</h2>
  </div>
  <div className='cont'>
  <h3 className='cus'>People</h3>
  <p>delivering solutions</p>
  </div>
</div>
</div>
</ScrollTrigger>  
    </div>
    </div>
  )
}




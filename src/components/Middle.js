import React from 'react'
import ham1 from './include/ham1.jpg'
import ham2 from './include/ham2.jpg'
import ham4 from './include/ham4.jpg'

export default function Middle() {
  return (
    <div class="wrapper">
  <div class="one"><img id="img1" src={ham1} alt="" srcset="" /></div>
  <div class="two"><img id="img2" src={ham4} alt="" srcset="" />
  {/* <div class="three"><img id="img3" src={ham} alt="" srcset="" /> */}
  </div></div>
  )
}

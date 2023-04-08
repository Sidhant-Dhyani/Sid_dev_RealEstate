
import React from 'react'
import "./Best.css"
import Apt1 from "../../assets/apt1.jpeg"
import Apt2 from "../../assets/apt2.jpeg"
import Apt3 from "../../assets/apt3.jpeg"


const Best = () => {
   return (
    <div className='best' id ="best">
        <h1>Find the best Rated Properties.</h1>
        <div>
            <p><span className='bold'>All</span></p>
            <p>Commercial</p>
            <p>Residential</p>
            <p>Agriculture</p>
        </div>
        <div className="container">
            <img src={Apt1} alt="" />
            <img src={Apt2} alt="" />
            <img src={Apt3} alt="" />
        </div>
        <button className="btn">View All</button>
    </div>
  )
}  

export default Best

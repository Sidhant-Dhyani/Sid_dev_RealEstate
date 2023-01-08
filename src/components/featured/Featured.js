import React from 'react'
import "./Featured.css"

import House1 from "../../assets/house1.jpg"
import Bed1 from "../../assets/bed1.jpg"
import Bed2 from "../../assets/bed2.jpg"
import Kitchen from "../../assets/kitchen.jpg"
import Bathroom from "../../assets/bath1.jpg"

import House2 from "../../assets/house2.jpg"
import Bed3 from "../../assets/bed3.jpg"
import Bed4 from "../../assets/bed4.jpg"
import Bathroom2 from "../../assets/bath2.jpg"
import LivingRoom from "../../assets/living-room.jpg"

const Featured = () => {
  return (
    <div className='featured'>
        <h1 className='featured-text'>Top Featured Listings</h1>
        <p className='views-text'>Selected Listings by City, State & Zip based on views.</p>
        <div className="container">
            <img className='span-3 image-grid-row-2' src={House1} alt="" />
            <img src={Bed1} alt="" />
            <img src={Bed2} alt="" />
            <img src={Kitchen} alt="" />
            <img src={Bathroom} alt="" /> 
            <div className="span-3 img-details">
                <div className='top'>
                    <h2>123 Acne St. dallas, Tx</h2>
                    <p>House for Sale</p>
                    <p className='price'>$2,677,000</p>
                </div>
                <div className="info-grid">
                    <div>
                        <div className='info'>
                            <p className="bold">Bedrooms</p><p>5</p>
                        </div>
                        <div className='info'>
                            <p className="bold">Bathrooms</p><p>5</p>
                        </div>
                    </div>
                    <div>
                        <div className='info'>
                            <p className="bold">Square Feet:</p><p>8,138</p>
                        </div>
                        <div className='info'>
                            <p className="bold">Est Payment:</p><p>$14,797</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="span-2 right-img-details">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit hic, neque iste ex quaerat voluptatibus cumque voluptates dolore ducimus harum.</p>
                <button className='btn'>View Listings</button>
            </div>
        </div>

        {/* section****section */}

        <div className="container">
            <img src={Bed3} alt="" />
            <img src={Bed4} alt="" />
            
            <img className='span-3 image-grid-row-2' src={House2} alt="" />

            <img src={Bathroom2} alt="" />
            <img src={LivingRoom} alt="" />
            <div className="span-2 right-img-details">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit hic, neque iste ex quaerat voluptatibus cumque voluptates dolore ducimus harum.</p>
                <button className='btn'>View Listings</button>
            </div> 

            <div className="span-3 img-details">
                <div className='top'>
                    <h2>123 Acne St. dallas, Tx</h2>
                    <p>House for Sale</p>
                    <p className='price'>$2,677,000</p>
                </div>
                <div className="info-grid">
                    <div>
                        <div className='info'>
                            <p className="bold">Bedrooms</p><p>5</p>
                        </div>
                        <div className='info'>
                            <p className="bold">Bathrooms</p><p>5</p>
                        </div>
                    </div>
                    <div>
                        <div className='info'>
                            <p className="bold">Square Feet:</p><p>8,138</p>
                        </div>
                        <div className='info'>
                            <p className="bold">Est Payment:</p><p>$14,797</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured

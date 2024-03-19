import React from 'react'
import "../css/Footer.css"
import { PiTwitterLogoLight } from "react-icons/pi";
import { LuFacebook } from "react-icons/lu";
import { IoLogoInstagram } from "react-icons/io";



const Footer = () => {
  return (
    <div className='footer-bg'>
        <div className="footer-top">
            <div className="footer-info">

            </div>
            <div className="q-links">
                
            </div>
            <div className="u-links">
                
            </div>
            <div className="contact-info">
                
            </div>
        </div>
        <div className="footer-bottom">
            <div className="footer-newsletter">
                <div className="">
                <PiTwitterLogoLight />
                <LuFacebook />
                <IoLogoInstagram />
                </div>
            </div>
            <div className="">
                <form action=""></form>
                <input type="email" /> <label htmlFor=""></label>
            </div>

        </div>


    </div>
  )
}

export default Footer
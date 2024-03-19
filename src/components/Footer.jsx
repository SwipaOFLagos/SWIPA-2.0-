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
                <div className="frg-logo">

                </div>
                <h3>
                    <span>F</span>RAGRANCE<span>H</span>UB
                </h3>
                <p>FragranceHub is an e-commerce platform specializing in selling perfumes. FRAGRANCEHUB offer a wide range of fragrances from various brands, catering to different preferences and budgets.</p>
            </div>
            <div className="q-links">
                <ul className='q-link'> <h5>Quick Links</h5>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About us</a>
                    </li>
                    <li>
                        <a href="#">All fragrance</a>
                    </li>
                    <li>
                        <a href="#">All brands</a>
                    </li>
                    <li>
                        <a href="#">New Arrival</a>
                    </li>
                    <li>
                        <a href="#">Blog</a>
                    </li>
                    
                </ul>
                
            </div>
            <div className="u-links">
            <ul className='u-link'> <h5>Useful Links</h5>
                    <li>
                        <a href="#">Help</a>
                    </li>
                    <li>
                        <a href="#">Faq</a>
                    </li>
                    <li>
                        <a href="#">Shipping and Information</a>
                    </li>
                    <li>
                        <a href="#">Return and exchnages</a>
                    </li>
                    <li>
                        <a href="#">Privacy policies</a>
                    </li>
                    <li>
                        <a href="#">Terms and Conditions</a>
                    </li>
                    
                </ul>
            </div>
            <div className="contact-info">
            <ul> <h5>Contact Us</h5>
                   <p>+234 8021479293</p>
                   <p>+234 8142882866</p>

                   <p>Follow us on</p>
                <div className="footer-logo">
                <PiTwitterLogoLight />
                <LuFacebook />
                <IoLogoInstagram />
                </div>
            </ul>
                
            </div>
        </div>
        <div className="footer-bottom">
            <div className="footer-nl">
                <h5>Subscribe to our newsletter</h5>
                <p>To get update on our latest offers</p>
            </div>
           
            <div className="footer-form">
            <input class="form-control p-1" type="email" placeholder="Email Address" id="emailInput"></input>
            </div>
            
          

        </div>


    </div>
  )
}

export default Footer
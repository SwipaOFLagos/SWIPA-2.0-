import React from 'react'
import '../CSS/Product.css'
import img from '../assets/images/image 8.png'

const ProductM = () => {
  return (
    <>
      <div className='m-card-Container'>
        <div className='m-image'>
            <img src={img}/>
        </div>
        <div className='m-card-info'>
            <div className="m-card-text">
                <h4>Lorem ipsuhum dohlor sitfh</h4>
                <p>Lorem ipsum dolor sit amet consectetur</p>
                <h2>$46,000.00</h2>
            </div>
            <div className="m-card-btn">
                <button>Add to cart</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default ProductM

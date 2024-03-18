import React from 'react'
import '../CSS/AllFragance.css'
import ProductM from './Product'
import Accord from '../components/Accordion'

const AllFragance = () => {

  return (
    <>
        <section className='m-section'>
            <header className='m-header'>BY QIWI</header>
            <main className='m-main'>
                <div className='m-title'>
                    <div className="title-left">
                        <div className='breadscrumb'>Home \ Lorem \ipsumdolor</div>
                        <h4>All Featured Fragrance</h4>
                        <p>Showing 1 - 5 of 500 Products</p>
                    </div>
                    <div className="title-right">
                            <span>Sort by</span>
                            <select >
                                <option value='0'>Best Seller</option>
                            </select>
                    </div>
                </div>
                <div className='m-content'>
                    <div className="m-controls">
                        <div className='control-text'>
                            <p>Filter By</p>
                        </div>
                        <div className='control-list'>
                            <Accord/>
                        </div>

                    </div>
                    <div className="m-products">
                        <ProductM/>
                        <ProductM/>
                        <ProductM/>
                        <ProductM/>
                        <ProductM/>
                        <ProductM/>
                        <ProductM/>
                        <ProductM/>
                        <ProductM/>
                        <ProductM/>
                        <ProductM/>
                        <ProductM/>
                    </div>
                </div>
            </main>
            
        </section>
    </>
  )
}

export default AllFragance

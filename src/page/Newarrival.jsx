import React, { useState } from 'react'
import { CiFilter } from "react-icons/ci";
import { BiSort } from "react-icons/bi";
import "../css/Newarrival.css"
import BreadCrumb from "../components/NABreadcCumbs"
import Products from '../components/NAProductsDesk';
import ProductsMob from '../components/NAProductsMob';
import NewAccordion from '../components/NAAccordion';
import Mydropdown1,{ Mydropdown2 }  from '../components/NADropdown';

const Newarrival = () => {
  const [showFilter, setShowFilter] = useState(false)
  const [showSort, setShowSort] = useState(false)

  const handleShow = () => setShowFilter(!showFilter);
  const handleClick = () => setShowSort(!showSort);
  return (
    <div className="arrival-desk-div">
      <div className='arrival-top-div-desk'>

        <div className='d-none d-md-none d-lg-block'>
          <BreadCrumb />
        </div>

        <div className='d-flex justify-content-between'>
          <div className='d-block d-md-none d-lg-none'>
            <h3>All Featured Fragrance</h3>
            <span>Showing 1-20 of 500 products</span>
          </div>
          <div className='d-none d-md-block d-lg-block'>
            <h3>All Featured Fragrance</h3>
            <span>Showing 1-15 of 500 products</span>
          </div>

          <div className="d-none d-md-none d-lg-block">
            <span><Mydropdown1 /></span>
          </div>
        </div>

      </div>

      <div className="d-flex justify-content-between d-md-flex justify-md--content-between arrival-top-div-mob d-block d-md-block d-lg-none my-3">
        <div className="" ><span className='' onClick={handleShow}><span><CiFilter /></span> <b>Filter By </b></span>
          {showFilter && <div className='arrival-filter-div'><NewAccordion /></div>}
        </div>

        <div className=''><span className='me-3' onClick={handleClick} ><span><BiSort /></span> <b>Sort By</b> </span>
          {showSort && <Mydropdown2 />}</div>

      </div>

      <div className="arrival-products-div-mob d-block d-md-none d-lg-none">
        <ProductsMob/>
      </div>

      <div className='arrival-main-div'>
        <div className="arrival-filter-div d-none d-md-none d-lg-block me-3">
          <h6 className="ms-3 mt-3 mb-2"><b>Filter By</b></h6>
          <NewAccordion />
        </div>

        {/* Desktop and Tablet products div */}
        <div className="arrival-products-div-desk d-none d-md-block d-lg-block">
          <Products />
          {/* Sort by for desktop drop down is in a dropdown component */}
        </div>
      </div>
    </div>
  )
}

export default Newarrival
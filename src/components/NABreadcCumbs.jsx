import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import "../css/NABreadcrumbs.css"

function Breadcrumbs() {
    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Item href="#" className='new-top-text'>Home</Breadcrumb.Item>
                <Breadcrumb.Item active className='text-decoration-none'>All Fragrance Perfumes</Breadcrumb.Item>
            </Breadcrumb>

            <div className="">
                
            </div>
        </div>
    );
}

export default Breadcrumbs;

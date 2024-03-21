import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import First from '../assets/images/image 36.png'
import Second from '../assets/images/image 37.png'

const RelatedProd = () => {
  return (
    <div>
        <h3>Related Products</h3>
        <div className='border border-dark rounded p-3'>
        <Card style={{ width: '25rem' }} className='mb-4 px-4'>
      <Card.Img variant="top" src={First} />
      <Card.Body className='row d-flex justify-content-between align-items-center'>
        <Card.Title >
            <div>
            <h3 className='fs-5'>Maison Francis Kurkdjian Paris</h3> 
            <p className='fs-6'>grand soir eau de parfum 2.3 oz</p>
            </div>
        </Card.Title>
        <Card.Text className='fs-3'>
        ₦46,000.00
        </Card.Text>
        <Button variant="dark">Add to Cart</Button>
      </Card.Body>
    </Card>
        <Card style={{ width: '25rem' }} className='px-4'>
      <Card.Img variant="top" src={Second} style={{ height:'20rem', width:'15rem', marginLeft:'3rem'}}/>
      <Card.Body className='row d-flex justify-content-between align-items-center'>
        <Card.Title>
        <h3 className='fs-5'>Maison Francis Kurkdjian Paris</h3> 
            <p>grand soir eau de parfum 2.3 oz</p>
        </Card.Title>
        <Card.Text className='fs-3'>
        ₦46,000.00
        </Card.Text>
        <Button variant="dark">Add to Cart</Button>
      </Card.Body>
    </Card>
        </div>
    </div>
  )
}

export default RelatedProd
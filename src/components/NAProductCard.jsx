import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../css/NAProductcard.css"

const ProductCard = ({ products }) => {
// margin: top left bottom right
    return (
        <div className=''>
            <Card className= "card">
                <Card.Img variant="top" src={products?.image}className='NA-card-image' />
                <Card.Body className='NA-card-body'>
                    <Card.Title className="NA-card-title">{products?.name}</Card.Title>
                    <Card.Text>{products?.fragranceType} <span>{products?.weight}</span></Card.Text>
                    <Card.Text><span>₦</span>{products?.price}</Card.Text>
                    <Button variant="dark" className='text-light p-2 NA-card-btn'>Add to Cart</Button>
                </Card.Body>
            </Card>
        </div>

    )
}

export default ProductCard
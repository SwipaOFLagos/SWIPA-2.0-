import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../css/NAProductcard.css"
import { Link } from 'react-router-dom';

const ProductCard = ({ products, index }) => {
    // margin: top left bottom right
    const { name, price, image, availability, weight, fragranceType } = products
    // let priceNaira = (price/100).toLocaleString(undefined, {minimumFractionDigits: 2})
    return (
        <div >
            <div className='d-flex justify-content-between flex-wrap gap-3'>
                <Card className="card">
                    <Link to = "/detail/:productId" className='text-decoration-none text-dark'><Card.Img variant="top" src={image} className='NA-card-image' /></Link>
                    <Card.Body className='NA-card-body'>
                        <Link to = "/detail/:productId" className='text-decoration-none text-dark '><Card.Title className="NA-card-title mt-3 mb-2">{name}</Card.Title></Link>
                        <Link to = "/detail/:productId" className='text-decoration-none text-dark' ><Card.Text className="NA-card-text mb-3" >{fragranceType} <span>{weight}</span></Card.Text></Link>
                        <Link to = "/detail/:productId" className='text-decoration-none text-dark'><Card.Text className="NA-card-price mb-4"><span>₦</span>{price}</Card.Text></Link>
                        {availability ? <Button variant="dark" className='text-light p-2 NA-card-btn'>Add to Cart</Button> : <Button variant="secondary" className='text-light p-2 NA-card-btn'>Sold Out</Button>}
                    </Card.Body>
                </Card>
            </div>

        </div>

    )
}

export default ProductCard
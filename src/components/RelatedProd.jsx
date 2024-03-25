import React, { useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../css/RelatedProd.css'
import { data } from '../Db/ProductDb';
import { Link, NavLink} from 'react-router-dom';


const RelatedProd = ({product}) => {
  // const [relatedProducts, setRelatedProducts] = useState([]);

  // useEffect(() => {
    // Filter related products by brand of the clicked product and limit to 2
  //   const filteredProducts = data.filter(product => product.brand === clickedProduct.brand);
  //   setRelatedProducts(filteredProducts.slice(0, 3)); // Limit to 2 related products
  // }, [clickedProduct]);


  return (
    <div className=' mt-lg-4 mb-4'>
      
          <div >
            <h3>Related Products</h3>
            <div className='rpG  rounded px-lg-4 pt-lg-4 d-flex flex-row flex-lg-column justify-content-md-between'>
        {data.filter((product, index)=>product.brand === 'Armani'
        ).slice(0,2).map((item)=>{
          return <Card className='cardG mb-lg-4 '  key={item._id} >
      <Card.Img variant="top" src={item?.image}  className='imgGa'/>
      <Card.Body className='row d-flex justify-content-between align-items-center'>
       
       
        <div>
            <h1 className='hg' style={{fontSize:'24px'}}>{item?.name}</h1> 
            <p className='pg' style={{fontSize:'18px', fontWeight:'400'}}>{item?.description}</p>
            <p className='ppg' style={{fontSize:'26px', fontWeight:'700'}}>{item?.priceCents}</p>
            </div>
       
        <Button variant="dark" className='btnG mx-lg-2' style={{width:'343px'}}>
        Add to Cart
        </Button>
      </Card.Body>
    </Card>
     })}
            </div>
        
        {/* <Card style={{ width: '25rem' }} className='px-4'>
      <Card.Img variant="top" src={Second} style={{ height:'20rem', width:'15rem', marginLeft:'3rem'}}/>
      <Card.Body className='row d-flex justify-content-between align-items-center'>
        <Card.Title>
        <h3 className='fs-5'>Maison Francis Kurkdjian Paris</h3> 
            <p>grand soir eau de parfum 2.3 oz</p>
        </Card.Title>
        <Card.Text className='fs-3'>
        ₦46,000.00
        </Card.Text>
        <Button variant="dark">Add to Cart
        </Button>
      </Card.Body>
    </Card> */}
        </div>
      
    </div>
  )
}

export default RelatedProd
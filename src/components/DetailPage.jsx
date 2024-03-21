import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../css/DetailPage.css'
import ProdImg from '../assets/images/image19.png'
import Select1 from '../assets/images/image34.png'
import Select2 from '../assets/images/image34(1).png'
import Select3 from '../assets/images/image34(2).png'
import Accordions from '../components/Accordion';
import RelatedProd from './RelatedProd';
import Plus from '../assets/images/ic_sharp-plus.png'
import Minus from '../assets/images/ic_sharp-minus.png'
import YouTube from '../components/YouTube'

// import QuantityInput from './QuantityInput';

const DetailPage = () => {
    const [count, setCount] = useState(1)

    const handleIncrease = () => {
        // count + 1;
        setCount(count + 1)
    }
    const handleDecrease = () => {
        // count - 1;
        if (count > 0) {
            setCount(count - 1);
          }
    }
  return (
   <>
    <div className='productDetail'>
        <div className="productCont">
        <div className="productImg ">
            <div className='selectImg'>
                <div>
                    <img src={Select1} alt="" />
                </div>
                <div>
                    <img src={Select2}/>
                </div>
                <div>
                    <img src={Select3}/>
                </div>
            </div>
            <div className='clickedImg'>
                <img src={ProdImg}/>
            </div>
        </div>
        <div className="productInfo">
        <Card style={{ width: '27rem' }} >
      <Card.Body className='row d-flex justify-content-between align-items-center px-4'>
        <Card.Title>
             <h3 className='fs-4'>Maison Francis Kurkdjian Paris</h3> 
             <p>grand soir eau de parfum 2.3 oz</p>
        </Card.Title>
        
        <Card.Text>
            <div className=""><p>Price: <span className='fs-5 fw-bold'>₦46,000.00</span></p></div>
          <div> <p>Size: <span>2.3 Oz</span></p> </div>
          <div> <Button className='bg-dark text-light'>2.3 Oz</Button> <Button className='bg-light text-dark border border-dark'>6.3 Oz</Button> </div>
        </Card.Text>
        <Card.Text>
        
        <div className="">
            <span className='pe-4'>Quantity:</span>
            <Button className='btn  bg-transparent rounded-0' onClick={handleDecrease}><img src={Minus} alt="" /></Button>
            <Button className='rounded-0 bg-transparent text-dark fw-bold' style={{width:'5rem', height:'2.5rem'}}>{count}</Button>
            <Button className='btn  bg-transparent rounded-0' onClick={handleIncrease}><img src={Plus} alt="" /></Button>
        </div>
        {/* <p>Quantity: <QuantityInput defaultValue={1} min={1} step={1} /></p> */}
        </Card.Text>
        <Card.Text>
          <p>Availability: <span>In stock</span> </p>
        </Card.Text>
        <Button variant="dark" className='mb-4'>Buy Now</Button>
        <Button variant="light" className='border border-dark' >Add to Cart</Button>
      </Card.Body>
     </Card>
        </div>
        </div>
    </div>

    <div className='d-flex  p-4 justify-content-between'>
    <div style={{width:'42rem', height: '100rem'}} className='row d-flex justify-content-between'>
        <Accordions height='60%'/>
        
        <YouTube height='40%'/>
      
    </div>
    <div style={{width:'30rem', height: '70rem'}} className='d-flex justify-content-center align-items-center'>
        <RelatedProd/>
    </div>
    </div>
   </>
  )
}

export default DetailPage
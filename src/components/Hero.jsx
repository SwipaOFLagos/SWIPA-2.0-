import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "../css/Hero.css"
import img1 from "../assets/images/Frame 1171276215.png"
import img2 from "../assets/images/Frame 1171276214.png"
import img3 from "../assets/images/Frame 1171276219.png"
import img4 from "../assets/images/Frame 1171276220.png"

function Hero() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} controls={false}>
      <Carousel.Item className=''>
        
        <img src={img1} text="First slide" width="100%" height="450px"/>
        <div className="main">
        <Carousel.Caption>
          <div className="text-body1">
          <h1>Classic Elegance</h1>
          <p>Discover timeless fragrances that exude sophistication and charm.</p>
          </div>
          
          <button type='button' className='btn btn-dark '>Shop Now</button>
          <button type='button' className='btn-mobile btn-dark '>Shop Now</button>
        </Carousel.Caption>
        </div>
        
      </Carousel.Item>
      <Carousel.Item>
        <img src={img2} text="Second slide" width="100%" height="450px"/>
        <Carousel.Caption>
          <div className="text-body2">
          <h1>Sensual & Seductive</h1>
          <p>Delve into alluring scents that ignite passion and intrigue.</p>
          </div>
          
          <button type='button' className='btn btn-dark'>Shop Now</button>
          <button type='button' className='btn-mobile btn-dark '>Shop Now</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img3} text="Third slide" width="100%" height="450px"/>
        <Carousel.Caption>
          <div className="text-body3">
          <h1>Fresh & Crisp</h1>
          <p>Experience invigorating fragrances that captures the essence of pure freshness.</p>
          </div>
          
          <button type='button' className='btn btn-dark'>Shop Now</button>
          <button type='button' className='btn-mobile btn-dark '>Shop Now</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img4} text="Fourth slide" width="100%" height="450px"/>
        <Carousel.Caption>
          <div className="text-body4">
          <h1>Modern Chic</h1>
          <p>Uncover contemporary scents designed for the trendsetter in you.</p>
          </div>
          
          <button type='button' className='btn btn-dark'>Shop Now</button>
          <button type='button' className='btn-mobile btn-dark '>Shop Now</button>
        </Carousel.Caption>
      </Carousel.Item>

      <div className="section">
        <div className="texts">
          
        </div>
      </div>
    </Carousel>
  );
}

export default Hero;
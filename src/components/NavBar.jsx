import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../css/NavBar.css"
import Logo from "../assets/images/Frame 579.png"
import Profileimg from "../assets/icons/Vector (1).png"
import Cartimg from "../assets/icons/Vector (2).png"
import Dropdown from 'react-bootstrap/Dropdown';
import signupimg from "../assets/images/Frame 1171276271.png"
import Dropimg from "../assets/icons/Vector (4).png"
import Seicon from "../assets/icons/Vector (5).png"
import "../css/SideNav.css"


function Menu() {
  return (
    <>
    <div className='header sticky-top'>
      <div className="top-nav">
        <div className="logo">
           <img src={Logo} alt=""/>
        </div>
        <div className="search-sec">
           <input type="text" placeholder="search" className='search md-d-nonek'/> 
           <div className='select-container'>
              <select className='select-box'>
                 <option value="">All Categories</option>
                 <option value="one">category 1</option>
                 <option value="two">category 2</option>
                 <option value="three">category 3</option>
                 <option value="four">category 4</option>
                 <option value="five">category 5</option>
              </select>
              <span>
                <button>
                  <img src={Seicon} alt="" />
                </button>
              </span>
             </div>
        </div>
        
        <div className='profile-con'>
        <div className="profile">
              <div className='pro-img'>
               <img src={Profileimg} alt="" />
              </div>
             <div className='select-container'>
              <select className='select-box'>
                 <option value="">My Account</option>
                 <option value="first"> Sign In</option>
              </select>
             </div>
        </div>

        <div className="cart-sec">
          <img src={Cartimg} alt="" />
          <p>Cart</p>
        </div>
        </div>
        </div>

    <Navbar expand="lg" className="bg-body-primary fs-5" id='bottom'>
      <Container className=''>
        <Navbar.Collapse id="basic-navbar-nav">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Nav className="me-auto">
            <Nav.Link href="#home" className='text-white'>Home</Nav.Link>
            <Nav.Link href="#link" className='text-white'>All Fragrance</Nav.Link>
            <NavDropdown className='dropp text-white' id="basic-nav-dropdown" title="All Brands" >
              <NavDropdown.Item href="#action/3.1">Adidas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Armaf</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Armani</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Calvin klein</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Dior</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Dolce & Gabbana</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Essenza</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Giorgio Armani</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Hugo Boss</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">jimmy Choo</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Lattafa</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Mont Blanc</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Ralph Lauren</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Versace</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Yves Saint Laurent</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Zaien</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link" className='text-white'>New Arrival</Nav.Link>               
            <Nav.Link href="#link" className='text-white'>Blog</Nav.Link>               
            <Nav.Link href="#link" className='text-white'>Contact Us</Nav.Link>               
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    </>

  );
}

export default Menu;
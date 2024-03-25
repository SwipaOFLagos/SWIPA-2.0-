import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import hamburger from "../assets/icons/ham.png";
import Logo from "../assets/icons/Frame 579 (0).png";
import "../css/SideBar.css";
import Searchi from "../assets/icons/Vector (5).png";
import Humani from "../assets/icons/Vector (hum).png";
import Carti from "../assets/icons/Vector (cart).png";
import SearchB from "../assets/icons/Vector (searchb).png";
import HumanB from "../assets/icons/Vector (1).png";
import CartB from "../assets/icons/Vector (2).png";
import FragLogo from "../assets/images/Frame 579.png";

function SideNav() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="off-body">
        <div className="upNav" style={{ color: "white" }}>
          <div className="left-nav">
            {/* <Button variant="" onClick={handleShow} className='off-head1 d-flex d-lg-none'> */}
            <img src={hamburger} alt="" onClick={handleShow} />
            {/* </Button> */}

            <div className="logs">
              <img src={Logo} alt="" className="logoimg" />
            </div>
          </div>

          <div className="right-icons">
            <img src={Searchi} alt="" />
            <img src={Humani} alt="" />
            <img src={Carti} alt="" />
          </div>
        </div>

        <Offcanvas show={show} onHide={handleClose}>
          <div className="show-header">
            <div className="left-logo">
              <Offcanvas.Header
                closeButton
                className="off-header"
              ></Offcanvas.Header>
              <img src={FragLogo} alt="" />
            </div>
            <div className="li-img">
              <img src={SearchB} alt="" />
              <img src={HumanB} alt="" />
              <img src={CartB} alt="" />
            </div>
          </div>
          <Offcanvas.Body className="off-main">
            <div className="">
              <ul className="first-li">
                <a href="/" style={{ textDecoration: "none", color: "white" }}>
                  <li>Home</li>
                </a>

                <a href="/" style={{ textDecoration: "none", color: "white" }}>
                  <li>All Fragrance</li>
                </a>

                <a href="/" style={{ textDecoration: "none", color: "white" }}>
                  <li>All Brands</li>
                </a>

                <a href="/" style={{ textDecoration: "none", color: "white" }}>
                  <li>New Arrival</li>
                </a>

                <a href="/" style={{ textDecoration: "none", color: "white" }}>
                  <li>Blogs</li>
                </a>

                <a href="/" style={{ textDecoration: "none", color: "white" }}>
                  <li>Contact Us</li>
                </a>
              </ul>
            </div>

            <div className="straight-line"></div>

            <div>
              <ul className="last-li">
                <a
                  href="/crew"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <li>My Account</li>
                </a>

                <a
                  href="/technology"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <li>Help</li>
                </a>

                <a
                  href="/technology"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <li>FAG</li>
                </a>

                <a
                  href="/technology"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <li>Shipping Information</li>
                </a>
              </ul>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
}

export default SideNav;

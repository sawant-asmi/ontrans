import React from 'react';
import { Navbar, Nav, Button, Image } from 'react-bootstrap';
import styles from './login.module.css';
import loginbg from './asserts/loginbg.png';
import imp from './asserts/imp.png';
import ff from './asserts/ff.png';
import owner from './asserts/owner.png';
import register from './asserts/register.png';
import footer_call from './asserts/footer_call.png';
import footer_mail from './asserts/footer_mail.png';
import footer_address from './asserts/footer_address.png';
import Chatbot from './chatbot';

const login = () => {
    return (
      <>
      <Chatbot/>
      <header className={styles.nav_fixed}>
      <Navbar bg="light" expand="lg" className={styles.nav}>
        <Navbar.Brand>
          <div className={styles.navhead}>
            <span className={styles.ontrans}>Ontrans</span>
            <span className={styles.move_with_ease}>Move with ease</span>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={styles.nav_comp}>
            <Nav.Link href="/" style={{color: '#000000',paddingRight: '30px' }}>Home</Nav.Link>
            <Nav.Link href="/about" style={{color: '#000000',paddingRight: '30px' }}>About Us</Nav.Link>
            <Nav.Link href="/services" style={{color: '#000000',paddingRight: '30px' }}>Services</Nav.Link>
            <Nav.Link href="/contact" style={{color: '#000000',paddingRight: '30px' }}>Contact Us</Nav.Link>
          </Nav>
          <Button href="/login" variant="outline-primary" className={styles.nav_login}>Login</Button>
        </Navbar.Collapse>
      </Navbar>
      </header>

<div>
<Image src={loginbg} alt="Image Description" fluid className={styles.logimg}/>
<div className={styles.logdiv} >
  <p className={styles.heading}>ACCOUNT LOGIN</p>
  <div className="container text-center">
  <div className="row">
    <div className="col">
      <div className="card" style={{width: "13rem", borderRadius: "20px", boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)", borderColor: "#F46210", borderWidth: "2px"}}>
        <div className="card-body">
          <h5 className="card-title" style={{color: "#F46210", borderWidth: "5px"}}>Client</h5>
          <hr style={{borderColor: "#F46210", borderWidth: "3px"}}/>
          <Image src={imp} onClick={() => window.location.href = '/login/importer-exporter'} alt="Image Description" fluid style={{marginTop: "25px", marginBottom: "25px", cursor: "pointer"}}/>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card" style={{width: "13rem", borderRadius: "20px", boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)", borderColor: "#F46210", borderWidth: "2px"}}>
        <div className="card-body">
          <h5 className="card-title" style={{color: "#F46210", borderWidth: "5px"}}>Freight Forwarder</h5>
          <hr style={{borderColor: "#F46210", borderWidth: "3px"}}/>
          <Image src={ff} onClick={() => window.location.href = '/login/freightForwarder'} alt="Image Description" fluid style={{marginTop: "25px", marginBottom: "25px", cursor: "pointer"}}/>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card" style={{width: "13rem", borderRadius: "20px", boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)", borderColor: "#F46210", borderWidth: "2px"}}>
        <div className="card-body">
          <h5 className="card-title" style={{color: "#F46210", borderWidth: "5px"}}>Owner</h5>
          <hr style={{borderColor: "#F46210", borderWidth: "3px"}}/>
          <Image src={owner} onClick={() => window.location.href = '/login/owner'} alt="Image Description" fluid style={{marginTop: "25px", marginBottom: "25px", cursor: "pointer"}}/>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card" style={{width: "13rem", borderRadius: "20px", boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)", borderColor: "#F46210", borderWidth: "2px"}}>
        <div className="card-body">
          <h5 className="card-title" style={{color: "#F46210", borderWidth: "5px"}}>Register</h5>
          <hr style={{borderColor: "#F46210", borderWidth: "3px"}}/>
          <Image src={register} onClick={() => window.location.href = '/register'} alt="Image Description" fluid style={{marginTop: "25px", marginBottom: "25px", cursor: "pointer"}}/>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</div>

<div className={styles.footer}>
      <div class="container text-center">
        <div class="row">
          <div class="col" style={{textAlign:"left"}}>
            <div style={{marginBottom:"50px"}}>
            <span style={{fontWeight: "700", color: "white", fontSize:"35px", whiteSpace: "pre-wrap"}}>Ontrans</span>
            <span style={{fontWeight: "200", color: "white", fontSize:"20px", display: "block"}}>Move with ease</span>
            </div>
            <div>
              <Image src={footer_call} alt="Image Description" fluid/>
              <p className={styles.footertext}>+91 22 2541 00 42</p>
            </div>
            <div>
              <Image src={footer_mail} alt="Image Description" fluid/>
              <p className={styles.footertext}>support@gstlogistics.co.in</p>
            </div>
            <div>
              <Image src={footer_address} alt="Image Description" fluid style={{marginBottom:"140px"}}/>
              <p className={styles.footertext}>B1 102 Shree Ganesh Tower, <br/> Near Gaon Devi Maiden, <br/> opp. Rajmal Lakhiman Jewellers, <br/> Nuapada, Thane West 400602</p>
            </div>
          </div>
          <div class="col" style={{textAlign:"left"}}>
            <div style={{marginBottom:"50px"}}>
            <span style={{fontWeight: "600", color: "white", fontSize:"22px", display: "block"}}>OUR INFO</span>
            </div>
            <div>
              <p className={styles.footertext}>About Us</p><br/>
              <p className={styles.footertext}>Company History</p><br/>
              <p className={styles.footertext}>Team Members</p><br/>
              <p className={styles.footertext}>Delivery Information</p><br/>
              <p className={styles.footertext}>Privacy Policy</p><br/>
              <p className={styles.footertext}>Terms & Conditions</p><br/>
              <p className={styles.footertext}>Cargo Services</p><br/>
            </div>
          </div>
          <div class="col" style={{textAlign:"left"}}>
            <div style={{marginBottom:"50px"}}>
            <span style={{fontWeight: "600", color: "white", fontSize:"22px", display: "block"}}>EXTRA</span>
            </div>
            <div>
              <p className={styles.footertext}>Brands</p><br/>
              <p className={styles.footertext}>Gift Vouchers</p><br/>
              <p className={styles.footertext}>Affiliates</p><br/>
              <p className={styles.footertext}>Specials</p><br/>
              <p className={styles.footertext}>Partners</p><br/>
              <p className={styles.footertext}>Discounts</p><br/>
              <p className={styles.footertext}>Our Networks</p><br/>
            </div>
          </div>
          <div class="col" style={{textAlign:"left"}}>
            <div style={{marginBottom:"50px"}}>
            <span style={{fontWeight: "600", color: "white", fontSize:"22px", display: "block"}}>ACCOUNT</span>
            </div>
            <div>
              <p className={styles.footertext}>My Account</p><br/>
              <p className={styles.footertext}>Order History</p><br/>
              <p className={styles.footertext}>Wish List</p><br/>
              <p className={styles.footertext}>Newsletter</p><br/>
              <p className={styles.footertext}>Checkout</p><br/>
              <p className={styles.footertext}>My Products</p><br/>
              <p className={styles.footertext}>Delivered Items</p><br/>
            </div>
          </div>
        </div>
      </div>
      <hr style={{color: "white", width: "1200px", borderWidth: "3px"}}/>
      <div>
        <p style={{color: "white", marginTop: "50px"}}>GST LOGISTICS | ALL RIGHTS RESERVED</p><br/>
      </div>
    </div>

      </>
    )
};

export default login;
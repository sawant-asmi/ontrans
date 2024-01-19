import React from 'react';
import { Navbar, Nav, Button, Image, Form } from 'react-bootstrap';
import styles from './freight_login.module.css';
import loginbg from './asserts/loginbg.png';
import loginff from './asserts/loginff.png';
import username from './asserts/username.png';
import password from './asserts/password.png';
import footer_call from './asserts/footer_call.png';
import footer_mail from './asserts/footer_mail.png';
import footer_address from './asserts/footer_address.png';

const freight_login = () => {
    return (
      <>
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
  <span style={{fontWeight: "700", fontSize: "35px"}}>LOGIN</span>
  <span style={{fontSize: "28px", fontWeight: "600", float: "right", marginRight: "100px"}}> Please Login To Your Freight Forwarder Account !</span>
  <div>
  <Image src={loginff} class="card-img-top" alt="..." style={{width:"250px", height:"250px", marginTop:"150px", marginLeft:"70px"}}/>
  <Form>
  <div style={{marginTop:"-300px", marginLeft:"236px"}}>

  <div className="input-group" style={{width:"500px", height:"60px",marginLeft:"300px", marginBottom:"35px"}}>
  <span className="input-group-text" id="basic-addon1">
  <Image src={username} alt="Image Description" fluid style={{width:"20px", height:"20px"}}/>
  </span>
  <Form.Group>
  <Form.Control type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" style={{width:"450px", height:"60px"}}/>
  </Form.Group>
</div>

<div className="input-group" style={{width:"500px", height:"60px",marginLeft:"300px"}}>
  <span className="input-group-text" id="basic-addon1">
  <Image src={password} alt="Image Description" fluid style={{width:"20px", height:"20px"}}/>
  </span>
  <Form.Group> 
  <Form.Control type="text" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" style={{width:"450px", height:"60px"}}/>
  </Form.Group> 
</div>

<Button variant="outline-primary" className={styles.login}>LOGIN</Button>
<h5 style={{float:"right", marginTop:"60px", marginRight:"130px", color:"#ef7e3d"}}>Forgot Password?</h5>

  </div>
  </Form>
  <div style={{marginTop:"40px"}}>
    <span style={{fontSize: "28px", fontWeight: "600", marginLeft:"525px", marginRight:"90px"}}>You don't have an account?</span>
    <h4 onClick={() => window.location.href = '/register'} style={{float:"right", marginRight:"130px", color:"#000080", fontWeight:"600", fontSize:"25px", marginTop:"-35px", cursor:"pointer"}}>Sign Up</h4>
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

export default freight_login;
import React from 'react';
import { Navbar, Nav, Button, Image, Form } from 'react-bootstrap';
import styles from './contact.module.css';
import contact_main from './asserts/contact_main.png';
import contact1 from './asserts/contact1.png';
import contact2 from './asserts/contact2.png';
import contact3 from './asserts/contact3.png';
import footer_call from './asserts/footer_call.png';
import footer_mail from './asserts/footer_mail.png';
import footer_address from './asserts/footer_address.png';
import Chatbot from './chatbot';

const contact = () => {
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
          <Nav.Link href="/contact" style={{color: '#F46210',paddingRight: '30px' }}>Contact Us</Nav.Link>
        </Nav>
        <Button href="/login" variant="outline-primary" className={styles.nav_login}>Login</Button>
      </Navbar.Collapse>
    </Navbar>
    </header>

    <div className={styles.container}>
      <Image src={contact_main} alt="Image Description" fluid className={styles.contact_main} />
      <div className={styles.centered}>
        <span className={styles.imgtext}>Contact Us</span>
        <span className={styles.imgtext}>Always Best Worldwide Shipping</span>
      </div>
    </div>

    <div className={styles.tag}>
      <span className={styles.tag_text}>GET IN TOUCH</span>
    </div>

    <div className={styles.text}>
      <span>Any Questions? Contact us on - </span>
    </div>

    <div style={
      {marginBottom: "110px"}
    }>
    <div class="container text-center">
  <div class="row">
    <div class="col">
    <div class="card">
  <div class="card-body" style={{boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)", display: "flex"}}>
  <Image src={contact1} alt="Image Description" fluid style={{float: 'left'}}/>
    <span className={styles.con_text1}>PHONE</span>
    <span className={styles.con_text2} style={{marginLeft: "-70px"}}>+91 22 2541 00 42</span>
  </div>
</div>
    </div>
    <div class="col">
    <div class="card">
  <div class="card-body" style={{boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)", display: "flex"}}>
  <Image src={contact2} alt="Image Description" fluid style={{float: 'left'}}/>
    <span className={styles.con_text1}>EMAIL</span>
    <span className={styles.con_text2} style={{marginLeft: "-56px"}}>support@gstlogistics.co.in</span>
  </div>
</div>
    </div>
    <div class="col">
    <div class="card">
  <div class="card-body" style={{boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)", display: "flex"}}>
  <Image src={contact3} alt="Image Description" fluid style={{float: 'left'}}/>
    <span className={styles.con_text1}>ADDRESS</span>
    <span className={styles.con_text2} style={{marginLeft: "-85px"}}>Ganesh Tower, Thane</span>
  </div>
</div>
    </div>
  </div>
</div>
    </div>

    <div className={styles.tag}>
      <span className={styles.tag_text}>NEED ANY HELP?</span>
    </div>

    <div className={styles.text}>
      <span>Send us a Message</span>
    </div>


    <Form>
    <div style={{marginBottom: "50px"}}>
    <div class="container text-center">
  <div class="row">
    <div class="col">

      <div class="container text-center">
  <div class="row" style={{marginBottom: "30px", marginTop: "60px"}}>
    <div class="col">
    <Form.Group> 
          <Form.Control type="text" placeholder= "First Name" style={{ borderWidth: "2px"}}/> 
        </Form.Group> 
    </div>
    <div class="col">
    <Form.Group> 
          <Form.Control type="text" placeholder= "Last Name" style={{ borderWidth: "2px"}}/> 
        </Form.Group> 
    </div>
  </div>

  <div class="row" style={{marginBottom: "30px"}}>
    <div class="col">
    <Form.Group> 
          <Form.Control type="number" placeholder= "Phone" style={{ borderWidth: "2px"}}/> 
        </Form.Group> 
    </div>
    <div class="col">
    <Form.Group> 
          <Form.Control type="text" placeholder= "Email Address" style={{ borderWidth: "2px"}}/> 
        </Form.Group> 
    </div>
  </div>

  <div class="row" style={{marginBottom: "30px"}}>
    <div class="col">
    <Form.Group> 
          <Form.Control as="textarea" rows={5}  placeholder= "Message" style={{ borderWidth: "2px"}}/> 
        </Form.Group> 
    </div>
  </div>

</div>
<a href="#" className="btn btn-primary" style={{backgroundColor: "#F58343", border: "none", paddingLeft: "30px",  paddingRight: "30px", float: "left", marginLeft: "15px"}}>SEND MESSAGE</a>
    </div>


    <div class="col">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.1295109206667!2d72.97234347490317!3d19.18954488203856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b92128db8cf9%3A0x3030cc7cbdd687f2!2sGST%20Logistics!5e0!3m2!1sen!2sin!4v1699339129645!5m2!1sen!2sin" width="600" height="450" style={{border: "0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>
</div>
    </div>

    </Form>

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
  );
};

export default contact;

import React from 'react';
import { Navbar, Nav, Button, Image } from 'react-bootstrap';
import styles from './services.module.css';
import services_main from './asserts/services_main.png';
import sea from './asserts/sea.png';
import air from './asserts/air.png';
import service1 from './asserts/service1.png';
import service2 from './asserts/service2.png';
import service3 from './asserts/service3.png';
import service4 from './asserts/service4.png';
import service5 from './asserts/service5.png';
import service6 from './asserts/service6.png';
import service7 from './asserts/service7.png';
import service8 from './asserts/service8.png';
import footer_call from './asserts/footer_call.png';
import footer_mail from './asserts/footer_mail.png';
import footer_address from './asserts/footer_address.png';
import Chatbot from './chatbot';

const services = () => {
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
          <Nav.Link href="/services" style={{color: '#F46210',paddingRight: '30px' }}>Services</Nav.Link>
          <Nav.Link href="/contact" style={{color: '#000000',paddingRight: '30px' }}>Contact Us</Nav.Link>
        </Nav>
        <Button href="/login" variant="outline-primary" className={styles.nav_login}>Login</Button>
      </Navbar.Collapse>
    </Navbar>
    </header>
    <div className={styles.container}>
      <Image src={services_main} alt="Image Description" fluid className={styles.services_main} />
      <div className={styles.centered}>
        <span className={styles.imgtext}>Solutions</span>
        <span className={styles.imgtext}>Always Best Worldwide Shipping</span>
      </div>
    </div>

    <div className={styles.tag}>
      <span className={styles.tag_text}>OUR SERVICES</span>
    </div>
    
    <div className={styles.text}>
    MOVING YOUR PRODUCTS ACROSS ALL BORDERS SAFELY
    </div>

    <div>
    <div className="container text-center" style={{padding:"100px", marginLeft: "260px", maxWidth: "80%"}}>
  <div className="row">
    <div className="col" >
    
    <div className="card" style={{width: "16rem",height:"20rem",backgroundColor:"#7676C2", boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.2)"}}>
  <div className="card-body">
    <h5 className="card-title" style={{color:"#FF9F69", padding:"20px", fontSize:"25px"}}>SEA FREIGHT</h5>
    <p className="card-text" style={{fontSize:"20px", color:"#ffffff"}}>Fast, Reliable and accurate Shipment services right at your ease.</p>
    {/* <Image src={sea} alt="Image Description" fluid style={{width:"100px", height:"100px", marginLeft:"200px"}}/> */}
  </div>
  <Image src={sea} alt="Image Description" fluid style={{width:"100px", height:"100px", marginLeft:"200px", marginRight:"300px", marginTop:"10px"}}/>
</div>

    </div>
    <div className="col">
    <div className="card" style={{width: "16rem",height:"20rem", backgroundColor:"#7676C2", boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.2)"}}>
  <div className="card-body">
    <h5 className="card-title" style={{color:"#FF9F69", padding:"20px", fontSize:"25px"}}>AIR FREIGHT </h5>
    <p className="card-text" style={{fontSize:"20px", color:"#ffffff"}}>Fast, Reliable and accurate Shipment services right at your at your ease.</p>
    {/* <Image src={sea} alt="Image Description" fluid style={{width:"100px", height:"100px", marginLeft:"200px"}}/> */}
  </div>
  <Image src={air} alt="Image Description" fluid style={{width:"100px", height:"100px", marginLeft:"200px", marginRight:"300px", marginTop:"10px"}}/>
</div>
    </div>
    
  </div>
</div>
    </div>

    {/**services ke cards */}
    <div style={{maxWidth: "90%", marginLeft: "110px"}}>
    <div className="container text-center">
  <div className="row" style={{padding:"50px 0px30px 0px"}}>
    <div className="col">
    <Image src={service1} alt="Image Description" fluid style={{width:"70px", height:"80px", marginLeft:"115px", marginRight:"300px", marginTop:"10px"}}/>
    <div className="card" style={{width: "20rem", padding:"20px", boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.2)",height:"400px"}}>
  <div className="card-body">
    <h5 className="card-title">ISO Tank Container</h5>
    {/* <h6 className="card-subtitle mb-2 text-body-secondary" style={{padding:"10px", color:"#FF9F69"}}>**  Why choose us ?  **</h6> */}
<p style={{padding:"10px", color:"#FF9F69", fontWeight:"500", marginTop:"35px"}}>**  Why choose us ?  **</p>
    <p className="card-text" style={{textAlign:"left", marginTop:"20px", fontWeight:"500"}}>* Reliability<br/>
* Greater Flexibility<br/>
* Space Economy<br/>
* Environmentally Friendly<br/>
* Efficiency<br/></p>
  </div>
</div>
    </div>
    <div className="col">
    <Image src={service2} alt="Image Description" fluid style={{width:"70px", height:"80px", marginLeft:"115px", marginRight:"300px", marginTop:"10px"}}/>
    <div className="card" style={{width: "20rem", padding:"20px", boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.2)",height:"400px"}}>
  <div className="card-body">
    <h5 className="card-title">Pharmaceuticals & Chemicals</h5>
    {/* <h6 className="card-subtitle mb-2 text-body-secondary" style={{padding:"10px", color:"#FF9F69"}}>**  Why choose us ?  **</h6> */}
<p style={{padding:"10px", color:"#FF9F69", fontWeight:"500"}}>**  Why choose us ?  **</p>
    <p className="card-text" style={{marginTop:"20px", fontWeight:"500",  textAlign: "justify"}}>
    With an expertise and knowledge of 22 years, we have become an ideal choice when it came to handling pharmaceutical & chemical products with smooth and speedy clearance.
    </p>
  </div>
</div>
    </div>
    <div className="col">
      <Image src={service3} alt="Image Description" fluid style={{width:"70px", height:"80px", marginLeft:"115px", marginRight:"300px", marginTop:"10px"}}/>
    <div className="card" style={{width: "20rem", padding:"20px", boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.2)",height:"400px"}}>
  <div className="card-body">
    <h5 className="card-title">Cold Storage & Cargo</h5>
    {/* <h6 className="card-subtitle mb-2 text-body-secondary" style={{padding:"10px", color:"#FF9F69"}}>**  Why choose us ?  **</h6> */}
<p style={{padding:"10px", color:"#FF9F69", fontWeight:"500", marginTop:"35px"}}>**  Why choose us ?  **</p>
    <p className="card-text" style={{marginTop:"20px", fontWeight:"500", textAlign: "justify"}}>With an expertise and knowledge of 22 years, we have become an ideal choice when it came to handling pharmaceutical & chemical products with smooth and speedy clearance.</p>
  </div>
</div>
    </div>
  </div>

  <div className="row" style={{padding:"50px 0px 30px 0px"}}>
    <div className="col">
      <Image src={service4} alt="Image Description" fluid style={{width:"70px", height:"80px", marginLeft:"115px", marginRight:"300px", marginTop:"10px"}}/>
    <div className="card" style={{width: "20rem", padding:"20px", boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.2)",height:"400px"}}>
  <div className="card-body">
    <h5 className="card-title">Training Of Shipping</h5>
    {/* <h6 className="card-subtitle mb-2 text-body-secondary" style={{padding:"10px", color:"#FF9F69"}}>**  Why choose us ?  **</h6> */}
<p style={{padding:"10px", color:"#FF9F69", fontWeight:"500", marginTop:"35px"}}>**  Why choose us ?  **</p>
    <p className="card-text" style={{marginTop:"20px", fontWeight:"500", textAlign: "justify"}}>International trade operations and the functions of various trades, Containarization & its types & Port, terminal, CY and CFS Operations, Impact of INCOTERMS and Letter of credit on Bill of landing and marketing</p>
  </div>
</div>
    </div>
    <div className="col">
      <Image src={service5} alt="Image Description" fluid style={{width:"70px", height:"80px", marginLeft:"115px", marginRight:"300px", marginTop:"10px"}}/>
    <div className="card" style={{width: "20rem", padding:"20px", boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.2)",height:"400px"}}>
  <div className="card-body">
    <h5 className="card-title">Customer’s Broker Consultancy</h5>
    {/* <h6 className="card-subtitle mb-2 text-body-secondary" style={{padding:"10px", color:"#FF9F69"}}>**  Why choose us ?  **</h6> */}
<p style={{padding:"10px", color:"#FF9F69", fontWeight:"500"}}>**  Why choose us ?  **</p>
    <p className="card-text" style={{marginTop:"20px", fontWeight:"500", textAlign: "justify"}}>International trade operations and the functions of various trades, Containarization & its types & Port, terminal, CY and CFS Operations, Impact of INCOTERMS and Letter of credit on Bill of landing and marketing</p>
  </div>
</div>
    </div>
    <div className="col">
      <Image src={service6} alt="Image Description" fluid style={{width:"70px", height:"80px", marginLeft:"115px", marginRight:"300px", marginTop:"10px"}}/>
    <div className="card" style={{width: "20rem", padding:"20px", boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.2)",height:"400px"}}>
  <div className="card-body">
    <h5 className="card-title">Projects & OOG Cargo </h5>
    {/* <h6 className="card-subtitle mb-2 text-body-secondary" style={{padding:"10px", color:"#FF9F69"}}>**  Why choose us ?  **</h6> */}
<p style={{padding:"10px", color:"#FF9F69", fontWeight:"500", marginTop:"35px"}}>**  Why choose us ?  **</p>
    <p className="card-text" style={{marginTop:"20px", fontWeight:"500", textAlign: "justify"}}>Proper Lashing & Securing of ODC Cargo
Customeries Training
Container Load Plan
Survey Report of Executed Shipment</p>
  </div>
</div>
    </div>
  </div>

  <div className="row" style={{padding:"50px 0px 30px 200px", marginLeft:"-70px"}}>
    <div className="col">
      <Image src={service7} alt="Image Description" fluid style={{width:"70px", height:"80px", marginLeft:"50px", marginRight:"300px", marginTop:"10px"}}/>
    <div className="card" style={{width: "20rem", padding:"20px", boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.2)",height:"400px"}}>
  <div className="card-body">
    <h5 className="card-title">FEMG & DGFT Consultancy</h5>
    {/* <h6 className="card-subtitle mb-2 text-body-secondary" style={{padding:"10px", color:"#FF9F69"}}>**  Why choose us ?  **</h6> */}
<p style={{padding:"10px", color:"#FF9F69", fontWeight:"500", marginTop:"35px"}}>**  Why choose us ?  **</p>
    <p className="card-text" style={{marginTop:"20px", fontWeight:"500", textAlign: "justify"}}>Applications of MEIS & SEIS License
EPCG License
Advance License
DGFT Related Activities
DFIA License</p>
  </div>
</div>
    </div>
    <div className="col">
      <Image src={service8} alt="Image Description" fluid style={{width:"70px", height:"80px", marginLeft:"50px", marginRight:"300px", marginTop:"10px"}}/>
    <div className="card" style={{width: "20rem", padding:"20px", boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.2)",height:"400px"}}>
  <div className="card-body">
    <h5 className="card-title">Haz Container</h5>
    {/* <h6 className="card-subtitle mb-2 text-body-secondary" style={{padding:"10px", color:"#FF9F69"}}>**  Why choose us ?  **</h6> */}
<p style={{padding:"10px", color:"#FF9F69", fontWeight:"500", marginTop:"35px"}}>**  Why choose us ?  **</p>
    <p className="card-text" style={{marginTop:"20px", fontWeight:"500", textAlign: "justify"}}>Haz and Non-Haz Shipments
Expertise in Haz Documentation
UN Certified Package
Dangerous Goods Certified Staff</p>
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
  );
};

export default services;

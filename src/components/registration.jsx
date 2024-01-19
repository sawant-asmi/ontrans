import { useState, useEffect, React } from 'react';
import { Navbar, Nav, Button, Image, Form } from 'react-bootstrap';
import styles from './registration.module.css';
import registerbg from './asserts/registerbg.png';
import register from './asserts/register.png';
import imp from './asserts/imp.png';
import ff from './asserts/ff.png';
import login_icon from './asserts/login_icon.png';
import Chatbot from './chatbot';



const Registration = () => {
    

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

<div className={styles.block}>
<Image src={registerbg} alt="Image Description" fluid className={styles.logimg}/>
<div>
<Image src={register} alt="Image Description" fluid className={styles.regimg}/>
</div>


<div className={styles.logdiv} >


<Form>

<Form.Group> 
  <Form.Label style={{color:"#f3894c", fontSize: "40px", fontWeight: "600", textAlign: "center", display:"block", marginBottom:"30px"}}>Choose Your Role To Register!</Form.Label><br/>
</Form.Group> 


  <div className="container text-center">
  <div className="row">
    <div className="col" style={{marginLeft:"10px"}}>
      <div className="card" style={{width: "13rem", borderRadius: "20px", boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)", borderColor: "#F46210", borderWidth: "2px"}}>
        <div className="card-body">
          <h5 className="card-title" style={{color: "#F46210", borderWidth: "5px"}}>Client</h5>
          <hr style={{borderColor: "#F46210", borderWidth: "3px"}}/>
          <Image src={imp} onClick={() => window.location.href = '/register/client'} alt="Image Description" fluid style={{marginTop: "25px", marginBottom: "25px", cursor: "pointer"}}/>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card" style={{width: "13rem", borderRadius: "20px", boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)", borderColor: "#F46210", borderWidth: "2px"}}>
        <div className="card-body">
          <h5 className="card-title" style={{color: "#F46210", borderWidth: "5px"}}>Freight Forwarder</h5>
          <hr style={{borderColor: "#F46210", borderWidth: "3px"}}/>
          <Image src={ff} onClick={() => window.location.href = '/register/ff'} alt="Image Description" fluid style={{marginTop: "25px", marginBottom: "25px", cursor: "pointer"}}/>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card" style={{width: "13rem", borderRadius: "20px", boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)", borderColor: "#F46210", borderWidth: "2px"}}>
        <div className="card-body">
          <h5 className="card-title" style={{color: "#F46210", borderWidth: "5px"}}>Login</h5>
          <hr style={{borderColor: "#F46210", borderWidth: "3px"}}/>
          <Image src={login_icon} onClick={() => window.location.href = '/login'} alt="Image Description" fluid style={{marginTop: "25px", marginBottom: "25px", cursor: "pointer"}}/>
        </div>
      </div>
    </div>
    
  </div>
  </div>




</Form>  
</div>

</div>

      </>
    )
};

export default Registration;
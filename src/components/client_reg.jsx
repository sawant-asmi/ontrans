import { React } from 'react';
import { Navbar, Nav, Button, Image, Form } from 'react-bootstrap';
import styles from './client_reg.module.css';
import registerbg from './asserts/registerbg.png';
import register from './asserts/register.png';
import imp from './asserts/imp.png';
import ff from './asserts/ff.png';
import login_icon from './asserts/login_icon.png';



const client_reg = () => {   
    
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

<div className={styles.block}>
<Image src={registerbg} alt="Image Description" fluid className={styles.logimg}/>
<div>
<Image src={imp} alt="Image Description" fluid className={styles.regimg}/>
</div>


<div className={styles.logdiv} >


<Form>



<Form.Group> 
  <Form.Label style={{color:"#f3894c", fontSize: "40px", fontWeight: "600", textAlign: "center", display:"block", marginBottom:"40px"}}>Register Here</Form.Label><br/>
</Form.Group>  

<Form.Group style={{marginBottom:"30px"}}> 
  <Form.Label style={{fontSize: "18px", fontWeight: "500"}}>Company Name</Form.Label>
  <Form.Control type="text" placeholder= "Enter Company Name" style={{width:"780px", height:"45px", borderRadius:"15px", boxShadow: "0px 3px 5px 0px rgba(0, 0, 0, 0.5)"}}/> 
</Form.Group> 

<Form.Group style={{marginBottom:"30px"}}> 
  <Form.Label style={{fontSize: "18px", fontWeight: "500"}}>Pan ID</Form.Label>
  <Form.Control type="text" placeholder= "Enter Pan ID" style={{width:"780px", height:"45px", borderRadius:"15px", boxShadow: "0px 3px 5px 0px rgba(0, 0, 0, 0.5)"}}/> 
</Form.Group> 

<Form.Group style={{marginBottom:"30px"}}> 
  <Form.Label style={{fontSize: "18px", fontWeight: "500"}}>GST No.</Form.Label>
  <Form.Control type="text" placeholder= "Enter GST No." style={{width:"780px", height:"45px", borderRadius:"15px", boxShadow: "0px 3px 5px 0px rgba(0, 0, 0, 0.5)"}}/> 
</Form.Group> 

<Form.Group style={{marginBottom:"30px"}}> 
  <Form.Label style={{fontSize: "18px", fontWeight: "500"}}>IEC No.</Form.Label>
  <Form.Control type="text" placeholder= "Enter IEC No." style={{width:"780px", height:"45px", borderRadius:"15px", boxShadow: "0px 3px 5px 0px rgba(0, 0, 0, 0.5)"}}/> 
</Form.Group> 

<Form.Group style={{marginBottom:"30px"}}> 
  <Form.Label style={{fontSize: "18px", fontWeight: "500"}}>Email ID</Form.Label>
  <Form.Control type="text" placeholder= "Enter Email ID" style={{width:"780px", height:"45px", borderRadius:"15px", boxShadow: "0px 3px 5px 0px rgba(0, 0, 0, 0.5)"}}/> 
</Form.Group> 

<Form.Group style={{marginBottom:"30px"}}> 
  <Form.Label style={{fontSize: "18px", fontWeight: "500"}}>Mobile Number</Form.Label>
  <Form.Control type="text" placeholder= "Enter Mobile Number" style={{width:"780px", height:"45px", borderRadius:"15px", boxShadow: "0px 3px 5px 0px rgba(0, 0, 0, 0.5)"}}/> 
</Form.Group>

<Form.Group style={{marginBottom:"30px"}}> 
  <Form.Label style={{fontSize: "18px", fontWeight: "500"}}>Contact Person Name</Form.Label>
  <Form.Control type="text" placeholder= "Contact Person Name" style={{width:"780px", height:"45px", borderRadius:"15px", boxShadow: "0px 3px 5px 0px rgba(0, 0, 0, 0.5)"}}/> 
</Form.Group>

<Form.Group style={{marginBottom:"30px"}}> 
  <Form.Label style={{fontSize: "18px", fontWeight: "500"}}>Contact Person Number</Form.Label>
  <Form.Control type="text" placeholder= "Contact Person Number" style={{width:"780px", height:"45px", borderRadius:"15px", boxShadow: "0px 3px 5px 0px rgba(0, 0, 0, 0.5)"}}/> 
</Form.Group>

<Form.Group style={{marginBottom:"30px"}}> 
  <Form.Label style={{fontSize: "18px", fontWeight: "500"}}>Username</Form.Label>
  <Form.Control type="text" placeholder= "Enter Username" style={{width:"780px", height:"45px", borderRadius:"15px", boxShadow: "0px 3px 5px 0px rgba(0, 0, 0, 0.5)"}}/> 
</Form.Group> 

<Form.Group style={{marginBottom:"30px"}}> 
  <Form.Label style={{fontSize: "18px", fontWeight: "500"}}>Password</Form.Label>
  <Form.Control type="text" placeholder= "Enter Password" style={{width:"780px", height:"45px", borderRadius:"15px", boxShadow: "0px 3px 5px 0px rgba(0, 0, 0, 0.5)"}}/> 
</Form.Group> 

<Form.Group style={{marginBottom:"30px"}}> 
  <Form.Label style={{fontSize: "18px", fontWeight: "500"}}>Re-enter Password</Form.Label>
  <Form.Control type="text" placeholder= "Re-enter Password" style={{width:"780px", height:"45px", borderRadius:"15px", boxShadow: "0px 3px 5px 0px rgba(0, 0, 0, 0.5)"}}/> 
</Form.Group>

<Form.Group> 
  <Form.Label style={{fontWeight: "500", fontSize:"18px", float:"left", marginRight:"60px", marginTop:"5px"}}>First Time As A Exporter/Importer</Form.Label> 
  <Form.Select style={{width:"150px", borderRadius:"30px", marginTop:"50px", height:"40px", boxShadow: "0px 3px 5px 0px rgba(0, 0, 0, 0.5)"}}><option>Select</option>
    <option value="1">Yes</option>
    <option value="2">No</option>
    </Form.Select>
</Form.Group>

<Button href='#' className={styles.signup}>Sign Up</Button>
<div style={{marginTop:"30px"}}>
  <span style={{fontSize: "20px", fontWeight: "400", color:"#f3894c", marginLeft:"237px"}}>Already Have An Account ?</span>
  <h4 onClick={() => window.location.href = '/login/importer-exporter'} style={{float:"right", color:"#000080", fontWeight:"400", fontSize:"20px", marginTop:"3px", cursor:"pointer", marginRight:"243px"}}>Sign In</h4>
</div>

</Form>


  

 
    
  




 
</div>

</div>

      </>
    )
};

export default client_reg;
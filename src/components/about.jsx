import React from 'react';
import { Navbar, Nav, Button, Image } from 'react-bootstrap';
import styles from './about.module.css';
import about_main from './asserts/about_main.png';
import about_profile from './asserts/about_profile.png';
import Chatbot from './chatbot';

const about = () => {
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
          <Nav.Link href="/about" style={{color: '#F46210',paddingRight: '30px' }}>About Us</Nav.Link>
          <Nav.Link href="/services" style={{color: '#000000',paddingRight: '30px' }}>Services</Nav.Link>
          <Nav.Link href="/contact" style={{color: '#000000',paddingRight: '30px' }}>Contact Us</Nav.Link>
        </Nav>
        <Button href="/login" variant="outline-primary" className={styles.nav_login}>Login</Button>
      </Navbar.Collapse>
    </Navbar>
    </header>
    <div className={styles.container}>
      <Image src={about_main} alt="Image Description" fluid className={styles.about_main} />
      <div className={styles.centered}>
        <span className={styles.imgtext}>About Us</span>
        <span className={styles.imgtext}>Always Best Worldwide Shipping</span>
      </div>
    </div>

    <div className={styles.tag}>
      <span className={styles.tag_text}>OUR TEAM MEMBERS</span>
    </div>

    <div style={{marginTop: "60px", marginLeft: "100px"}}>
    <div className="container text-center">
  <div className="row" style={{marginBottom: "50px"}}>
    <div className="col">
    <div className="card" style={{width: "18rem", boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.2)"}}>
    <Image src={about_profile} class="card-img-top" alt="..." style={{padding: "0px 70px", paddingTop: "20px"}}/>
  <div className="card-body">
    <h5 className="card-title" style={{fontWeight: "700"}}>CONNOR BIRNEY</h5>
    <h6  style={{color: "#F46210"}}>Director</h6>
    <p className="card-text" style={{color: "#6161B5"}}>Team work makes the dream work !</p>
  </div>
</div>
    </div>
    <div class="col">
    <div className="card" style={{width: "18rem", boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.2)"}}>
    <Image src={about_profile} class="card-img-top" alt="..." style={{padding: "0px 70px", paddingTop: "20px"}}/>
  <div className="card-body">
    <h5 className="card-title" style={{fontWeight: "700"}}>CONNOR BIRNEY</h5>
    <h6  style={{color: "#F46210"}}>Director</h6>
    <p className="card-text" style={{color: "#6161B5"}}>Team work makes the dream work !</p>
  </div>
</div>
    </div>
    <div class="col">
    <div className="card" style={{width: "18rem", boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.2)"}}>
    <Image src={about_profile} class="card-img-top" alt="..." style={{padding: "0px 70px", paddingTop: "20px"}}/>
  <div className="card-body">
    <h5 className="card-title" style={{fontWeight: "700"}}>CONNOR BIRNEY</h5>
    <h6  style={{color: "#F46210"}}>Director</h6>
    <p className="card-text" style={{color: "#6161B5"}}>Team work makes the dream work !</p>
  </div>
</div>
    </div>
  </div>

  <div class="row" style={{marginBottom: "50px"}}>
    <div class="col">
    <div className="card" style={{width: "18rem", boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.2)"}}>
    <Image src={about_profile} class="card-img-top" alt="..." style={{padding: "0px 70px", paddingTop: "20px"}}/>
  <div className="card-body">
    <h5 className="card-title" style={{fontWeight: "700"}}>CONNOR BIRNEY</h5>
    <h6  style={{color: "#F46210"}}>Director</h6>
    <p className="card-text" style={{color: "#6161B5"}}>Team work makes the dream work !</p>
  </div>
</div>
    </div>
    <div class="col">
    <div className="card" style={{width: "18rem", boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.2)"}}>
    <Image src={about_profile} class="card-img-top" alt="..." style={{padding: "0px 70px", paddingTop: "20px"}}/>
  <div className="card-body">
    <h5 className="card-title" style={{fontWeight: "700"}}>CONNOR BIRNEY</h5>
    <h6  style={{color: "#F46210"}}>Director</h6>
    <p className="card-text" style={{color: "#6161B5"}}>Team work makes the dream work !</p>
  </div>
</div>
    </div>
    <div class="col">
    <div className="card" style={{width: "18rem", boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.2)"}}>
    <Image src={about_profile} class="card-img-top" alt="..." style={{padding: "0px 70px", paddingTop: "20px"}}/>
  <div className="card-body">
    <h5 className="card-title" style={{fontWeight: "700"}}>CONNOR BIRNEY</h5>
    <h6  style={{color: "#F46210"}}>Director</h6>
    <p className="card-text" style={{color: "#6161B5"}}>Team work makes the dream work !</p>
  </div>
</div>
    </div>
  </div>

</div>
    </div>

    <div className={styles.tag}>
      <span className={styles.tag_text}>OUR COMPANY</span>
    </div>

    <div className={styles.about}>
    GST is an International Logistics Company who handle Supply Chain Management need of Exporters and Importers.
We have a GOAL of providing services to our clients in a Comprehensive, Quality-driven and a Timely manner.
Our dedicated and experienced professionals always provide you with tailor-made logistics solutions, suitable for your particular needs.
GST logistics focuses on serving customers with global sourcing and supply chain management needs, creating value through innovative end-to-end international logistics programs.
Our core values are to maintain transparency, well-timed service and good relationship with our customers. Also, teamwork and continuous innovation is the foundation of our staff.
    </div>

    <div className={styles.tag}>
      <span className={styles.tag_text}>OUR VISION & MISSION</span>
    </div>

    <div className={styles.vision}>
      <p style={{fontWeight: "700", fontSize: "25px", textAlign: "right"}}>VISION</p>
    To be customers obvious choice by providing total logistics solution through innovative & reliable service. <br/>To grow in a steady & responsible pace to a position of strength in area of operation.
    </div>
    <div className={styles.mission} style={{textAlign: "right"}}>
    <p style={{fontWeight: "700", fontSize: "25px", textAlign: "left"}}>MISSION</p>
    Think with clarity & courage.<br/>
    Act wisely & on time.<br/>
    Achieve goals with confidence.</div>

    

    </>
  );
};

export default about;

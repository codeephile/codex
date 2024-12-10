import React, { useState } from 'react'
import { Container, Row, Col, Form, Button, Nav, NavLink } from 'react-bootstrap'

const Footer = () => {

  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });

  const handleInputChange = (e) =>{
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submited with data: ', formData);
    //clear the form after submission
    setFormData({
      email: '',
      message: ''
    })
  }
  return (
    <div>
      <Container fluid>
        <Row className='bg-light text-dark p-4'>
          <Col className='formbox'>
  
            <Form onSubmit={handleSubmit}>
                <Form.Control 
                    type="email" 
                    name="email" 
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange} />
                <Form.Control 
                    as="textarea" 
                    rows={5}
                    placeholder="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange} />
                <Button type="submit" className="btn btn-primary">Send</Button>
            </Form>
    
          </Col>
          <Col className='nav-container'>
          <Nav className="flex-column">
            <h5>Our Links</h5>
              <NavLink href="#">Instagram</NavLink>
              <NavLink href="#">Facebook</NavLink>
              <NavLink href="#">Twitter</NavLink>
              <NavLink href="#">Updates</NavLink>
          </Nav>
          </Col>
          <Col className='contact-us'>
            <h5>Contact Us!</h5>
            <p>codex@examplemail.com</p>
            <p>Phone: +1(800)123-4567</p>
          </Col>
          <p>&copy;CODEX</p>
        </Row>
     
      </Container>
    </div>
  )
}

export default Footer


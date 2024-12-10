import React, { useState } from 'react';
import { Card, Row, Col, Button, CardText } from 'react-bootstrap';
import xImage from '../assets/images/g1.jpg';
import xImage2 from '../assets/images/g2.jpg';
import xImage3 from '../assets/images/g3.jpg';
import xImage4 from '../assets/images/g4.jpg';
import xImage5 from '../assets/images/g5.jpg';
import xImage6 from '../assets/images/g6.jpg';
import Gallery from '../components/Gallery';
import profile from '../assets/images/sock1.avif';
import profile2 from '../assets/images/sock2.avif';
import profile3 from '../assets/images/sock3.avif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';;

const Home = () => {
  const images = [
    xImage, xImage2, xImage3, xImage4, xImage5, xImage6, xImage, xImage, xImage, xImage
  ]; 
  
  const imagesPerPage = 3; // Number of images visible at once
  const totalImages = images.length;
  const totalPages = Math.ceil(totalImages / imagesPerPage);

  const [currentPage, setCurrentPage] = useState(0); 

  // Handle page click (Next or Previous)
  const handlePageClick = (direction) => {
    if (direction === 'next' && currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    } else if (direction === 'prev' && currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <section id='home' className='hero-section'>
        <div className='hero-image'>
          <div className='hero-text'>
            <h1>Snowy Christmas</h1>
            <p>Wish you 'Merry X-max & Happy New Year'</p>
            <a href='#about'>
              <button className='click-btn'>
              <FontAwesomeIcon icon={faArrowDown} />
              </button>
            </a>
          </div>
        </div>
      </section><br/>

      <section id='about'>
        <h1>Gallery</h1>
        <Card className='border-0 shadow-none rounded-0'>
          <Card.Body>
            {/* Wrapper to control overflow and show the "sliding" effect */}
            <div className="image-slider-wrapper" style={{ overflow: 'hidden', width: '100%' }}>
              <div
                className="image-slider"
                style={{
                  display: 'flex',
                  transition: 'transform 0.5s ease-in-out',
                  transform: `translateX(-${currentPage * (100 / totalPages)}%)`,
                }}
              >
                {images.map((image, index) => (
                  <div className="image-item" style={{ minWidth: `${100 / totalPages}%` }} key={index}>
                    <Card.Img
                      src={image}
                      alt="Card image"
                      style={{ height: '350px', width: '200px', margin: '0 auto' }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </Card.Body>
        </Card>
              {/* Pagination Buttons */}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Button
          onClick={() => handlePageClick('prev')}
          disabled={currentPage === 0}
          className='pagination-btn'
          style={{ marginRight: '10px', 
            backgroundColor: '#ff7878',
            borderColor: '#ff7878',
          }}
        >
          Previous
        </Button>
        <Button
          onClick={() => handlePageClick('next')}
          disabled={currentPage === totalPages - 1}
          className='pagination-btn'
          style={{ backgroundColor: '#74d680'}}
        >
          Next
        </Button>
      </div>
      </section><br/>

      <section id='update'>
        <div className='hero'>
          <h1>Welcome to Our Christmas Wonderland</h1>
          <p>
          Get ready to spread some holiday cheer with our handpicked collection of unique Christmas gifts, 
          decorations, and festive essentials. Whether you're shopping for loved ones or adding sparkle to your home, 
          we have everything you need to make this Christmas unforgettable!</p>
        </div>
        <Row className="justify-content-center g-5"> 
          <Col xs={12} sm={6} md={4} lg={3}>
            <Card className="h-100 update-card" >
              <Card.Img variant="top" src={profile} className='round-img'/>
                <Card.Body>
                  <Card.Text className='update-text'>
                    <p>Assistant Leader</p>
                  </Card.Text>
                <Button className='seemore'>See More</Button>
              </Card.Body>
            </Card>
          </Col>
      
          <Col xs={12} sm={6} md={4} lg={3}> 
            <Card className="h-100 update-card">
              <Card.Img variant="top" src={profile2} className='round-img' />
                <Card.Body>
                  <CardText className='update-text'>
                    <p>Manager</p>
                  </CardText>
                <Button className='seemore'>See More</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={4} lg={3}> 
            <Card className="h-100 update-card">
              <Card.Img variant="top" src={profile3} className='round-img'/>
                <Card.Body>
                  <Card.Text className='update-text'>
                    <p>Director CEO</p>
                  </Card.Text>
                <Button className='seemore'>See More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default Home;

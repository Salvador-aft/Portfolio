import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import './Sampler.css';
import projectECommerce from './images/ecommerce.gif';
import projectLandingPage from './images/landing-page.gif';
import projectValidation from './images/validation.gif';
import styled from 'styled-components';

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  &:hover .overlay {
    opacity: 1;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  transition: opacity 0.3s ease;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s ease;
`;

const Button = styled.a`
  background-color: transparent;
  color: #fff;
  border: 2px solid #fff;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #fff;
    color: black;
  }
`;

const StyledButton = styled.a`
  background-color: #D5213A;
  color: #fff;
  display: inline-block;
  padding: 10px 20px;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #C21829;
  }
`;

const CustomContainer = styled.div`
  background-color: #19142A;
  padding: 3rem 3rem 3rem 9rem;
  @media (max-width: 1700px) {
    padding: 3rem 3rem 3rem 6rem;
  }
  @media (max-width: 768px) {
    padding: 3rem 3rem 3rem 3rem;
  }
`;

function Sampler(props) {
  return (
    <CustomContainer>
      <Container fluid className="pt-5">
        <div id="body-text" className="text-center">
          <h1 className="text-white">Portfolio</h1>
          <h6 className="text-white">
            Here you will find detailed information <br />
            about my professional projects
          </h6>
        </div>
        <Container className="mt-5">
          <Row className="mt-5">
            <Col xs={12} md={4} className="mb-3 mb-md-0">
              <ImageContainer>
                <a href="https://github.com/Salvador-aft/Ecommerce-project" target="_blank" rel="noopener noreferrer">
                  <Image src={projectECommerce} />
                  <Overlay className="overlay">
                    <Button href="https://github.com/Salvador-aft/Ecommerce-project" target="_blank" rel="noopener noreferrer">More details</Button>
                  </Overlay>
                </a>
              </ImageContainer>
            </Col>
            <Col xs={12} md={4} className="mb-3 mb-md-0">
              <ImageContainer>
                <a href="https://github.com/Salvador-aft/Landing-Page---MinuteMaid" target="_blank" rel="noopener noreferrer">
                  <Image src={projectLandingPage} />
                  <Overlay className="overlay">
                    <Button href="https://github.com/Salvador-aft/Landing-Page---MinuteMaid" target="_blank" rel="noopener noreferrer">More details</Button>
                  </Overlay>
                </a>
              </ImageContainer>
            </Col>
            <Col xs={12} md={4}>
              <ImageContainer>
                <a href="https://github.com/Salvador-aft/Verification-project" target="_blank" rel="noopener noreferrer">
                  <Image src={projectValidation} alt="Project Validation" />
                  <Overlay className="overlay">
                    <Button href="https://github.com/Salvador-aft/Verification-project" target="_blank" rel="noopener noreferrer">More details</Button>
                  </Overlay>
                </a>
              </ImageContainer>
            </Col>
          </Row>
        </Container>
        <div className='text-center pb-5'>
          <StyledButton href="https://github.com/Salvador-aft?tab=repositories" target="_blank" rel="noopener noreferrer" className="btn solid-border text-white mt-5">View All</StyledButton>
        </div>
      </Container>
    </CustomContainer>
  );
}

export default Sampler;
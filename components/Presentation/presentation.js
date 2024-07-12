import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import personImage from '../Header/images/person.png';
import followImage from '../Header/images/follow.svg';
import followImageHorizontal from '../Header/images/follow-hor.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';

const StyledContainer = styled.div`
  background-color: #19142A;
  padding: 50px 15px;
  height: 620px;
  @media (min-width: 992px) {
    padding: 50px 0;
  }
  @media (max-width: 992px) {
    height: auto;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  max-width: 1000px;
  padding-left: 300px;
  @media (max-width: 1700px) {
    padding-left: 100px;
  }
  @media (max-width: 993px) {
    padding-left: 0px;
  }
`;

const PersonContainer = styled.div`
  flex: 1;
  text-align: center;
  margin-left: 0;
  max-width: 550px;
  min-width: 253px;
`;

const FollowContainer = styled.div`
  flex: 0 0 auto;
  text-align: center;
  margin-left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 50px;
  @media (min-width: 992px) {
    flex-direction: column;
    justify-content: center;
    margin-top: 0;
    margin-left: 100px;
  }
  @media (max-width: 992px) {
    margin-bottom: 0;
  }
`;

const FollowInnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media (min-width: 992px) {
    flex-direction: column;
  }
`;

const SocialIconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-left: 10px;
  margin-top: 20px;
  @media (min-width: 992px) {
    margin-top: 10px;
    flex-direction: column;
    align-items: center;
    margin-left: 0px;
  }
`;

const StyledParagraph = styled.p`
  background-color: #D5213A;
  color: #fff;
  display: inline-block;
  padding: 5px 10px;
`;

const StyledImage = styled.img`
  max-width: 600px;
  max-height: 520px;
  width: 100%;
`;

const FollowImage = styled.img`
  margin-top: 25px;
  @media (max-width: 991px) {
    width: 350px;
  }
`;

const Presentation = (props) => {
  const [followImgSrc, setFollowImgSrc] = useState(followImage);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setFollowImgSrc(followImage);
      } else {
        setFollowImgSrc(followImageHorizontal);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const iconColor = '#D5213A';

  return (
    <StyledContainer>
      <div className="container d-flex flex-column flex-lg-row align-items-center" id="body-text">
        <TextContainer>
          <StyledParagraph>Welcome I'M</StyledParagraph>
          <h2 className="text-white mt-2">Salvador Agustin Farias Torres</h2>
          <p className="text-white mt-4">Full Stack Developer</p>
          <p className="text-white mt-4">My commitment lies in creatively solving problems and crafting <br />
            innovative technological solutions to meet my clients' needs</p>
        </TextContainer>
        <PersonContainer>
          <StyledImage src={personImage} alt="Personal Photo" className="img-fluid" />
        </PersonContainer>
        <FollowContainer>
          <FollowInnerContainer>
            <FollowImage src={followImgSrc} alt="Follow Me" className="img-fluid" />
            <SocialIconsContainer>
              <a href="https://github.com/Salvador-aft" className="social-button" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} className='mx-2 mx-lg-0 mt-lg-4' style={{ color: iconColor }} size="2x" />
              </a>
              <a href="https://x.com/salvador_aft" className="social-button" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} className='mx-2 mx-lg-0 mt-lg-4' style={{ color: iconColor }} size="2x" />
              </a>
              <a href="https://www.linkedin.com/in/salvador-agustin-farias-torres/" className="social-button" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className='mx-2 mx-lg-0 mt-lg-4' style={{ color: iconColor }} size="2x" />
              </a>
            </SocialIconsContainer>
          </FollowInnerContainer>
        </FollowContainer>
      </div>
    </StyledContainer>
  );
}

export default Presentation;
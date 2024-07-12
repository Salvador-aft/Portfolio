import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import LinePNG from '../../images/line.png';

const drawLine = keyframes`
  from {
    height: 0;
  }
  to {
    height: 100%;
  }
`;

const revealText = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const hideText = keyframes`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(-20px);
  }
`;

const StepContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 8px;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(90%);
  overflow: hidden;
  width: auto;
  top: ${({ imagePosition }) => imagePosition.top};
  left: ${({ imagePosition }) => imagePosition.left};
`;

const Line = styled.div`
  background-image: url(${LinePNG});
  background-repeat: no-repeat;
  background-size: contain;
  height: 80px;
  width: 100px;
  margin-right: 20px;
  cursor: pointer;
  animation: ${drawLine} 2s forwards;
  position: absolute;
  top: 0;
  z-index: 2;
`;

const TextContainer = styled.div`
  position: relative;
  z-index: 1;
  color: white;
  width: 300px;
  animation: ${({ state }) => {
    if (state === 2) return revealText;
    if (state === 3) return hideText;
    return 'none';
  }} 1s forwards;
  transform: ${({ state }) => {
    if (state === 1 || state === 3) return 'translateX(-20px)';
    return 'translateX(0)';
  }};
  opacity: ${({ state }) => (state === 1 || state === 3 ? 0 : 1)};
  top: ${({ textPosition }) => textPosition.top};
  left: ${({ textPosition }) => textPosition.left};
`;

const stepsContent = {
  'focus2018': {
    title: 'Step 01',
    text: 
      `When I discovered programming
      It became one of my hobbies
      creating simple applications
      to explore your potential through
      HTML, CSS and JavaScript`,
    imagePosition: { top: '20%', left: '5%' },
    textPosition: { top: '20%', left: '50px' }
  },
  'focusAugust2023': {
    title: 'Step 02',
    text: 
      `Years later, I decided to turn
      programming into my profession.
      I went back to the basics,
      studying intensively in a Responsive
      Web Design course, relearning the
      essentials of HTML and CSS`,
      imagePosition: { top: '10%', left: '5%' },
      textPosition: { top: '20%', left: '50px' }
  },
  'focusSeptember': {
    title: 'Step 03',
    text: 
      `A month later, after completing
      the course, I enrolled in the
      JavaScript Algorithms and Data
      Structures course, learning deeply
      about JavaScript and its algorithms`,
      imagePosition: { top: '20%', left: '5%' },
      textPosition: { top: '20%', left: '50px' }
  },
  'focusNovember': {
    title: 'Step 04',
    text: 
      `Following a recommendation, I
      took the Front End Development
      Libraries course, where I learned React
      one of the most important JavaScript
      libraries. This changed my perspective
      on programming significantly`,
      imagePosition: { top: '5%', left: '5%' },
      textPosition: { top: '20%', left: '50px' }
  },
  'focusJanuary': {
    title: 'Step 05',
    text: 
    `Finally, after learning the basics and
      doing practice projects, I took the
      Back End Development and API's course.
      Here, I learned about Express JS and
      MongoDB, which equipped me to do Full
      Stack projects. I continue to learn
      and professionalize myself in this field`,
      imagePosition: { top: '20%', left: '5%' },
      textPosition: { top: '20%', left: '50px' }
  }
};

const LineText = ({ date }) => {
  const [state, setState] = useState(1);

  useEffect(() => {
    if (state === 2) {
      const timer = setTimeout(() => {
        setState(3);
      }, 3000);
      return () => clearTimeout(timer);
    } else if (state === 3) {
      const timer = setTimeout(() => {
        setState(1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [state]);

  const handleTextClick = () => {
    if (state === 2) {
      setState(3);
    }
  };

  const handleLineClick = () => {
    if (state === 1) {
      setState(2);
    }
  };

  const { title, text, imagePosition, textPosition } = stepsContent[date] || {};

  return (
    <StepContainer imagePosition={imagePosition}>
      <Line onClick={handleLineClick} />
      <TextContainer state={state} onClick={handleTextClick} textPosition={textPosition}>
        <h2>{title}</h2>
        <p>{text}</p>
      </TextContainer>
    </StepContainer>
  );
};

export default LineText;
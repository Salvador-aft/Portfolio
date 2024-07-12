import React, { useState, useRef } from 'react';
import './timeline.css';
import timeline from '../../images/timeline.svg';
import LineText from '../line-text/lineText'; 

const MobileTimeline = (props) => {
  const [zoomedDate, setZoomedDate] = useState(null);
  const imageRef = useRef(null);

  const handleDateClick = (date, transformOrigin) => {
    if (zoomedDate === date) {
      setZoomedDate(null);
      imageRef.current.style.transform = 'scale(1)';
    } else {
      setZoomedDate(date); 
      imageRef.current.style.transformOrigin = transformOrigin;
      imageRef.current.style.transform = 'scale(6)';
    }
  };

  return (
    <div className="mobile-timeline">
      <div className="timeline-container">
        <img ref={imageRef} src={timeline} alt="Timeline" className="timeline-image" />
        <div className="clickable-zones">
          <div
            className={`clickable-zone ${zoomedDate === 'focus2018' ? 'active' : ''}`}
            onClick={() => handleDateClick('focus2018', '0% 0%')}
          ></div>
          <div
            className={`clickable-zone ${zoomedDate === 'focusAugust2023' ? 'active' : ''}`}
            onClick={() => handleDateClick('focusAugust2023', '24% 0%')}
          ></div>
          <div
            className={`clickable-zone ${zoomedDate === 'focusSeptember' ? 'active' : ''}`}
            onClick={() => handleDateClick('focusSeptember', '48% 0%')}
          ></div>
          <div
            className={`clickable-zone ${zoomedDate === 'focusNovember' ? 'active' : ''}`}
            onClick={() => handleDateClick('focusNovember', '73% 0%')}
          ></div>
          <div
            className={`clickable-zone ${zoomedDate === 'focusDecember' ? 'active' : ''}`}
            onClick={() => handleDateClick('focusDecember', '97% 0%')}
          ></div>
        </div>
      </div>
      {zoomedDate && <LineText date={zoomedDate} />}
    </div>
  );
};

export default MobileTimeline;
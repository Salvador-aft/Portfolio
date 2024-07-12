import React, { useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStamp, faChalkboard, faLaptopCode, faBriefcase } from '@fortawesome/free-solid-svg-icons';


//Reference with the container that I want to make scrollable
function Projects(props) {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
  
    const scrollContainer = scrollContainerRef.current;
    //Variables to control the state of the drag
    let isDown = false;
    let startX;
    let scrollLeft;

    //When I presses the mouse button (mousedown), dragging is activated (isDown = true)
    const handleMouseDown = (e) => {
      isDown = true;
      scrollContainer.classList.add('active');
      //The initial position of the cursor (startX) and the initial position of the scroll (scrollLeft) are saved.
      startX = e.pageX - scrollContainer.offsetLeft;
      scrollLeft = scrollContainer.scrollLeft;
      scrollContainer.style.userSelect = 'none'; // This is to avoid problems
    };

    const handleMouseLeave = () => {
      isDown = false;
      scrollContainer.classList.remove('active');
      scrollContainer.style.userSelect = '';
    };

    const handleMouseUp = () => {
      isDown = false;
      scrollContainer.classList.remove('active');
      scrollContainer.style.userSelect = '';
    };

    const handleMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - scrollContainer.offsetLeft;
      const walk = (x - startX) * 2;
      scrollContainer.scrollLeft = scrollLeft - walk;
    };

    scrollContainer.addEventListener('mousedown', handleMouseDown);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);
    scrollContainer.addEventListener('mouseup', handleMouseUp);
    scrollContainer.addEventListener('mousemove', handleMouseMove);

    return () => {
      scrollContainer.removeEventListener('mousedown', handleMouseDown);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
      scrollContainer.removeEventListener('mouseup', handleMouseUp);
      scrollContainer.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className='bg-other'>
      <div className="navbar navbar-expand-lg">
        <div ref={scrollContainerRef} className='container d-flex align-items-center justify-content-start flex-nowrap main-container'>
          <div className="dotted-border custom-container">
            <div className="icon-wrapper">
              <FontAwesomeIcon icon={faStamp} className="custom-icon" />
            </div>
            <h1 className="text-white">04</h1>
            <h2>Certificates</h2>
          </div>
          <div className="dotted-border custom-container">
            <div className="icon-wrapper">
              <FontAwesomeIcon icon={faChalkboard} className="custom-icon" />
            </div>
            <h1 className="text-white">05</h1>
            <h2>Courses Taken</h2>
          </div>
          <div className="dotted-border custom-container">
            <div className="icon-wrapper">
              <FontAwesomeIcon icon={faLaptopCode} className="custom-icon" />
            </div>
            <h1 className="text-white">08</h1>
            <h2>Months of deep learning</h2>
          </div>
          <div className="dotted-border custom-container">
            <div className="icon-wrapper">
              <FontAwesomeIcon icon={faBriefcase} className="custom-icon" />
            </div>
            <h1 className="text-white">05</h1>
            <h2>Professional projects</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
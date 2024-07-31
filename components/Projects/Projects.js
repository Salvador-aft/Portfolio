import React, { useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStamp, faChalkboard, faLaptopCode, faBriefcase } from '@fortawesome/free-solid-svg-icons';

function Projects(props) {
  // Ref to reference the scroll container
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    // Get the current scroll container DOM element
    const scrollContainer = scrollContainerRef.current;
    let isDown = false; // Variable to track if the mouse is down
    let startX; // Starting X position of the mouse
    let scrollLeft; // Initial scroll position of the container

    // Handle mouse down event
    const handleMouseDown = (e) => {
      isDown = true; // Set mouse down flag to true
      scrollContainer.classList.add('active'); // Add 'active' class for styling
      startX = e.pageX - scrollContainer.offsetLeft; // Calculate initial mouse position
      scrollLeft = scrollContainer.scrollLeft; // Store initial scroll position
      scrollContainer.style.userSelect = 'none'; // Disable text selection
    };

    // Handle mouse leave event
    const handleMouseLeave = () => {
      isDown = false; // Set mouse down flag to false
      scrollContainer.classList.remove('active'); // Remove 'active' class
      scrollContainer.style.userSelect = ''; // Enable text selection
    };

    // Handle mouse up event
    const handleMouseUp = () => {
      isDown = false; // Set mouse down flag to false
      scrollContainer.classList.remove('active'); // Remove 'active' class
      scrollContainer.style.userSelect = ''; // Enable text selection
    };

    // Handle mouse move event
    const handleMouseMove = (e) => {
      if (!isDown) return; // If mouse is not down, do nothing
      e.preventDefault(); // Prevent default behavior
      const x = e.pageX - scrollContainer.offsetLeft; // Calculate current mouse position
      const walk = (x - startX) * 2; // Calculate distance to scroll
      scrollContainer.scrollLeft = scrollLeft - walk; // Scroll the container
    };

    // Add event listeners for mouse events
    scrollContainer.addEventListener('mousedown', handleMouseDown);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);
    scrollContainer.addEventListener('mouseup', handleMouseUp);
    scrollContainer.addEventListener('mousemove', handleMouseMove);

    // Cleanup function to remove event listeners
    return () => {
      scrollContainer.removeEventListener('mousedown', handleMouseDown);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
      scrollContainer.removeEventListener('mouseup', handleMouseUp);
      scrollContainer.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // Empty dependency array ensures this runs only on mount and unmount

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
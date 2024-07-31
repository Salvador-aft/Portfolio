import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './experience.css';
import line from './images/line.png';
import TimeLine from './images/timeline.svg';
import MobileTimeline from './mobile/timeline/timeline';

function Experience() {
  // Define the steps for the timeline
  const steps = [
    {
      id: 'step-01',
      title: 'Step 01',
      text: `When I discovered programming
      It became one of my hobbies
      creating simple applications
      to explore your potential through
      HTML, CSS and JavaScript`,
    },
    {
      id: 'step-02',
      title: 'Step 02',
      text: `Years later, I decided to turn
      programming into my profession.
      I went back to the basics,
      studying intensively in a Responsive
      Web Design course, relearning the
      essentials of HTML and CSS`,
    },
    {
      id: 'step-03',
      title: 'Step 03',
      text: `A month later, after completing
      the course, I enrolled in the
      JavaScript Algorithms and Data
      Structures course, learning deeply
      about JavaScript and its algorithms`,
    },
    {
      id: 'step-04',
      title: 'Step 04',
      text: `Following a recommendation, I
      took the Front End Development
      Libraries course, where I learned React
      one of the most important JavaScript
      libraries. This changed my perspective
      on programming significantly.`,
    },
    {
      id: 'step-05',
      title: 'Step 05',
      text: `Finally, after learning the basics and
      doing practice projects, I took the
      Back End Development and API's course.
      Here, I learned about Express JS and
      MongoDB, which equipped me to do Full
      Stack projects. I continue to learn
      and professionalize myself in this field.
      `,
    },
  ];

  // State to check if the view is mobile
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    // Function to handle window resize event
    const handleResize = () => setIsMobile(window.innerWidth <= 768);

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='bg-another'>
      <div className='centered-text pt-5'>
        <h2 className='text-white'>My Experiences</h2>
        <p className='text-white'>
          Being a Junior programmer doesn't diminish the fact of having
          extensive experience in both professional and experimental
          projects aimed at honing the technologies learned and implemented
          within these professional projects.
        </p>
      </div>
      {isMobile ? (
        // Render mobile timeline if the view is mobile
        <div className="mobile-timeline-container">
          <MobileTimeline />
        </div>
      ) : (
        // Render desktop timeline if the view is not mobile
        <div className='container'>
          <div className='custom-container-steps'>
            {steps.map((step) => (
              <div key={step.id} className='step-container' id={step.id}>
                <img src={line} alt="Separator Line" />
                <h2 className='text-white'>{step.title}</h2>
                <p className='text-white'>{step.text}</p>
              </div>
            ))}
          </div>
          <div className='container time-line-container mt-1 mb-1'>
            <img src={TimeLine} alt='Timeline' className='img-fluid' />
          </div>
        </div>
      )}
    </div>
  );
}

export default Experience;
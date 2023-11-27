import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Bigtext = () => {

  const myElementRef = useRef(null);

  useEffect(() => {
    // Ensure the element is available in the DOM
    const myElement = myElementRef.current;

    // Basic animation using GSAP
    gsap.to(myElement, {
      opacity: 0.7,
      delay: 1,
      x: 10,
      y: -20,
      duration: 1,
      ease: 'power2.out',
    });
  }, []);


  return (
    <div className="big-text" ref={myElementRef}>
        <h1>A</h1>
        <h1>FRONTEND</h1>
        <h1>ENGINEER</h1>
    </div>
  )
}

export default Bigtext
import React, { useEffect, useState } from 'react';
import gsap from 'gsap';

import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Features from "./components/Features";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [cursorStyle, setCursorStyle] = useState({ left: 0, top: 0 });

  useEffect(() => {
    const cursorElement = document.getElementById('circle-cursor');

    // Smooth cursor movement using GSAP
    const handleMouseMove = (e) => {
      const mouseX = e.clientX - cursorElement.clientWidth / 2;
      const mouseY = e.clientY - cursorElement.clientHeight / 2;

      gsap.to(cursorElement, {
        x: mouseX,
        y: mouseY,
        duration: 0.1,
        ease: 'power2.out',
      });
    };

    // Listen to mouse move
    document.addEventListener('mousemove', handleMouseMove);

    // Cleanup event listener
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      {/* Whole Website Wrapper */}
      <main className="relative min-h-screen w-screen overflow-x-hidden">
        <NavBar />
        <Hero />
        <About />
        <Features />
        <Story />
        <Contact />
        <Footer />
      </main>

      {/* Custom Circle Cursor */}
      <div
        id="circle-cursor"
        style={{
          position: 'absolute',
          pointerEvents: 'none',
          zIndex: 9999, // Ensure it is above all other elements
          borderRadius: '50%', // Circle shape
          width: '40px', // Size of the cursor
          height: '40px', // Size of the cursor
          backgroundColor: 'rgba(255, 255, 255, 0.8)', // Cursor color
          mixBlendMode: 'difference', // Blending mode effect
          top: 0,
          left: 0,
        }}
      ></div>
    </div>
  );
}

export default App;

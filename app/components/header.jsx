import React from 'react';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
     section.scrollIntoView({ behavior: 'smooth', block: 'start' });

    }
  };

  return (
    <header className='pt-4 text-white sticky top z-[20] mx-6 flex flex-wrap w-full items-center justify-between'>
      <h1 className='text-4xl '>Coding <span>Hab</span></h1>

      <nav className='w-1/3 md:mr-2'>
        <ul className='hidden text-2xl w-full md:flex justify-between '>
          <li><a href="#tech-stack" onClick={() => scrollToSection('tech-stack')}>Tech stack</a></li>
          <li><a href="#projects" onClick={() => scrollToSection('projects')}>Projects</a></li>
         
        </ul>
      </nav>

      <div className='mr-1 md:hidden'>
        <button onClick={toggleNavBar}>
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="white"
              className="w-6 h-6"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="white"
              className="w-6 h-6"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>
      {isOpen && (
        <ul className='flex flex-col text-2xl mt-4 items-start basis-full pl-2'>
          <li><a href="#tech-stack" onClick={() => scrollToSection('tech-stack')}>Tech stack</a></li>
          <li><a href="#projects" onClick={() => scrollToSection('projects')}>Projects</a></li>
         
        </ul>
      )}
    </header>
  );
}

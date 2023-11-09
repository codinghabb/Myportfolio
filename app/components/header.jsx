import React from 'react';
import { useState } from 'react';
import {BsTwitter} from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import {MdEmail } from 'react-icons/md'
import { motion } from 'framer-motion';


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };

 
  return (
     <motion.div
       animate={{
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.5, // Specify the duration in seconds
    },
  }}
  initial={{
    opacity: 0,
  }}
     >
    <header className='pt-4 text-white sticky top z-[20] px-3 flex flex-wrap w-full items-center justify-between'>
       

        
              <h1 className='text-3xl '>DevD</h1>

              <nav className='w-1/3 md:mr-2'>
                <ul className='hidden  text-2xl w-full md:flex justify-between md:mr-3'>
                  <li>
                    <a href="https://twitter.com/habeebbii">
                      <BsTwitter  className=' w-10 h-10'/>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/ademola-abdul-aa093b28a/" >
                        <BsLinkedin className="w-10 h-10" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/codinghabb" >
                        <FaGithub className="w-10 h-10" />
                    </a>
                  </li>
                  <li>
                    <a href="ademolaabds@gmail.com" >
                        <MdEmail className="w-10 h-10" />
                    </a>
                  </li>
                </ul>
              </nav>

              <div className='pr-[2px] md:hidden'>
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
                <ul className='flex flex-col gap-4 text-2xl mt-4 items-start basis-full pl-2 md:hidden'>
                  <li>
                    <a href="https://twitter.com/habeebbii">
                      <BsTwitter  className=' w-10 h-10'/>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/ademola-abdul-aa093b28a/" >
                        <BsLinkedin className="w-10 h-10" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/codinghabb" >
                        <FaGithub className="w-10 h-10" />
                    </a>
                  </li>
                  <li>
                    <a href="ademolaabds@gmail.com" >
                        <MdEmail className="w-10 h-10" />
                    </a>
                  </li>
                
                </ul>
              )}
        
    </header>
  </motion.div>
  );
}

"use client"

import {motion} from 'framer-motion'
import About from "./components/About";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Header from "./components/header";





export default function Home() {
   
  
  
  

    
  return (
    <motion.div
    animate={{
      x:0,
      opacity:1,
      transition:{
        duration: 3.5
      }
    }}
    initial={{
      opacity:0
      
    }}
    >
           <Header />
           <About />
           <Projects />
           <Footer />


           
    </motion.div>
  );
}

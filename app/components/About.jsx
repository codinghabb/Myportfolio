import React from 'react'
import Image from 'next/image'
import C1 from '../components/images/c1.jpg'
import C2 from '../components/images/c2.jpg'


export default function About() {
  return (
    <div>
           <div className=''>
                <div className=''>
                      <h1 className=' mt-14 md:ml-14 text-5xl md:text-8xl text-center md:text-start'>I&apos;m Ademola!</h1>
                      <p className='text-center mt-14 md:text-start md:ml-36 text-xl md:text-4xl'> I&apos;m a front-end developer devoted <br />
                          to crafting beautiful web experiences <br />
                          focused on simplicity and purpose.  <br />
                          I have two years experience using <br />
                          various front-end technologies
                        </p>
                     
                 </div>

                 <h2 className='mt-14  text-4xl md:text-8xl text-center md:text-start md:ml-14'>Education</h2>
                <div className='text-lg mt-20 text-center md:text-start md:ml-28 space-y-4'>
                   <p >ADVANCED DIPLOMA IN SOFTWARE ENGINEERING  2023</p>
                   <p >CERTIFICATE OF PROFICIENCY <br />
                   IN INFORMATION SYSTEMS MANAGEMENT 2021</p>
                </div>
                 
         </div>
        <div className=' flex flex-col gap-10 mx-44 mt-10'>
              <Image src={C1} alt='certificate'  width={300} height={400}  />
              <Image alt='certificate' src={C2}  width={300} height={400}  />
        </div>
       

        <div className=' mt-8 items-center '>
                <div>
                      <h1 className=' text-center mb-6 text-2xl '>Technologies i work with <br />
                       and still use</h1>
                </div>
              
                  <div className='flex justify-center gap-3 flex-wrap text-2xl'>
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>JAVASCRIPT</p>
                    <p>TAILWIND</p>
                    <p>SASS</p>
                    <p>FRAMER MOTION</p>
                    <p>REACT</p>
                    <p>NEXT JS</p>
                    
                  </div>
            </div>
    

    </div>
  )
}

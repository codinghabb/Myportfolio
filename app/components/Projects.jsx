import React from 'react'
import ProjectOne from '../components/images/Screen.png'
import Spicy from '../components/images/spicy.png'
import P3 from '../components/images/p3.png'
import P2 from '../components/images/p2.png'
import Image from 'next/image'
import Link from 'next/link'

export default function Projects() {
  return (
    <>
    <section id='projects'  className=' mt-24'>
      <h1 className=' text-white text-3xl text-center my-4'>Projects are Below</h1>
    </section>
        <div className=''>
          
               <Link href="https://therosebud.netlify.app/">
                 <h1 className='text-3xl text-center my-4 underline underline-offset-8'>The Rosebud</h1>
                 <Image alt='project1' src={Spicy}  width={600} height={400} className='mx-auto'/>
               </Link>
        </div>
        <div className=''>
          
               <Link href="https://brianholdingltd.com/">
                 <h1 className='text-3xl text-center my-4 underline underline-offset-8'>Brian Holding ltd</h1>
                 <Image alt='project1' src={P3}  width={600} height={400} className='mx-auto'/>
               </Link>
        </div>
        <div className=''>
          
               <Link href="https://go-express.netlify.app/">
                 <h1 className='text-3xl text-center my-4 underline underline-offset-8'>Go Express</h1>
                 <Image alt='project1' src={P2}  width={600} height={400} className='mx-auto'/>
               </Link>
        </div>
        <div className=''>
          
               <Link href="https://consult-omj.vercel.app/">
                 <h1 className='text-3xl text-center my-4 underline underline-offset-8'>Consult OMJ</h1>
                 <Image alt='project1' src={ProjectOne}  width={600} height={400} className='mx-auto'/>
               </Link>
        </div>
       
    </>
  )
}

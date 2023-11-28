import React from 'react'
import ProjectOne from 'public/images/Screen.png'
import Image from 'next/image'
import Link from 'next/link'

export default function Projects() {
  return (
    <>
    <section id='projects'  className=' mt-24'>
        <div className=''>
          <h1 className=' text-white text-3xl text-center my-4'>Consulting agency  Consult Omj</h1>
               <Link href="https://consult-omj.vercel.app/">
                 <Image alt='project1' src={ProjectOne}  width={600} height={400} className='mx-auto'/>
               </Link>
        </div>
    </section>
       
    </>
  )
}

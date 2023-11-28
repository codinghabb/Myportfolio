import Link from 'next/link'
import React from 'react'

export default function Notfound() {
  return (
    <main className='text-white text-center my-16'>
        <h1 className='text-4xl'>THE EMAIL LINK IS JUST BROKEN LOL TRY</h1>
        <p className='text-xl '> ademolaabds@gmail.com</p>
        <Link href="/" className='underline underline-offset-8'>Go back.....</Link>
    </main>
  )
}

import Link from 'next/link'
import React from 'react'

function Navbar() {
// const [menuBar,setMenuBar] = useState(false)
  return (
    <div>
      <div className='flex justify-between items-center px-4 h-10 bg-[#bf3232]'>
      <div>
      <Link href="/" className='flex gap-2 items-center'>
      <h1 className='font-bold text-2xl text-white'>SenpaiFlixx</h1>
      image
      </Link>
      </div>
      <div className='hidden md:flex'>
        options
      </div>
      <div>
        <Link href="/login">login-info</Link>
      </div>
      </div>
    </div>
  )
}

export default Navbar

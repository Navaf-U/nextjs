import Link from 'next/link'
import React from 'react'

function LoginButtonModal() {
  return (
    <Link href={'/login'} className='bg-gray-600 w-64 h-16 rounded-md hover:bg-gray-700 cursor-pointer absolute flex items-center justify-center'>
      <button className='font-semibold text-xl'>Please Login</button>
    </Link>
  )
}

export default LoginButtonModal

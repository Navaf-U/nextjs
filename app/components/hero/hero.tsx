import Image from 'next/image'
import React from 'react'
import heroBG from '../../assets/heroBG.jpg'
import LoginButtonModal from '@/app/modals/LoginButtonModal'
function hero() {
  return (
    <div className='h-screen w-full'>
      <div className='absolute flex justify-center w-full items-center h-screen'><LoginButtonModal /></div>
      <Image src={heroBG} className='object-cover h-screen' alt='heroBG' />
    </div>
  )
}

export default hero

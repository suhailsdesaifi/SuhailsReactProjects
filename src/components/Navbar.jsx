import React from 'react'
import { ReactComponent as Logo } from '../assets/Logo.svg'
import Text from '../advice/Text'

function Navbar() {
  return (
    <div className='flex justify-between items-center'>
        <Logo className='cursor-pointer' />
        <div className='flex items-center gap-10'>
            <Text type='text2-0'>Product</Text>
            <Text type='text2-0'>Services</Text>
            <Text type='text2-0'>About</Text>
            <button className='py-2 px-10 border-2 rounded-3xl border-[#0A2640] font-bold text-base leading-6 text-[#0A2640]'>Log In</button>
        </div>
    </div>
  )
}

export default Navbar
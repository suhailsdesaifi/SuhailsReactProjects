import React from 'react'
import { ReactComponent as Logo } from '../assets/Logo.svg'
import Text from '../advice/Text'

function Footer() {
  return (
    <div className='flex gap-44 mb-28'>
        <div className='flex flex-col gap-12'> 
            <Logo />
            <Text type='text1-1'>Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter.</Text>
            <Text type='text1-1'>All rights reserved</Text>
        </div>
        <div className='flex gap-24'>
            <div className='flex flex-col gap-8'>
                <Text type='text3-5'>Landing</Text>
                <Text type='text1-2'>Home</Text>
                <Text type='text1-2'>Products</Text>
                <Text type='text1-2'>Services</Text>
            </div>
            <div className='flex flex-col gap-8'>
                <Text type='text3-5'>Company</Text>
                <Text type='text1-2'>Home</Text>
                <div className='flex gap-2'>
                    <Text type='text1-2'>Career</Text>
                    <button className='px-3 border-2 rounded-full border-[#65E4A3] font-bold text-[0.813rem] leading-3 text-[#0A2640] bg-[#65E4A3]'>Hiring!</button>
                </div>
                <Text type='text1-2'>Services</Text>
            </div>
            <div className='flex flex-col gap-8'>
                <Text type='text3-5'>Resources</Text>
                <Text type='text1-2'>Blog</Text>
                <Text type='text1-2'>Products</Text>
                <Text type='text1-2'>Services</Text>
            </div>
        </div>
    </div>
  )
}

export default Footer
import React from 'react'
import Text from '../advice/Text'

function BlogHeader() {
  return (
    <div className='py-24 px-[6.25rem] border-b-2 border-[#0A2640] bg-[#0A2640]'>
        <div className='text-center pb-16 border-b-2 border-white'>
            <Text type='text1-2' color='text-white'>Our Blog</Text>
            <Text type='text1-7' color='text-white'>Value proposition accelerator product management venture</Text>
        </div>
        <div className=''>
            <div className='flex'>
                <Text type='text1-6' color='text-white' className='w-2/4'>We are commited.</Text>
                <Text type='text1-2' color='text-white' className='w-1/4'>Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. </Text>
            </div>
            <div className='flex justify-between'>
                <Text type='text1-6' color='text-white'>We are responsible.</Text>
                <Text type='text1-2' color='text-white'>Mass market iPhone buzz conversion analytics stock iteration responsive web design user experience business plan handshake. Return on investment seed round MVP backing supply chain. </Text>
            </div>
            <div className='flex justify-between'>
                <Text type='text1-6' color='text-white'>We aim for progress.</Text>
                <Text type='text1-2' color='text-white'>Bootstrapping rockstar first mover advantage business model canvas alpha deployment launch party beta facebook metrics gamification growth hacking customer focus. </Text>
            </div>
        </div>
    </div>
  )
}

export default BlogHeader
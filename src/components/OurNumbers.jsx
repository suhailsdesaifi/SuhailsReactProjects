import React from 'react'
import Text from '../advice/Text'

function OurNumbers() {
  return (
    <div className='py-16 text-center px-48'>
        <Text type='text1-2'>Our Numbers</Text>
        <Text type='text1-6'>Handshake infographic mass market crowdfunding iteration.</Text>
        <div className='flex justify-between pt-16'>
            <div className='flex flex-col gap-4 text-left'>
                <Text type='text1-8'>120m</Text>
                <Text type='text1-3'>Cool feture title</Text>
            </div>
            <div className='flex flex-col gap-4 text-left'>
                <Text type='text1-8'>10.000m</Text>
                <Text type='text1-3'>Cool feture title</Text>
            </div>
            <div className='flex flex-col gap-4 text-left'>
                <Text type='text1-8'>240m</Text>
                <Text type='text1-3'>Cool feture title</Text>
            </div>
        </div>
    </div>
  )
}

export default OurNumbers
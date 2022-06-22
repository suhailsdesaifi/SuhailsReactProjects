import React from 'react'
import { ReactComponent as Logo } from '../assets/Rectangle 1270.svg'
import Text from '../advice/Text'
import Profile from '../advice/Profile'

function BlogHeader() {
  return (
    <div className='pt-10 border-b-2 border-[#0A2640]'>
        <div className='text-center'>
            <Text type='text1-2'>Blog</Text>
            <Text type='text1-7'>Thoughts and words</Text>
        </div>
        <div className='flex gap-[6.25rem] items-center'>
            <Logo />
            <div className=''>
                <div className='flex gap-5'>
                    <Text type='text3-2'>Category</Text>
                    <Text type='text1-1' color='text-[#777777]'>November 22, 2022</Text>
                </div>
                <Text type='text1-6'>Pitch termsheet backing validation focus release.</Text>
                <div className='flex gap-4 item-center'>
                    <Profile size='small'><img src='../assets/Ellips 10.svg' alt='ProfilePic' /></Profile>
                    <Text type='text1-1'>Chandler Bing</Text>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogHeader
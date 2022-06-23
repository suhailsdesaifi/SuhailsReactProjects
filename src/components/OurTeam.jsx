import React from 'react'
import Text from '../advice/Text'
import Profile from '../advice/Profile'

function OurTeam() {
    const flexRow = [
        {
            image: "IMAGE_URL",
            name: "Michael Scott",
            post: "General Manager"
        },
        {
            image: "IMAGE_URL",
            name: "Michael Scott",
            post: "General Manager"
        },
        {
            image: "IMAGE_URL",
            name: "Michael Scott",
            post: "General Manager"
        }
    ]
    const flexGrid = [
        {
            image: "IMAGE_URL",
            name: "Pam Beetsley",
            post: "General Manager"
        },
        {
            image: "IMAGE_URL",
            name: "Pam Beetsley",
            post: "General Manager"
        },
        {
            image: "IMAGE_URL",
            name: "Pam Beetsley",
            post: "General Manager"
        },
        {
            image: "IMAGE_URL",
            name: "Pam Beetsley",
            post: "General Manager"
        }
    ]

  return (
    <div className='px-[12.25rem] py-24'>
        <div className='mb-8'>
            <Text type='text1-2'>Our team</Text>
            <Text type='text1-6'>The people behind the work</Text>
        </div>
        <Text type='text1-2'>Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus. </Text>
        <div className='flex justify-between pt-6 px-10'>
            {
                flexRow.map((item) => (
                    <div className='flex flex-col gap-4'>
                        <Profile size='large'>{item.flexRow}</Profile>
                        <Text type='text1-4'>{item.name}</Text>
                        <Text type='text1-2'>{item.post}</Text>
                    </div>
                ))
            }
        </div>
        <div className='grid grid-cols-2 gap-x-36 gap-y-12 pt-24 px-10'>
            {
                flexGrid.map((item) => (
                    <div className='flex gap-12 items-center'>
                        <Profile size='square'>{item.flexGrid}</Profile>
                        <div>
                            <Text type='text1-4'>{item.name}</Text>
                            <Text type='text1-2'>{item.post}</Text>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default OurTeam
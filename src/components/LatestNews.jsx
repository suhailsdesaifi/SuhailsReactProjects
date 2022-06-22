import React from 'react'
import Text from '../advice/Text'
import Profile from '../advice/Profile'

function LatestNews() {
    const usersList = [
        {
            image: "../assets/RectangleBoyOnCall.svg",
            title: "Pitch termsheet backing validation focus release.",
            userImage: "../assets/Ellips 10.svg",
            userName: "Chandler Bing",
            date: "November 22, 2022"
        },
        {
            // image: logo,
            title: "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",
            userImage: "IMAGE_URL",
            userName: "Rachel Green",
            date: "November 22, 2022"
        },
        {
            // image: logo,
            title: "Beta prototype sales iPad gen-z marketing network effects value proposition",
            userImage: "IMAGE_URL",
            userName: "Monica Geller",
            date: "November 22, 2022"
        },
        {
            // image: logo,
            title: "Pitch termsheet backing validation focus release.",
            userImage: "IMAGE_URL",
            userName: "Chandler Bing",
            date: "November 22, 2022"
        },
        {
            // image: logo,
            title: "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",
            userImage: "IMAGE_URL",
            userName: "Rachel Green",
            date: "November 22, 2022"
        },
        {
            // image: logo,
            title: "Beta prototype sales iPad gen-z marketing network effects value proposition",
            userImage: "IMAGE_URL",
            userName: "Monica Geller",
            date: "November 22, 2022"
        },
    ]

  return (
    <div className='pt-20'>
        <Text type='text1-6'>Latest News</Text>
        <div className='grid grid-cols-3 grid-rows-2 gap-12 pt-5'>
            {
                usersList.map((item) => (
                    <div className='flex flex-col items-center'>
                       <Profile size='medium'>{item.image}</Profile>
                        <div className='flex flex-col justify-between'>
                            <div className='flex gap-5'>
                                <Text type='text3-2'>Category</Text>
                                <Text type='text1-1' color='text-[#777777]'>November 22, 2022</Text>
                            </div>
                            <Text type='text1-2'>{item.title}</Text>
                            <div className='flex gap-4 item-center'>
                                <Profile size='small'>{item.userImage}</Profile>
                                <Text type='text1-1'>{item.userName}</Text>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
        <div className='text-center py-24'>
            <button className='py-4 px-14 border-2 rounded-[3.5rem] border-[#0A2640] font-bold text-xl leading-7 text-[#0A2640]'>Load more</button>
        </div>
    </div>
  )
}

export default LatestNews
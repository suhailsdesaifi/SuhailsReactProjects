import React from 'react'
import Text from '../advice/Text'

function EmailIForm() {
  return (
    <div className='bg-[#0A2640] py-16 px-44 text-center rounded-2xl flex flex-col gap-12 mt-20 mb-20'>
      <Text type='text1-6' color='text-[#FFFFFF]'>An enterprise template to ramp up your company website</Text>
      <div className='flex justify-center gap-10'>
        <input type='text' placeholder='Your Emil Address' className='py-3 pl-8 pr-40 rounded-full placeholder-black placeholder:font-semibold placeholder:text-xl placeholder:leading-8' />
        <button className='py-4 px-14 border-2 rounded-full border-[#65E4A3] font-bold text-xl leading-7 text-[#0A2640] bg-[#65E4A3]'>Start now</button>
      </div>
    </div>
  )
}

export default EmailIForm

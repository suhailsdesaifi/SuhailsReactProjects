import React from 'react'

function Text(props) {
    const { children, type, color } = props

    if(type === 'text1-0')
        return <div className='font-normal text-[#0A2640] text-sm leading-8'>{children}</div>
    if(type === 'text1-1')
        return <div className={`${color ? color : "text-[#0A2640]"} font-normal text-[#0A2640] text-base leading-7`}>{children}</div>
    if(type === 'text1-2')
        return <div className={`${color ? color : "text-[#0A2640]"} font-normal text-xl leading-8`}>{children}</div>
    if(type === 'text1-3')
        return <div className='font-normal text-[#0A2640] text-2xl leading-9'>{children}</div>
    if(type === 'text1-4')
        return <div className='font-normal text-[#0A2640] text-[1.75rem] leading-[3rem]'>{children}</div>
    if(type === 'text1-5')
        return <div className='font-normal text-[#0A2640] text-4xl leading-[3.4375]'>{children}</div>
    if(type === 'text1-6')
        return <div className={`${color ? color : "text-[#0A2640]"} font-normal text-5xl leading-[4.5rem]`}>{children}</div>
    if(type === 'text1-7')
        return <div className={`${color ? color : "text-[#0A2640]"} font-normal text-[4rem] leading-[5.25rem]`}>{children}</div>
    if(type === 'text1-8')
        return <div className='font-normal text-[#0A2640] text-8xl leading-[3.5rem]'>{children}</div>

    if(type === 'text2-0')
        return <div className='font-semibold text-base leading-7 text-[#0A2640]'>{children}</div>

    if(type === 'text3-0')
        return <div className='font-bold text-[0.8125rem] leading-7 text-[#0A2640]'>{children}</div>
    if(type === 'text3-1')
        return <div className='font-bold text-[#0A2640] text-base leading-6'>{children}</div>
    if(type === 'text3-2')
        return <div className='font-bold text-[#0A2640] text-base leading-7'>{children}</div>
    if(type === 'text3-3')
        return <div className='font-bold text-[#0A2640] text-base leading-8'>{children}</div>
    if(type === 'text3-4')
        return <div className='font-bold text-[#0A2640] text-xl leading-7'>{children}</div>
    if(type === 'text3-5')
        return <div className='font-bold text-[#0A2640] text-xl leading-8'>{children}</div>

        
  return (
    <div>{children}</div>
  )
}

export default Text
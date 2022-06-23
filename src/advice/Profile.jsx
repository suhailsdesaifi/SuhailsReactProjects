import React from 'react'

function Profile(props) {
    const { childe, size } = props

    if(size === "small") 
        return <div className='h-8 w-8 bg-red-600 rounded-full'>{childe}</div>
    if(size === "medium")
        return <div className='w-[18.75rem] h-[13.063rem] rounded-3xl bg-slate-700'>{childe}</div>
    if(size === "large") 
        return <div className='h-[12.625rem] w-[12.625rem] bg-yellow-600 rounded-3xl'>{childe}</div>
    if(size === "square") 
        return <div className='h-[7.5rem] w-[7.5rem] bg-green-600 rounded-3xl'>{childe}</div>

  return (
    <div>{childe}</div>
  )
}

export default Profile
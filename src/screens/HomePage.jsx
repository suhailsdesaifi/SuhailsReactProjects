import React from 'react'
import EmailIForm from '../components/EmailIForm'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function HomePage() {
  return (
    <div className='px-[6.25rem] pt-14'>
        <Navbar />
        <EmailIForm />
        <Footer />
    </div>
  )
}

export default HomePage
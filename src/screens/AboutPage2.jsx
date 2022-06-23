import React from 'react'
import Navbar from '../components/Navbar'
import About2Header from '../components/About2Header'
import OurNumbers from '../components/OurNumbers'
import OurStory from '../components/OurStory'
import OurTeam from '../components/OurTeam'
import OurBlog from '../components/OurBlog'
import EmailIForm from '../components/EmailIForm'
import Footer from '../components/Footer'

function AboutPage2() {
  return (
    <div className=''>
      <div className='px-[6.25rem] bg-[#65E4A3]'>
        <Navbar />
        <About2Header />
      </div>
       <OurNumbers />
       <OurStory />
       <OurTeam />
       <OurBlog />
       <div className='px-[6.25rem]'>
        <EmailIForm />
        <Footer />
       </div>
    </div>
  )
}

export default AboutPage2


//px-[6.25rem] 
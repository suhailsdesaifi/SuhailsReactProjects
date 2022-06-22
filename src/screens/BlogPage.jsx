import React from 'react'
import Navbar from '../components/Navbar'
import BlogHeader from '../components/BlogHeader'
import LatestNews from '../components/LatestNews'
import EmailIForm from '../components/EmailIForm'
import Footer from '../components/Footer'

function BlogPage() {
  return (
    <div className='px-[6.25rem] pt-14'>
        <Navbar />
        <BlogHeader />
        <LatestNews />
        <EmailIForm />
        <Footer />
    </div>
  )
}

export default BlogPage
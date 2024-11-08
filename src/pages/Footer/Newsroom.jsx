import React from 'react'
import Header from '../../components/header/Header'
import Banner from '../Home/sections/Banner'
import Footer from '../../components/footer'
import image1 from "../../assets/news/1.png"
import image2 from "../../assets/news/2.png"
import NewsContent from '../Home/sections/NewsContent'

const Newsroom = () => {

  return (
    <div>
      <Header/>
      <Banner/>
      <NewsContent />

      <Footer/>
    </div>
  )
}

export default Newsroom

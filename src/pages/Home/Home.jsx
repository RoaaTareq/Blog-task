import React from 'react'
import TopSection from './Topsectioon'
import Footer from '../../components/footer'
import Card from '../../components/card'
import MainBlog from './MainBlog'
import Navbar from '../Layout/navbar'
import Slider from '../../components/slider'

function Home(){
    return(
      
      <>
      <Navbar/>
        <TopSection/>
        {/* <MainBlog/>
        <Card/> */}
        {/* <Slider/> */}
        {/* <Footer/> */}
      </>
       
    )
}

export default Home
import React from 'react'
import TopSection from './Topsectioon'
import Footer from '../../components/footer'
import Card from '../../components/card'
import MainBlog from './MainBlog'
import Navbar from '../Layout/navbar'

function Home(){
    return(
      
      <>
      <Navbar/>
        <TopSection/>
        {/* <MainBlog/>
        <Card/>
        <Footer/> */}
      </>
       
    )
}

export default Home
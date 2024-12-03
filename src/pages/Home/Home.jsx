import React from 'react'
import TopSection from './Topsectioon'
import Footer from '../../components/footer'
import Card from '../../components/card'
import MainBlog from './MainBlog'

function Home(){
    return(
      
      <>
        <TopSection/>
        <MainBlog/>
        <Card/>
        <Footer/>
      </>
       
    )
}

export default Home
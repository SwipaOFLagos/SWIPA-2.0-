import React from 'react'
import Jumbotron from '../components/cards/Jumbotron'
import Menu from '../components/NavBar'
import Footer from '../components/Footer'
const Blog = () => {
  return (
    <>
    <Menu/>
      <Jumbotron title="COMING SOON..." subTitle="Blog Page"/>
      <Footer/>
    </>
  )
}

export default Blog
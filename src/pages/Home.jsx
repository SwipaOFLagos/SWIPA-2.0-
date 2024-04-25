import Hero from '../components/Hero'
import Brands from '../components/Brand'
import Testimonies from '../components/Testimonies'
import BlogCard from '../components/Blog'
import Menu from '../components/NavBar'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Menu/>
        <Hero/>
        <Brands/>
        <Testimonies/>
        <BlogCard/>
        <Footer/>
    </div>
  )
}

export default Home

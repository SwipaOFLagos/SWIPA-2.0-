import Hero from "../components/Hero";
import Brands from "../components/Brand";
import Testimonies from "../components/Testimonies";
import BlogCard from "../components/Blog";
import Footer from "../components/Footer";
import Menu from "../components/NavBar";
import SideNav from "../components/SideNav";
<<<<<<< HEAD
import CountDownTimer from "../components/CountDownTimer";
=======
import NewArrivalComponent from "../components/NewArrivalComponent";
>>>>>>> 2e844dcd21fc2285f15069443ad49febc02ca29a

const Home = () => {
  return (
    <>
      <Menu />
      <SideNav />
      <Hero />
      <Brands />
      <Testimonies />
<<<<<<< HEAD
      <CountDownTimer/>
=======
      <NewArrivalComponent title="New Arrivals" link = "/new-arrivals"/>
>>>>>>> 2e844dcd21fc2285f15069443ad49febc02ca29a
      <BlogCard />
      <Footer />
    </>
  );
};

export default Home;

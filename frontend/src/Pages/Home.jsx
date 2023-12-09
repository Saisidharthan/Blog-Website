import HomePost from "../Components/HomePost"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
const Home = () => {
  return (
    <>
    <Navbar/>
    <div className="px-8 md:px-[200px]">
      <HomePost/>
      {/* copied for testing */}
      <HomePost/>
      <HomePost/>
      <HomePost/>
      <HomePost/>
    </div>
    <Footer/>
    </>
  )
}

export default Home
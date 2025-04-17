import AboutUs from "./components/AboutUs"
import HomeCarrousal from "./components/HomeCarrousal"
import LatestProducts from "./components/LatestProducts"

const Home = () => {
  return (
    <div className="    w-full justify-center h-full  ">
      <HomeCarrousal/>
      <LatestProducts/>
      <AboutUs/>
    </div>
  )
}

export default Home
import AboutUs from "./components/AboutUs"
import GoldInfo from "./components/GoldInfo"
import HomeCarrousal from "./components/HomeCarrousal"
import LatestProducts from "./components/LatestProducts"

const Home = () => {
  return (
    <div className="    w-full justify-center h-full  ">
      <HomeCarrousal/>
      <LatestProducts/>
      <GoldInfo/>
      <AboutUs/>
    </div>
  )
}

export default Home
import HomeCarrousal from "./components/HomeCarrousal"
import LatestProducts from "./components/LatestProducts"

const Home = () => {
  return (
    <div className="    w-full justify-center h-full  ">
      <HomeCarrousal/>
      <LatestProducts/>
    </div>
  )
}

export default Home
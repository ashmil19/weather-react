import WeatherHead from '../components/WeatherHead'
import background from '../assets/background.svg'
import SearchComponent from '../components/SearchComponent'
import WeatherCard from '../components/WeatherCard'

const Weather = () => {
  return (
    <div style={{backgroundImage: `url(${background})`}} className='h-screen bg-no-repeat bg-cover flex flex-col justify-center gap-5 pt-10'>
      <WeatherHead />
      {/* <SearchComponent /> */}
      <WeatherCard />
    </div>
  )
}

export default Weather

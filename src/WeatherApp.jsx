import Header from "./Header"
import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"

export default function WeatherApp(){
  let [WeatherInfo, setWeatherInfo] = useState({});
  let updateInfo =(result) => {
    setWeatherInfo(result);
  }
  return(<>
    <Header />
    <SearchBox updateInfo = {updateInfo}/>
    <InfoBox info={WeatherInfo}/>
  </>)
}
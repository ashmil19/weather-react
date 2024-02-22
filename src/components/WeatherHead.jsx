import { TiWeatherPartlySunny } from "react-icons/ti";

const WeatherHead = () => {
  return (
    <div className="w-full flex justify-center gap-3">
      <span className="font-bold text-4xl text-white capitalize">weather</span>
      <TiWeatherPartlySunny color="white" size={"50"} />
    </div>
  );
};

export default WeatherHead;

import { RiCelsiusFill } from "react-icons/ri";
import { WiCloudy } from "react-icons/wi";
import { WiDaySunny } from "react-icons/wi";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import axios from "../axios.js";

const WeatherCard = () => {
  const [data, setData] = useState({});
  const [search, setSearch] = useState("");
  const [prevToastId, setPrevToastId] = useState(null);
  const [error, setError] = useState({
    isError: false,
    message: ""
  })

  const showErrorToast = (message) =>{
    if(prevToastId){
      toast.dismiss(prevToastId)
    }
    
    const newId = toast.error(message);
    setPrevToastId(newId)
    
  }

  const getTemperature = () => {
    if (search.trim() === "") {
      showErrorToast("please type any thing")
      return;
    }

    const params = {
      q: search.trim(),
    };

    axios.get("", { params }).then((res) => {
      setError({isError: false})
      setData(res?.data);
      // console.log(res)
    })
    .catch((err)=>{
      console.log(err)
      showErrorToast(err?.response?.data?.message)
      setError({
        isError: true,
        message: err?.response?.data?.message
      })
    })
  };

  return (
    <>
      <div className="w-full flex justify-center gap-3">
        <input
          type="text"
          className="w-96 h-10 rounded-3xl outline-none px-5"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div
          className="h-10 w-10 bg-gray-600 rounded-full cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out flex justify-center items-center"
          onClick={getTemperature}
        >
          <FaSearch color="white" />
        </div>
      </div>

      <div className="w-full h-full flex justify-center">
        <div className="w-[35rem] h-72 bg-mainBg rounded-3xl flex">
          <div className="w-1/2 h-full rounded-l-3xl p-5">
            <div className="h-1/2 flex flex-col justify-center">
              <div className="flex">
                <span className="font-bold text-6xl text-white">
                  {error.isError ? "" : data?.main?.temp && (data?.main?.temp - 273.15).toFixed(0)}
                </span>
                <RiCelsiusFill
                  color="white"
                  className="text-6xl font-extrabold"
                />
              </div>
              <div className="text-white font-bold text-xl">Now</div>
            </div>
            <div className="h-1/2 flex items-center">
              <div className="text-white font-bold text-6xl capitalize">
              {error.isError ? error.message : data?.name}
              </div>
            </div>
          </div>
          <div className="w-1/2 h-full rounded-r-3xl flex justify-center items-start mt-5">
            {/* <img
            src="http://openweathermap.org/img/wn/04n.png"
            alt="Weather Icon"
          /> */}
            {/* <WiCloudy className="text-white text-9xl font-extrabold" /> */}
            <WiDaySunny className="text-white text-9xl font-extrabold" />
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default WeatherCard;

import React from 'react'
import { FaSearch } from "react-icons/fa";

const SearchComponent = () => {
  return (
    <div className='w-full flex justify-center gap-3'>
      <input type="text" className='w-96 h-10 rounded-3xl outline-none px-5' />
      <div className='h-10 w-10 bg-gray-600 rounded-full cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out flex justify-center items-center'>
        <FaSearch color='white' />
      </div>
    </div>
  )
}

export default SearchComponent

import React from 'react'
import Header from '../../components/Header'
import iconProfile from "../../assets/homem.png";
import { FaTrash, FaShoppingCart } from "react-icons/fa";

export default function Profile() {

  return (
    <div>
      <Header />
      <section className='flex justify-center items-center h-[100vh]'>
        <div className='bg-white shadow-md h-auto w-[300px] grid justify-items-center rounded' >
          <div className='w-29 h-29 rounded-full bg-[#C7C7C7] mt-5 flex
           justify-center items-center'>
            <img src={iconProfile} alt="Image Profile" className='w-17' />
          </div>

          <div className="mt-3">
            <h1 className="font-semibold text-gray-800 text-lg tracking-wide">
              João da Silva Pereira
            </h1>
          </div>
          <div className="bg-white w-[265px] h-[40px] flex items-center justify-center 
            mt-4 text-gray-700 rounded border border-gray-300 shadow-sm">
            joao@gmail.com
          </div>
          <div className="bg-white w-[265px] h-[40px] flex items-center justify-center 
            mt-4 text-gray-700 rounded border border-gray-300 shadow-sm">
            ***.***.***-01
          </div>

          <div className='mt-5 mb-5 flex gap-4'>
            <button
              className='bg-red-500 flex items-center text-white gap-2 px-4 
                  py-1.5 rounded cursor-pointer transition-colors ease-in-out
                  duration-200 transform hover:-translate-y-[1px] hover:scale-[1.01]
                   hover:bg-red-600'>
              <FaTrash />
              Delete
            </button>
            <button
              className='bg-green-600 flex items-center text-white gap-2 px-4 
                  py-1.5 rounded cursor-pointer transition-colors ease-in-out
                  duration-200 transform hover:-translate-y-[1px] hover:scale-[1.01]
                   hover:bg-green-700'>
              <FaShoppingCart />
              View Cart
            </button>
          </div>

        </div>

      </section>
    </div>
  )
}

import { useEffect, useState } from 'react'
import iconShopVirtual from "../assets/loja-virtual.png";
import { NavLink } from "react-router-dom";
import { useAuth } from '../hook/useAuth';
import { FiLogOut, FiUser } from "react-icons/fi";
import { Sling as Hamburger } from "hamburger-react";

export default function Header() {
  const [dark, setDark] = useState(false);
  const { user, token, logout } = useAuth();

  const [isOpen, setIsOpen] = useState(false);

  function toggleTheme() {
    setDark(!dark);
    document.body.style.backgroundColor = dark ? "#f7f7f8" : "#000000";
  }

  useEffect(()=>{
     document.body.classList.toggle("overflow-hidden", isOpen);
  }, [isOpen])

  return (
    <>
      <header className={`bg-[#ffffff] flex justify-between items-center p-2 
      transition-colors ${dark ? "bg-gray-800" : "bg-[#f7f7f8]"}`}>
        <NavLink to="/">
          <div className='flex items-center pl-10 gap-1.5'>
            <div>
              <img className='w-10' src={iconShopVirtual} alt='Icon Shop Virtual' />
            </div>
            <div className='italic text-[19px]'>
              <span className='text-gray-400'>Mini</span>
              <span className='text-blue-300 font-extrabold'>Loja</span>
            </div>
          </div>
        </NavLink>
        <div className='pr-4 flex items-center gap-7'>
          <div className='hidden md:flex gap-5'>

            {user && token ? (
              <div className='flex gap-5'>
                <button
                  onClick={logout}
                  className='flex items-center gap-1.5 bg-[#e53e3e] text-white
            pt-1.5 pb-1.5 pl-2.5 pr-2.5 cursor-pointer rounded font-bold hover:bg-[#f15c5c] '
                >
                  <FiLogOut /> Logout
                </button>
                <NavLink
                  to="/profile"
                  className=" flex items-center gap-1.5 bg-green-400 text-white pt-1.5 pb-1.5 pl-2.5 pr-2.5 
            rounded font-bold cursor-pointer hover:bg-green-500"
                >
                  <FiUser /> Profile
                </NavLink>
              </div>
            ) : (
              <NavLink
                to="/login"
                className="bg-green-400 text-white pt-1.5 pb-1.5 pl-2.5 pr-2.5 rounded
          font-bold cursor-pointer hover:bg-green-500"
              >Sign In
              </NavLink>
            )}

            <div
              onClick={toggleTheme}
              className={`w-16 h-8 flex items-center rounded-full p-1 cursor-pointer 
            transition-colors ${dark ? "bg-gray-200" : "bg-gray-100"
                }`}
            >
              <div
                className={`w-6 h-6 rounded-full bg-blue-500 shadow-md transform 
              transition-transform ${dark ? "translate-x-8" : "translate-x-0"
                  }`}
              />
            </div>
          </div>

          <div className='md:hidden'>
            <Hamburger toggled={isOpen} toggle={setIsOpen} color="#000" />

          </div>
        </div>
      </header>

      {isOpen && (
        <div className='fixed left-0 right-0 bottom-0 top-15 w-full bg-[#ffffff] shadow-lg 
            flex flex-col items-end py-6 gap-6 z-40 pr-5'>
            {user && token ? (
              <div className='flex flex-col gap-5'>
                <button
                  onClick={logout}
                  className='flex items-center text-gray-500
            cursor-pointer font-bold gap-1.5 hover:text-gray-400'
                >
                  <FiLogOut /> Logout
                </button>
                <NavLink
                  to="/profile"
                  className=" flex items-center text-gray-500
            cursor-pointer font-bold gap-1.5 hover:text-gray-400"
                >
                  <FiUser /> Profile
                </NavLink>
              </div>
            ) : (
              <NavLink
                to="/login"
                className=" text-gray-500 font-bold cursor-pointe hover:text-gray-400"
              >Sign In
              </NavLink>
            )}

        </div>

      )}
    </>

  )
}

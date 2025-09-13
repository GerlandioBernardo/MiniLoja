import { useState } from 'react'
import iconShopVirtual from "../assets/loja-virtual.png";
import { NavLink } from "react-router-dom";
import { useAuth } from '../hook/useAuth';
import {FiLogOut, FiUser} from "react-icons/fi";

export default function Header() {
  const [dark, setDark] = useState(false);
  const { user, token, logout } = useAuth();

  function toggleTheme() {
    setDark(!dark);
    document.body.style.backgroundColor = dark ? "#f7f7f8" : "#000000";
  }

  return (
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
          <FiUser/> Profile
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

    </header>
  )
}

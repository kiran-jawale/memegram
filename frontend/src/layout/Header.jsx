import React from "react";
import { useLocation, NavLink } from 'react-router-dom';
import { useTheme } from '../contexts/themeContext';
import { navObj } from '../constants.js';
import Logout from "./parts/Logout.jsx";
import Login from '../layout/parts/Login.jsx';
import {useSelector} from 'react-redux'

const mainLinks = Object.values(navObj).filter(item => item.type === "main" && item.path !== "");

export default function Header() {
  const location = useLocation();
  const { isModern, toggleTheme } = useTheme();
  const authStatus = useSelector(state => state.status);

  return (
    <header id="header" className="bg-zinc-700 text-white sticky border-slate-700 border-2">
      <div className="flex justify-between py-4">
        <div className="flex items-center">
          <img src="path-to-your-logo.png" alt="Company Logo" className="w-16 h-16 rounded-full shadow-lg transition-transform duration-300 hover:scale-150 hover:shadow-xl" />
          <button
            className="ml-4 text-lg text-white hover:scale-110 transition-transform duration-300 font-bold rounded-full shadow-xl"
            onClick={toggleTheme}
          >
            {isModern ? 'Dark Mode' : 'Light Mode'}
          </button>
        </div>
        <div className="flex items-center">
          { location.pathname !== '/feed' &&
            <NavLink to="/feed" className={({ isActive }) => `py-2 px-4 font-bold rounded transition-colors 
            duration-300 ${isActive ? '' : 'font-semibold'} bg-gradient-to-tr from-zinc-700 via-zinc-800 to-zinc-900
             hover:bg-zinc-600`}>
              Checkout Feed{'>'}
            </NavLink>
          }
        </div>
      </div>
      <nav className="flex justify-between py-4">
        <div className="flex items-center">
          {authStatus ? <Logout /> : <Login />}
        </div>
        <ul className="flex space-x-6">
          {mainLinks.map((navItem, index) => (
            <li key={index}>
              <NavLink to={navItem.path} className={({ isActive }) => `py-2 px-4 font-bold rounded transition-colors duration-300 ${isActive ? 'text-orange-700' : 'text-white'} hover:bg-gray-50 hover:text-orange-700`}>
                {navItem.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

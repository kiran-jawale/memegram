import { NavLink } from 'react-router-dom';
import { navObj } from '../constants';

const mainLinks = Object.values(navObj).filter(item => item.type === "main" && item.path !== "");
const companyLinks = Object.values(navObj).filter(item => item.type === 'company');

export default function Footer() {
  return (
    <footer className="bg-zinc-700 h-48">
      {/* Top part */}
      <div id="top" className="h-6 bg-gradient-to-b from-zinc-900 to-zinc-700 flex justify-end">
        <button
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => window.scrollTo(0, 0)}
        >
          TOP
        </button>
      </div>

      {/* Mid part */}
      <div id="mid" className="h-24 flex justify-between">
        {/* Left part */}
        <div id="left" className="w-24 h-24 overflow-hidden">
          <img
            src=""
            alt=""
            className="object-cover w-full h-full"
          />
        </div>

        {/* Center part */}
        <div id="center" className="flex flex-col justify-between">
          <h3 className="text-gray-900">Links</h3>
          <ul>
            {mainLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive ? 'text-gray-900 font-bold' : 'text-gray-700'
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Right part */}
        <div id="right" className="flex flex-col justify-between">
          <h3 className="text-gray-900">Company</h3>
          <ul>
            {companyLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive ? 'text-gray-900 font-bold' : 'text-gray-700'
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom part */}
      <div id="bottom" className="h-6 text-gray-500 text-xs">
        &copy; 2022 Company Name. All rights reserved.
      </div>
    </footer>
  );
}
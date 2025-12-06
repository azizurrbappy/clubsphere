import React from 'react';
import Container from '../../components/Container/Container';
import { Link } from 'react-router';
import { Globe, Search } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="sticky top-0 backdrop-blur-2xl shadow-sm">
      <Container className="navbar">
        <div className="navbar-start space-x-10">
          <Link className="text-[#ff4a79] text-lg font-bold">ClubSphere</Link>

          <div>
            <form className="input outline-0 rounded-full pl-4 pr-0  h-fit hidden sm:flex">
              <input type="search" required placeholder="Search events..." />

              <span className="text-gray-300 max-md:hidden">|</span>

              <input
                type="search"
                placeholder="Neighborhood, city or zip"
                className="pl-2 max-md:hidden"
              />

              <button className="btn h-fit p-3 rounded-full bg-[#2a2a2d]">
                <Search size={16} className="text-white" />
              </button>
            </form>
          </div>
        </div>

        {/* <div className="navbar-center hidden lg:flex"></div> */}

        <div className="navbar-end space-x-5">
          <ul className="text-sm font-medium flex items-center gap-3">
            <li className="max-sm:hidden">
              <Link className="flex items-center gap-1">
                <Globe size={14} /> English
              </Link>
            </li>
            <li className="flex items-center gap-1">
              <Link>Clubs</Link>
            </li>
            <li className="flex items-center gap-1">
              <Link>Events</Link>
            </li>
            <li className="flex items-center gap-1">
              <Link>Login</Link>
            </li>
          </ul>
          <button className="btn h-fit px-4 py-2 rounded-full bg-[#2a2a2d] text-white font-medium">
            Signup
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;

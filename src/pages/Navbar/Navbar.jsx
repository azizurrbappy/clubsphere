import React, { use } from 'react';
import Container from '../../components/Container/Container';
import { Link } from 'react-router';
import { Globe, Search } from 'lucide-react';
import { AuthModal } from '../../Context/AuthModal';

const Navbar = () => {
  const { onboardingModal } = use(AuthModal);

  return (
    <div className="sticky top-0 backdrop-blur-2xl shadow-sm z-50">
      <Container className="navbar">
        <div className="navbar-start space-x-10">
          <Link className="text-[#3659e3] text-lg font-bold">ClubSphere</Link>

          <div>
            <form className="input outline-0 rounded-full pl-4 pr-0  h-fit hidden sm:flex">
              <input type="search" required placeholder="Search events..." />

              <span className="text-gray-300 max-md:hidden">|</span>

              <input
                type="search"
                placeholder="Neighborhood, city or zip"
                className="pl-2 max-md:hidden"
              />

              <button className="btn h-fit p-3 rounded-full bg-[#3659e3]">
                <Search size={16} className="text-white" />
              </button>
            </form>
          </div>
        </div>

        {/* <div className="navbar-center hidden lg:flex"></div> */}

        <div className="navbar-end space-x-1">
          <ul className="text-sm font-medium flex items-center nav-links">
            <Link className="flex items-center gap-1 max-sm:hidden mr-3">
              <Globe size={14} /> English
            </Link>

            <li>
              <Link to="/find/source=Events">Events</Link>
            </li>
            <li>
              <Link to="/find/source=Clubs">Clubs</Link>
            </li>
            <li>
              <button
                className="cursor-pointer"
                onClick={() => onboardingModal('login')}
              >
                Login
              </button>
            </li>
          </ul>
          <button
            onClick={() => onboardingModal()}
            className="btn h-fit px-4 py-2 rounded-full bg-[#3659e3] text-white font-medium"
          >
            Signup
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;

import React, { use } from 'react';
import Container from '../../components/Container/Container';
import { Link, Navigate, NavLink } from 'react-router';
import {
  CalendarDays,
  DoorOpen,
  Gauge,
  Globe,
  Search,
  UsersRound,
} from 'lucide-react';
import { AuthModal } from '../../Context/AuthModal';
import useAuth from '../../hooks/useAuth';

const Navbar = () => {
  const { onboardingModal } = use(AuthModal);
  const { user, loading, setLoading, signOutUser } = useAuth();

  const handleLogout = () => {
    signOutUser();
    setLoading(false);
  };

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
          </ul>

          <section className="pl-1.5">
            {loading ? (
              <div className="skeleton size-[35px] rounded-full"></div>
            ) : user ? (
              <div className="dropdown dropdown-end">
                {user.photoURL ? (
                  <div
                    tabIndex={0}
                    role="button"
                    className="size-[35px] rounded-full flex justify-center items-center cursor-pointer border border-[#ebebee]"
                  >
                    <img
                      src={user.photoURL}
                      alt="User Avatar"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                ) : (
                  <div tabIndex={0} role="button" className="cursor-pointer">
                    <div
                      className="size-[35px] rounded-full flex justify-center items-center"
                      style={{
                        backgroundImage:
                          'url("https://secure.meetupstatic.com/next/images/avatar/background-0.webp")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center',
                      }}
                    >
                      <button className="text-center font-medium">
                        {user.displayName.split(' ')[0].split('')[0]}
                      </button>
                    </div>
                  </div>
                )}

                <ul
                  tabIndex="-1"
                  className="dropdown-content menu bg-base-100 rounded-xl z-50 w-52 p-1.5  border border-[#e3e3e4] mt-5"
                >
                  <li>
                    <NavLink className="text-[#3a3a3d] text-sm">
                      <CalendarDays size={16} /> Your events
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="text-[#3a3a3d] text-sm">
                      <UsersRound size={16} /> Your clubs
                    </NavLink>
                  </li>

                  <hr className="text-[#ebebee] my-3" />

                  <li>
                    <NavLink to="/dashboard" className="text-[#3a3a3d] text-sm">
                      <Gauge size={16} /> Dashboard
                    </NavLink>
                  </li>
                  <li onClick={handleLogout}>
                    <NavLink className="text-[#3a3a3d] text-sm hover:text-red-500">
                      <DoorOpen size={16} /> Logout
                    </NavLink>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="space-x-4.5">
                <button
                  className="cursor-pointer text-sm font-medium"
                  onClick={() => onboardingModal('login')}
                >
                  Login
                </button>

                <button
                  onClick={() => onboardingModal()}
                  className="btn h-fit px-4 py-2 rounded-full bg-[#3659e3] text-white font-medium"
                >
                  Signup
                </button>
              </div>
            )}
          </section>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;

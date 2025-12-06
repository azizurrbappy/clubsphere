import React from 'react';
import Container from '../../components/Container/Container';
import { Link } from 'react-router';

const Navbar = () => {
  return (
    <div className="sticky top-0 backdrop-blur-2xl shadow-sm">
      <Container className="navbar">
        <div className="navbar-start">
          <Link className="text-[#ff4a79] text-lg font-bold">ClubSphere</Link>

          <div>
            <label className="input">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input type="search" required placeholder="Search" />
            </label>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex"></div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;

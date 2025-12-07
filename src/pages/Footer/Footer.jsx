import React from 'react';
import Container from '../../components/Container/Container';
import { Link } from 'react-router';
import { ArrowRight, Facebook, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#2a2a2d] text-[#ffffff7f] py-10">
      <Container className="flex justify-between flex-wrap">
        <div className="flex items-center gap-3">
          <Link className="text-[#ff4a79] text-2xl font-bold">ClubSphere.</Link>
          <p className="text-white text-2xl font-bold">
            The <span className="text-[ff4a79]">people</span> platform
          </p>
        </div>

        <div>
          <p className="text-2xl font-bold text-white flex items-center gap-2">
            <span className="max-sm:hidden">Create your own Meetup group.</span>
            <Link className="text-[#ffffff7f] flex items-center gap-2 max-sm:mt-3">
              Get Started <ArrowRight />
            </Link>
          </p>
        </div>
      </Container>

      <Container className="py-10">
        <hr className="text-[#464649]" />
      </Container>

      <Container className="footer sm:footer-horizontal mb-20">
        <nav className="space-y-2">
          <h6 className="text-white mb-3">Your Account</h6>
          <Link className="link link-hover">Sign up</Link>
          <Link className="link link-hover">Login</Link>
          <Link className="link link-hover">Help</Link>
        </nav>
        <nav className="space-y-2">
          <h6 className="text-white mb-3">Discover</h6>
          <Link className="link link-hover">Groups</Link>
          <Link className="link link-hover">Events</Link>
        </nav>
        <nav className="space-y-2">
          <h6 className="text-white mb-3">ClubSphere</h6>
          <Link className="link link-hover">About</Link>
          <Link className="link link-hover">Blog</Link>
        </nav>
        <nav className="bg-[#ffffff0c] px-5 py-6 rounded-4xl w-[320px]">
          <h6 className="text-white mb-3">Follow us</h6>
          <div className="flex items-center justify-between w-full">
            <Link to="https://www.facebook.com/mebappy10">
              <Facebook className="hover:text-[#1877F2]" />
            </Link>
            <Link to="https://github.com/azizurrbappy">
              <Github className="hover:text-[#ffffff]" />
            </Link>
            <Link to="https://www.linkedin.com/in/azizurrbappy">
              <Linkedin className="hover:text-[#1877F2]" />
            </Link>
          </div>
        </nav>
      </Container>

      <Container>
        <hr className="text-[#464649] mb-10" />
        <p className="text-center text-sm">
          © 2025 ClubSphere. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;

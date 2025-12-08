import React, { useState, type FormEvent, } from 'react';
import { Link } from 'react-router-dom';

import { ArrowUpRight, Asterisk, Menu, Search } from 'lucide-react';

import bg from '@assets/hero-bg.png';

import HeroOverlayTestimonialImages from './HeroOverlayTestimonialImage';

const Hero: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section
      className="bg-[15%_center] md:bg-center relative bg-cover min-h-screen text-white flex flex-col justify-between px-6 py-8"
      style={{ backgroundImage: `url(${bg})` }}
      aria-label="Hero section"
    >
      <div className="absolute pointer-events-none" />

      <div className="relative z-10 flex flex-wrap items-center justify-between w-full">
        <div className="flex items-center gap-4">
          <span className="font-bold text-lg tracking-widest">
            <span className='font-extrabold'>LOUVER</span>
            <span className="font-thin"> SPORT</span>
          </span>
        </div>

        <button
          onClick={() => setMenuOpen(prev => !prev)}
          aria-expanded={menuOpen}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/20 hover:bg-white/30"
          aria-label="Menu"
        >
          <Menu size={24} className="text-white" />
        </button>

        <div className="hidden md:block backdrop-blur-xs rounded-full px-10 py-4">
          <nav className="flex items-center gap-8 text-sm">
            <Link to="/about" className='hover:underline'>About Us</Link>
            <Link to="/facilities" className='hover:underline'>Facilities</Link>
            <Link to="/membership" className='hover:underline'>Membership</Link>
          </nav>
        </div>

        <div className="w-full md:w-auto flex items-center gap-3">
          <form onSubmit={handleSearchSubmit} className="flex items-center w-full md:w-auto backdrop-blur-sm rounded-full px-4 py-3 md:px-3 md:py-2 border border-white my-4 md:my-0">
            <label htmlFor="hero-search" className="sr-only">Search</label>
            <input
              id="hero-search"
              type="search"
              placeholder="Search here..."
              className="placeholder-white/70 text-white px-1 py-1 flex-1 text-sm"
            />
            <button type="submit" className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
              <Search size={18} strokeWidth={1.25} className="text-gray-400" />
            </button>
          </form>
          <div className="hidden md:flex">
            <button className="flex items-center gap-2 bg-gray-800 text-xs hover:bg-gray-900 text-white px-6 py-5 rounded-full font-semibold cursor-pointer">
              <span>Book Now</span>
              <ArrowUpRight size={16} aria-hidden />
            </button>
          </div>
        </div>

        
      </div>

      {menuOpen && (
        <>
          <div className="fixed inset-0 z-20 bg-black/40" onClick={() => setMenuOpen(false)} />
          <div
            role="menu"
            aria-label="Mobile navigation"
            className="absolute top-20 right-6 z-30 w-40 bg-white rounded-lg shadow-lg overflow-hidden md:hidden p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <a href="#about-us" className="block px-4 py-3 my-1 text-gray-700 text-sm focus:bg-black focus:text-white rounded-lg hover:bg-gray-700">About Us</a>
            <a href="#facilities" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 rounded-lg focus:bg-black focus:text-white my-1 ">Facilities</a>
            <a href="#membership" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 rounded-lg focus:bg-black focus:text-white my-1 ">Membership</a>
          </div>
        </>
      )}

      <div className="relative z-10 max-w-lg text-sm md:text-base md:ml-12 mb-44 flex flex-col items-start gap-4">
        <button className="border text-white px-4 py-2 md:px-6 md:py-4 rounded-full md:font-semibold w-auto">
          Sport Center
        </button>

        <h1 className="text-2xl font-light md:text-2xl lg:text-5xl leading-[1.05] md:leading-widest tracking-wider text-left">
          Your Play, Your Way — Modern Sports Facilities for Every Passion
        </h1>
      </div>

      <div className="absolute bottom-29 -right-2 md:right-12 md:bottom-22 pointer-events-none border border-blue-800 rounded-full inline-flex py-1 px-2">
        <HeroOverlayTestimonialImages />
      </div>

      <div className="absolute bottom-14 right-3 md:right-12 md:bottom-6 w-48 md:w-72 pointer-events-none">
        <p className="text-xs md:text-sm text-right mt-2 leading-tight">
          We're committed to delivering a high quality experience in a welcoming and supportive atmosphere
        </p>
      </div>

      <div className="text-xs absolute -right-10 top-1/3 md:top-68 md:right-24 md:right-42 w-32 h-32 md:w-40 md:h-40 pointer-events-none flex flex-col items-start md:items-start text-left md:text-left">
        <Asterisk className="size-2xs md:size-base" />
        <p>All in one sports <br /> facilities center</p>
      </div>
    </section>
  );
};

export default Hero;

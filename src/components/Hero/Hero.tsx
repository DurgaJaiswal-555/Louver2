import React from 'react';

import { Asterisk } from 'lucide-react';

import { TagLabel } from '@common-components/ui/tag-label';

import bg from '@assets/hero-bg.png';

import HeroOverlayTestimonialImages from './HeroOverlayTestimonialImage';
import Navbar from '@components/Navbar/Navbar.component';

const Hero: React.FC = () => {

  return (
    <section
      className="bg-[15%_center] md:bg-center relative bg-cover min-h-screen text-white flex flex-col justify-between px-6 py-8"
      style={{ backgroundImage: `url(${bg})` }}
      aria-label="Hero section"
    >
      <div className="absolute pointer-events-none" />

      <Navbar />

      <div className="relative z-10 max-w-lg text-sm md:text-base md:ml-12 mb-44 flex flex-col items-start gap-4">
        <TagLabel variant="outline" className="text-sm border-white md:text-base text-white px-4 py-2 md:p-7 md:font-semibold rounded-full">
          Sport Center
        </TagLabel>

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

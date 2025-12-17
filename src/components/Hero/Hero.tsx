import React from 'react';

import { Asterisk } from 'lucide-react';

import { TagLabel } from '@common-components/ui/tag-label';

import bg from '@assets/hero-bg.png';

import HeroOverlayTestimonialImages from './HeroOverlayTestimonialImage';
import Navbar from '@components/Navbar';

const Hero: React.FC = () => {

  return (
    <section
      className="bg-position-[15%_center] md:bg-center relative bg-cover min-h-screen text-white flex flex-col justify-between px-6 py-8"
      style={{ backgroundImage: `url(${bg})` }}
      aria-label="Hero section"
    >
      <div className="absolute pointer-events-none" />

      <Navbar />

      <div className="relative z-10 max-w-lg text-sm md:text-base md:ml-12 mb-44 flex flex-col items-start gap-4">
        <TagLabel variant="outline" className="text-sm border-white md:text-base text-white px-4 py-2 md:p-7 md:font-semibold rounded-full">
          Sport Center
        </TagLabel>

        <h1 className="text-2xl font-light xl:text-4xl leading-[1.05] md:leading-widest tracking-wider md:tracking-wider text-left">
          Your Play, Your Way — Modern Sports Facilities for Every Passion
        </h1>
      </div>

      <div className="absolute mr-2 bottom-22 -right-1 md:right-12 w-36 md:w-48 pointer-events-none">
        <HeroOverlayTestimonialImages />
      </div>

      <div className="absolute bottom-6 right-3 md:right-12 md:bottom-5 w-48 md:w-72 pointer-events-none">
        <p className="text-xs md:text-sm text-right mt-2 leading-tight">
          We're committed to delivering a high quality experience in a welcoming and supportive atmosphere
        </p>
      </div>
      <div className="absolute top-1/5 md:top-1/3 right-1/20 md:right-1/6 w-fit h-fit p-2 rounded-xl text-[8px] md:text-[10px] pointer-events-none flex flex-col items-start text-left max-md:bg-linear-to-b max-md:from-white/10 max-md:to-white/20 [max-width:340px]:bg-none">
        <Asterisk className="size-2xs md:size-base" />
        <p>All in one sports <br /> facilities center</p>
      </div>
    </section>
  );
};

export default Hero;

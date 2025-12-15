import { useRef, type JSX } from 'react';
import { ArrowLeft, ArrowRight, ChevronRight, MoveUpRight } from 'lucide-react';

import { facilities } from '@mocks/facility';

export default function FacilitiesSlider(): JSX.Element {
    const sliderRef = useRef<HTMLDivElement | null>(null);

    const next = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({
                left: sliderRef.current.clientWidth,
                behavior: 'smooth',
            });
        }
    };

    const prev = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({
                left: -sliderRef.current.clientWidth,
                behavior: 'smooth',
            });
        }
    };

    return (
        <section aria-label="Facilities Slider" className="px-6 py-12 max-w-7xl mx-auto">

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-0 mb-8">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <span className="text-sm leading-none flex items-center font-semibold text-gray-600 border border-gray-300 rounded-full px-8 py-3 w-fit">
                        Facilities
                    </span>
                    <span className="leading-none text-3xl md:text-4xl font-bold m-0">
                        Explore Our Facilities
                    </span>
                </div>

                <button className="bg-black cursor-pointer text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-gray-800 w-fit md:w-auto">
                    View all
                    <ChevronRight size={16} />
                </button>
            </div>

            {/* Slider */}
            <div className="relative">
                <div
                    ref={sliderRef}
                       className="flex gap-2 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar"
                >
                    {facilities.map((fac) => (
                        <div key={fac.id} className="snap-start shrink-0 w-64 md:w-80">
                            <article className="relative overflow-hidden rounded-2xl h-128 flex flex-col justify-between text-white shadow-lg">
                                <img
                                    src={fac.img}
                                    alt={fac.title}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />

                                <div className="relative z-10 p-5 flex flex-col h-full justify-between">
                                    <span className="inline-block self-start text-xs px-3 py-1 border rounded-full font-semibold mb-3">
                                        {fac.title}
                                    </span>

                                    <div className="flex items-center gap-3 bg-white/20 backdrop-blur-md rounded-lg p-3">
                                        <p className="text-sm font-thin tracking-wider flex-1">
                                            {fac.desc}
                                        </p>

                                        {fac.id === 1 && (
                                            <span className="inline-block bg-black text-white p-2 rounded-full cursor-pointer">
                                                <MoveUpRight />
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </article>
                        </div>
                    ))}
                </div>
            </div>

            {/* Controls + Text */}
            <div className="flex flex-col-reverse md:flex-row md:justify-between mt-2 md:mt-8">

                {/* Arrows */}
                <div className="flex gap-3 justify-end md:justify-start mt-6 md:mt-0">
                    <button
                        onClick={prev}
                        className="text-gray-500 w-12 h-12 bg-white flex items-center justify-center border rounded-full cursor-pointer"
                    >
                        <ArrowLeft />
                    </button>

                    <button
                        onClick={next}
                        className="text-gray-500 w-12 h-12 bg-white flex items-center justify-center border rounded-full cursor-pointer"
                    >
                        <ArrowRight />
                    </button>
                </div>

                {/* Description */}
                <p className="text-right md:text-right text-gray-600 max-w-2xl">
                    Book a court for focused practice, Team drills, or private
                    <span className="inline md:block ml-1">
                      coaching, and take your game to the next level
                    </span>
                </p>

            </div>
        </section>
    );
}

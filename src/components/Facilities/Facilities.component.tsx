import { useRef, type JSX } from 'react';
import { ArrowLeft, ArrowRight, ChevronRight, MoveUpRight } from 'lucide-react';

import { facilities } from '@mocks/facility';
import { Button } from '@common-components/ui/button';
import { TagLabel } from '@common-components/ui/tag-label';
import { OnlyIconButton } from '@common-components/ui/only-icon-btn/iconBtn';

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
                    <TagLabel variant="outline" className="text-gray-600 border-gray-600 rounded-full px-8 py-5">
                        Facilities
                    </TagLabel>
                    <h2 className="text-3xl md:text-4xl font-bold my-2">
                        Explore Our Facilities
                    </span>
                </div>
                <Button
                    rightIcon={<ChevronRight className="size-6" />}
                    className="bg-black cursor-pointer text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-800"
                >
                    View all
                </Button>
            </div>

            {/* Slider */}
            <div className="relative">
                <div
                    ref={sliderRef}
                    className="flex gap-2 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth"
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
                                    <TagLabel variant="outline" className="text-white self-start text-xs px-4 py-1 border-white rounded-full font-semibold mb-3">
                                        {fac.title}
                                    </TagLabel>

                                    <div className="flex items-center gap-3 bg-white/20 backdrop-blur-md rounded-lg p-3">
                                        <p className="text-sm font-thin tracking-wider flex-1">
                                            {fac.desc}
                                        </p>

                                        {fac.id === 1 && (
                                            <OnlyIconButton
                                                variant="outline"
                                                icon={<MoveUpRight size={22} />}
                                                className="bg-black size-10 border-none text-white p-2"
                                            />
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
                    <OnlyIconButton
                        onClick={prev}
                        variant="outline"
                        icon={<ArrowLeft size={22} />}
                        className="text-gray-500 size-12 border-gray-500 bg-white cursor-pointer"
                    />
                    <OnlyIconButton
                        onClick={next}
                        variant="outline"
                        icon={<ArrowRight size={22} />}
                        className="text-gray-500 size-12 border-gray-500 bg-white cursor-pointer"
                    />
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

import type { JSX } from 'react';

import { ArrowLeft, ArrowRight, MoveUpRight } from 'lucide-react';

import card1 from '@assets/Card1.png';
import card2 from '@assets/Card2.png';

interface CardItem {
    id: number;
    title: string;
    desc: string;
    cta: string;
    img?: string;
}

const cards: CardItem[] = [
    {
        id: 1,
        title: 'About Loure',
        desc: 'At Loure Sport center, we are passionate about providing top-notch sports facilities for athletes of all levels.',
        cta: 'Book Court'
    },
    {
        id: 2,
        title: 'Indoor Area',
        img: card1,
        desc: 'Versatile space for wide range of activities.',
        cta: 'Join Now'
    },
    {
        id: 3,
        title: 'Outdoor Area',
        img: card2,
        desc: 'Discover your new favorite sport, to play, train and compete.',
        cta: 'View Events'
    }
];

export default function Cards(): JSX.Element {
    return (
        <section aria-label="Cards" className="px-4 py-4 md:px-1 md:py-12 max-w-7xl mx-auto">
            <div className="grid gap-6 grid-cols-1 md:grid-cols-3 items-start">

                {/* Left: About */}
                <div className="flex flex-col justify-between bg-white rounded-2xl p-8 h-full">
                    <div>
                        <span className="inline-block bg-white border border-gray-200 text-sm px-3 py-1 rounded-full font-semibold mb-6">About Louvre</span>
                        <h3 className="text-2xl font-thin md:text-3xl leading-10 mb-6">At Louvre sport center, we're passionate about providing a top-notch environment for athletes of all levels.</h3>
                    </div>

                    <div>
                        <button className="inline-flex items-center gap-3 bg-gray-800 text-white px-6 py-3 rounded-full font-semibold cursor-pointer">
                            Get in Touch
                            <span className="inline-flex items-center justify-center w-7 h-7 bg-transparent rounded-full">
                                <MoveUpRight className="w-4 h-4" />
                            </span>
                        </button>
                    </div>
                </div>

                {/* Center: Large card */}
                <article className="relative rounded-2xl h-80 md:h-96 overflow-hidden">
                    <img src={cards[1].img} alt={cards[1].title} className="w-full h-full object-cover rounded-2xl" />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl" />

                    <div className="absolute left-6 top-6">
                        <span className="inline-block text-white text-sm px-3 py-1 rounded-full">Indoor Area</span>
                    </div>

                    <div className="absolute left-6 bottom-6 text-white max-w-2/3">
                        <div className="text-sm font-medium">Versatile space for a wide range of activities</div>
                    </div>

                    <button className="absolute cursor-pointer right-6 bottom-6 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md">
                        <MoveUpRight className="text-black" />
                    </button>
                </article>

                {/* Right: Small card */}
                <article className="rounded-2xl overflow-hidden">

                    <div className="relative h-64 md:h-64">
                        <img
                            src={cards[2].img}
                            alt={cards[2].title}
                            className="w-full h-full object-cover rounded-2xl"
                        />

                        <div className="absolute left-4 top-4">
                            <span className="inline-block backdrop-blur-xs border-white text-white text-sm px-3 py-1 rounded-full">
                                Outdoor Area
                            </span>
                        </div>

                        <div className="absolute left-6 bottom-6 text-white max-w-2/3">
                            <div className="text-xl font-medium">Futsal Court</div>
                        </div>

                        <button className="absolute cursor-pointer right-6 bottom-6 w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center shadow-md">
                            <MoveUpRight className="text-white" />
                        </button>
                    </div>

                    <div className="flex items-center justify-between py-4">
                        <div className="text-gray-500 text-md mr-2">
                            Discover your new - favourite place - to play, train, and compete.
                        </div>

                        <div className="flex gap-3">
                            <button className="text-gray-500 w-10 h-10 rounded-full bg-white flex items-center justify-center border rounded-full cursor-pointer"><ArrowLeft /></button>
                            <button className="text-gray-500 w-10 h-10 rounded-full bg-white flex items-center justify-center border rounded-full cursor-pointer"><ArrowRight /></button>
                        </div>
                    </div>

                </article>


            </div>
        </section>
    );
}
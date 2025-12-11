import type { JSX } from 'react';
import { ArrowLeft, ArrowRight, MoveUpRight } from 'lucide-react';

import { cards } from '@mocks/about';
import { Button } from '@common-components/ui/button';
import { TagLabel } from '@common-components/ui/tag-label';

export default function Cards(): JSX.Element {
    return (
        <section aria-label="Cards" className="px-4 py-4 md:px-1 md:py-12 max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-6 items-start">

                {/* Left: About */}
                <div className="flex flex-col justify-between bg-white rounded-2xl h-full min-w-72 flex-1">
                    <div>
                        <TagLabel variant="outline" className="bg-white border border-gray-200 text-black text-sm px-3 py-1 rounded-full font-semibold mb-8">
                            About Louvre
                        </TagLabel>
                        <h3 className="text-2xl font-light md:text-3xl leading-10 mb-6">At Louvre sport center, we're passionate about providing a top-notch environment for athletes of all levels.</h3>
                    </div>

                    <div>
                        <Button
                            rightIcon={<MoveUpRight className="size-4" />}
                            className="bg-gray-800 hover:bg-gray-900 text-white px-9 py-7 rounded-full font-semibold cursor-pointer gap-2"
                        >
                            Get in Touch
                        </Button>
                    </div>
                </div>

                {/* Center: Large card */}
                <article className="relative rounded-2xl h-80 md:h-96 overflow-hidden min-w-72 flex-1">
                    <img src={cards[1].img} alt={cards[1].title} className="w-full h-full object-cover rounded-2xl" />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl" />

                    <div className="absolute left-6 top-6">
                        <TagLabel variant="outline" className="text-white backdrop-blur-xs text-sm p-4 font-normal rounded-full">
                            Indoor Area
                        </TagLabel>
                    </div>

                    <div className="absolute left-6 bottom-6 text-white max-w-2/3">
                        <div className="text-sm font-medium">Versatile space for a wide range of activities</div>
                    </div>

                    <button className="absolute cursor-pointer right-6 bottom-6 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md">
                        <MoveUpRight className="text-black" />
                    </button>
                </article>

                {/* Right: Small card */}
                <article className="rounded-2xl overflow-hidden min-w-72 flex-1">

                    <div className="relative h-64 md:h-64">
                        <img
                            src={cards[2].img}
                            alt={cards[2].title}
                            className="w-full h-full object-cover rounded-2xl"
                        />

                        <div className="absolute left-4 top-4">
                            <TagLabel variant="outline" className="text-white backdrop-blur-xs text-sm px-4 py-4 font-normal rounded-full">
                                Outdoor Area
                            </TagLabel>
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

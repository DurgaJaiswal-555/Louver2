import { useState, type JSX } from "react";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

import { TESTIMONIALS } from "@mocks/testimonial";

export default function Testimonial(): JSX.Element {
    const navBtnClass = "size-14 rounded-full border border-gray-300 flex items-center justify-center bg-white shadow-sm hover:bg-gray-100";
    const [index, setIndex] = useState<number>(0);

    const prev = (): void => setIndex((i) => (i - 1 + TESTIMONIALS?.length) % TESTIMONIALS?.length);

    const next = (): void => setIndex((i) => (i + 1) % TESTIMONIALS?.length);

    return (
        <div className="h-auto bg-gray-100">
            <section aria-label="Testimonials" className="px-6 py-12">
                <div className="max-w-5xl mx-auto">
                    {/* Header */}
                    <div className="flex flex-col items-center mb-6">
                        <span className="inline-block bg-white/20 backdrop-blur-sm text-xs px-4 py-2 rounded-full font-semibold mb-3 border border-gray-300">
                            Testimonial
                        </span>
                        <h3 className="text-3xl text-center">
                            Here's what our clients are saying about us
                        </h3>
                    </div>

                    {/* Layout wrapper */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <button
                            onClick={prev}
                            aria-label="Previous testimonial"
                            className="hidden md:flex size-10 rounded-full border items-center justify-center bg-white shadow-sm hover:bg-gray-100"
                        >
                            <ChevronLeft />
                        </button>

                        <div className="relative w-full md:w-2/3">
                            {TESTIMONIALS?.length > 0 ? (TESTIMONIALS?.map((testimonial, idx) => (
                                <figure
                                    key={crypto.randomUUID()}
                                    className={`transition-all duration-500 ease-in-out ${idx === index
                                        ? "block opacity-100 translate-y-0"
                                        : "hidden opacity-0 -translate-y-4"
                                        }`}
                                >
                                    <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col md:flex-row items-center md:items-start gap-6">
                                        <img
                                            src={testimonial?.img}
                                            alt={testimonial?.name}
                                            className="size-40 rounded-full object-cover flex-shrink-0"
                                        />
                                        <figcaption className="flex-1 text-center md:text-left">
                                            <div className="font-semibold mb-2">{testimonial?.name}</div>
                                            <p className="text-gray-700 mb-2 mx-auto text-sm w-4/5 md:w-full">
                                                {testimonial?.text}
                                            </p>
                                            <p className="text-xs text-gray-700">{testimonial?.date}</p>
                                        </figcaption>
                                    </div>
                                </figure>
                            ))) : (<div className="text-center text-gray-500 py-10">
                                No testimonials available.
                            </div>)}
                        </div>

                        <button
                            onClick={next}
                            aria-label="Next testimonial"
                            className="hidden md:flex size-10 rounded-full border items-center justify-center bg-white shadow-sm hover:bg-gray-100"
                        >
                            <ChevronRight />
                        </button>

                        {/* Mobile arrows */}
                        <div className="flex md:hidden w-full items-center justify-between gap-8 mt-8">
                            <button
                                onClick={prev}
                                aria-label="Previous testimonial"
                                className={navBtnClass}
                            >
                                <ArrowLeft />
                            </button>
                            <button
                                onClick={next}
                                aria-label="Next testimonial"
                                className={navBtnClass}
                            >
                                <ArrowRight />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

import type { JSX } from "react";

import { FACILITIES, SOCIAL_LINKS } from "@mocks/footer";
import { Link } from "react-router-dom";

export default function Footer(): JSX.Element {

    return (
        <footer className="px-6 mb-12">
            <div className="max-w-6xl mx-auto">
                <div className="bg-sky-200 rounded-2xl p-8 md:p-12 text-black shadow-sm">
                    <div className="grid grid-cols-1 md:grid-cols-6 gap-2">

                        <div className="col-span-1 md:col-span-3 mb-6 md:mb-0">
                            <h3 className="text-lg font-semibold mb-4">
                                Your Play, Your Way-<br />
                                Modern Sports Facilities<br />
                                for Every Passion
                            </h3>
                            <button className="mt-2 inline-block bg-white text-sm text-black px-4 py-2 rounded-full border">
                                Louvre sport
                            </button>
                        </div>

                        <div className="col-span-1 md:col-span-3 md:flex md:justify-end">
                            <div className="grid grid-cols-3 gap-1">

                                <div>
                                    <h4 className="font-semibold mb-3">Facilities</h4>

                                    <ul className="text-xs md:text-sm space-y-2 text-gray-800">
                                        {FACILITIES.map((facility) => (
                                            <li key={facility.id}>
                                                {facility.label}
                                            </li>
                                        ))}
                                    </ul>
                                </div>


                                <div>
                                    <h4 className="font-semibold mb-3">About Us</h4>
                                    <ul className="text-sm space-y-2 text-gray-800">
                                        <li>Our Mission</li>
                                        <li>Vision</li>
                                        <li>Community</li>
                                    </ul>
                                </div>
                                <div>
                                    <div>
                                        <h4 className="font-semibold mb-3">Social</h4>
                                        <div className="flex flex-col gap-3">
                                            {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                                                <Link
                                                    key={label}
                                                    to={href}
                                                    aria-label={label}
                                                    className="inline-flex items-center gap-1 bg-white/50 px-2 py-1 rounded-full border w-max text-xs"
                                                >
                                                    <Icon className="size-4 md:size-6" />
                                                    {label}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-black/10 mt-6 pt-4 text-sm flex flex-col md:flex-row items-center justify-between">
                        <div className="text-gray-700">Privacy Policy/Terms</div>
                        <div className="text-gray-700">All right reserved©louvre 2024</div>
                    </div>
                </div>
            </div>
        </footer >
    );
}

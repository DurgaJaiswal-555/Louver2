import type { JSX } from "react";
import { Send } from "lucide-react";

import heroImg from "@assets/membership.png";

export default function Subscribe(): JSX.Element {
  return (
    <section className="px-4 my-12">
      <div className="max-w-6xl mx-1 md:mx-auto">
        <div className="bg-gray-900 text-white rounded-2xl overflow-hidden p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 shadow-lg">
          
          <div className="w-full md:w-1/3 flex-shrink-0">
            <div className="overflow-hidden rounded-lg">
              <img
                src={heroImg}
                alt="fitness"
                className="w-full h-56 md:h-72 object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col justify-between gap-4">
            <div className="flex gap-3 mb-4">
              <span className="px-6 py-2 rounded-full bg-gray-800 border border-gray-700 text-sm">
                Membership
              </span>
              <span className="px-6 py-2 rounded-full bg-white text-black text-sm">
                Newsletter
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl font-semibold leading-tight mb-2 text-wrap px-1 md:px-0">
              Get the Latest Updates, Special Offers, and Exclusive Event Invitations!
            </h2>

            <div className="mt-4">
              <label htmlFor="email" className="sr-only">
                Email
              </label>

              <div className="flex items-center max-w-md bg-gray-800 rounded-full px-4 py-2">
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your Email Id"
                  className="bg-transparent outline-none flex-1 text-sm text-gray-200 placeholder-gray-400 px-2"
                />
                <button
                  type="button"
                  aria-label="Subscribe"
                  className="ml-3 p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow flex items-center justify-center"
                >
                  <Send />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

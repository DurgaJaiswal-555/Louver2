import { useState, type JSX } from 'react';
import { ChevronRight } from 'lucide-react';

import type { TabItem } from './SportsCategory.types';
import { SPORTS_TAB_DATA } from '@mocks/sportsCategory';

export default function SportsCategory(): JSX.Element {
  const defaultTab = SPORTS_TAB_DATA[0]?.id ?? '';
  const [active, setActive] = useState<string | undefined>(defaultTab);

  const activeTab: TabItem =
    SPORTS_TAB_DATA.find((t) => t.id === active) || SPORTS_TAB_DATA[0];

  return (
    <section aria-label="Facilities tabs" className="px-6 py-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">

        {/* LEFT CONTENT */}
        <div className="md:col-span-6 justify-between h-full">

          <div className="flex flex-wrap gap-2 md:gap-3 mb-2 md:mb-6">
            {SPORTS_TAB_DATA?.length > 0 ? (
              SPORTS_TAB_DATA.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setActive(t.id)}
                  className={`text-sm px-3 py-2 md:px-4 rounded-full font-medium transition-shadow  
                    ${active === t.id
                      ? 'bg-sky-100 text-sky-800 shadow-md'
                      : 'bg-white border border-gray-200 text-gray-700'}`}
                  aria-pressed={active === t.id}
                >
                  {t.label}
                </button>
              ))
            ) : (
              <p className="text-sm text-gray-400">No sports available</p>
            )}

          </div>

          <h2 className="text-3xl md:text-5xl mb-4 w-3/4 md:w-full">
            {activeTab?.title}
          </h2>

          <p className="text-gray-600 text-sm md:text-base mb-6 w-3/4 md:w-full">
            {activeTab?.desc}
          </p>

          <div className="flex items-center gap-4">
            <button className="bg-black text-white px-5 py-3 rounded-full font-semibold flex items-center gap-2">
              Book Now
              <ChevronRight />
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative overflow-hidden md:col-span-6 shadow-lg shadow-blue-300 rounded-2xl">
          <img
            src={activeTab?.img}
            alt={activeTab?.label}
            className="w-full h-80 md:h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

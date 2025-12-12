import { useState, type FormEvent } from 'react';
import { Link, NavLink } from "react-router-dom";

import { ArrowUpRight, Menu, Search } from 'lucide-react';

import { Button } from '@common-components/ui/button';
import { InputFieldWithIconButton } from '@common-components/ui/input-with-icon-btn';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    const navItems = [
        { label: "About Us", to: "/about" },
        { label: "Facilities", to: "/facilities" },
        { label: "Membership", to: "/membership" },
    ];

    return (
        <>
            <div className="relative z-10 flex flex-wrap items-center justify-between w-full">
                <div className="flex items-center gap-4">
                    <Link to="/" className="font-bold text-lg tracking-widest">
                        <span className='font-extrabold'>LOUVER</span>
                        <span className="font-thin"> SPORT</span>
                    </Link>
                </div>

                <button
                    onClick={() => setMenuOpen(prev => !prev)}
                    aria-expanded={menuOpen}
                    className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/20 hover:bg-white/30"
                    aria-label="Menu"
                >
                    <Menu size={24} className="text-white" />
                </button>

                <div className="hidden md:block backdrop-blur-xs rounded-full px-12 py-4">
                    <nav className="flex items-center gap-8 text-md">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                className={({ isActive }) =>
                                    isActive
                                        ? "underline font-semibold text-white"
                                        : "hover:underline text-white/80"
                                }
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </nav>
                </div>

                <div className="w-full md:w-auto flex items-center gap-3">
                    <form onSubmit={handleSearchSubmit} className="flex items-center w-full md:w-auto backdrop-blur-sm rounded-full px-4 py-3 md:px-3 md:py-1 border border-white my-4 md:my-0">
                        <InputFieldWithIconButton
                            placeholder="Search..."
                            variant="outline"
                            inputSize="lg"
                            className="placeholder-white/70 text-white px-4 flex-1 text-sm outline-none border-none w-full md:w-64"
                            rightButtonIcon={<Search strokeWidth={2} className="p-2 size-10 text-gray-800 rounded-full bg-gray-300" />}
                        />
                    </form>
                    <div className="hidden md:flex">
                        <Button
                            variant="primary"
                            rightIcon={<ArrowUpRight className="size-6" />}
                            className="bg-gray-800 text-md hover:bg-gray-900 text-white px-6 py-6 rounded-full font-semibold cursor-pointer"
                        >
                            Book Now
                        </Button>
                    </div>
                </div>
            </div>

            {menuOpen && (
                <>
                    <div
                        className="fixed inset-0 z-20 bg-black/40"
                        onClick={() => setMenuOpen(false)}
                    />

                    <div
                        role="menu"
                        aria-label="Mobile navigation"
                        className="absolute top-20 right-6 z-30 w-40 bg-white rounded-lg shadow-lg overflow-hidden md:hidden p-2"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {navItems.map((item) => (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                onClick={() => setMenuOpen(false)}
                                className={({ isActive }) => `block px-4 py-3 my-1 text-sm rounded-lg ${isActive ? "bg-black text-white font-semibold" : "text-gray-700 hover:bg-gray-100"}`}
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </div>
                </>
            )}

        </>
    );
}
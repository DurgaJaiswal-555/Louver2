import React, { useState } from "react";
import contactImg from "@assets/TileImage.jpg";
import type FormState from "./ContactUs.types";

export default function ContactForm() {
    const [form, setForm] = useState<FormState>({
        name: "",
        email: "",
        contact: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setForm({ name: "", email: "", contact: "" });
    };

    return (
        <section aria-label="Contact us" className="py-12 bg-[#F6F5F5]">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-2 lg:gap-4 items-center">
                    {/* LEFT: image */}
                    <div className="order-2 md:order-1 overflow-hidden shadow-lg">
                        <img
                            src={contactImg}
                            alt="Contact"
                            className="w-full h-[420px] md:h-[520px] object-cover"
                        />
                    </div>

                    {/* RIGHT: form */}
                    <div className="order-1 md:order-2 flex flex-col px-6 md:ml-12 lg:ml-18 mx-auto">
                        <h2 className="text-4xl md:text-5xl xl:text-8xl lg:text-7xl mb-4 font-light tracking-tight">
                            Get in Touch
                        </h2>
                        <p className="text-xs md:text-base text-gray-600 mb-6">
                            Reach out and we will get in touch with you in 24 hours.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-4 w-full">
                            <div>
                                <label htmlFor="name" className="sr-only">
                                    Name
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your name"
                                    className="w-full mb-1 rounded-full border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-400"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="sr-only">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="Email address"
                                    className="w-full mb-1 rounded-full border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-400"
                                />
                            </div>

                            <div>
                                <label htmlFor="contact" className="sr-only">
                                    Contact number
                                </label>
                                <input
                                    id="contact"
                                    name="contact"
                                    value={form.contact}
                                    onChange={handleChange}
                                    required
                                    placeholder="Contact number"
                                    className="w-full mb-1 rounded-full border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-400"
                                />
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="w-full my-1 bg-[#AEE5FF] hover:bg-[#66cfff] text-[#151B1E] px-6 py-3 rounded-full font-semibold"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

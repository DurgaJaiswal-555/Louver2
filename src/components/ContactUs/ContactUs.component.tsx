import React, { useState } from "react";

import contactImg from "@assets/TileImage.jpg";
import { INPUT_FIELDS } from "@mocks/contactUs";

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
        <section aria-label="Contact us" className="py-12 bg-gray-100">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
                    {/* LEFT: image */}
                    <div className="order-2 md:order-1 overflow-hidden shadow-lg">
                        <img
                            src={contactImg}
                            alt="Contact"
                            className="w-full h-96 md:h-128 object-cover"
                        />
                    </div>

                    {/* RIGHT: form */}
                    <div className="order-1 md:order-2 flex flex-col px-6 md:ml-18 mx-auto">
                        <h2 className="text-4xl md:text-7xl mb-4 font-light tracking-tight">
                            Get in Touch
                        </h2>
                        <p className="text-xs md:text-base text-gray-600 mb-6">
                            Reach out and we will get in touch with you in 24 hours.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-4 w-full">
                            {INPUT_FIELDS?.map((field) => (
                                <div key={field?.id}>
                                    <label htmlFor={field?.id} className="sr-only">
                                        {field?.placeholder}
                                    </label>

                                    <input
                                        id={field?.id}
                                        name={field?.name}
                                        type={field?.type}
                                        value={form[field?.name]}
                                        onChange={handleChange}
                                        required={field?.required}
                                        placeholder={field?.placeholder}
                                        className={"w-full mb-1 rounded-full border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-400"}
                                    />
                                </div>
                            ))}

                            <button
                                type="submit"
                                className="w-full my-1 bg-sky-300 hover:bg-sky-400 text-slate-900 px-6 py-3 rounded-full font-semibold cursor-pointer"
                            >
                                Submit
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        </section>
    );
}

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

    const isFormKey = (key: string): key is keyof FormState => {
        return key in form;
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
                            {INPUT_FIELDS.map((field) => {
                                if (!isFormKey(field.name)) return null;

                                return (
                                    <div key={field.id}>
                                        <input
                                            id={field.id}
                                            name={field.name}
                                            type={field.type}
                                            value={form[field.name]}
                                            onChange={handleChange}
                                            placeholder={field.placeholder}
                                            required={field.required}
                                        />
                                    </div>
                                );
                            })}


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

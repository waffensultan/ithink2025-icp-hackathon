"use client";

import React from "react";

import { motion } from "motion/react";

export default function Messages() {
    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="bg-[#f8f8e0] min-h-screen flex flex-col"
        >
            {/* Messages Title */}
            <section className="px-4 pt-3 pb-2">
                <h2 className="text-2xl font-bold text-primary mb-2">
                    Messages
                </h2>
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full rounded-md border border-primary/70 px-4 py-2 text-primary bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/20 mb-2"
                />
            </section>

            {/* Message List */}
            <section className="flex-1 flex flex-col divide-y divide-primary/10">
                {/* Message Item */}
                {Array.from({ length: 4 }).map((_, index) => (
                    <div key={index} className="flex items-center px-4 py-3">
                        <div className="w-12 h-12 rounded-full bg-primary mr-4 flex-shrink-0">
                            <img
                                src={`/profile/buyer.jpg`}
                                alt="farmer"
                                className="object-cover h-full w-full rounded-full"
                            />
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="font-bold text-primary text-base leading-tight">
                                Pepito Buyer
                            </div>
                            <div className="text-primary text-sm leading-tight">
                                Magandang araw!
                            </div>
                        </div>
                        <div className="text-xs text-primary/60 ml-2 whitespace-nowrap">
                            9:00 AM
                        </div>
                    </div>
                ))}
            </section>
        </motion.main>
    );
}

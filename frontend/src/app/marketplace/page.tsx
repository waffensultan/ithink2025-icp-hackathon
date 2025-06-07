"use client";

import Link from "next/link";

import { motion } from "motion/react";

export default function Marketplace() {
    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="bg-[#f8f8e0] min-h-screen flex flex-col"
        >
            {/* Marketplace Title and Filter */}
            <section className="px-4 pt-3 pb-2 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-primary mb-2">
                    Marketplace
                </h2>
                <button className="p-2">
                    <img
                        src="/icons/mingcute_filter-fill.svg"
                        alt="Filter"
                        className="w-7 h-7 object-contain"
                    />
                </button>
            </section>

            {/* Search Bar */}
            <section className="px-4 pb-2">
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full rounded-xl border border-primary/70 px-4 py-2 text-primary bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/20 mb-2"
                />
            </section>

            {/* Product Grid */}
            <section className="px-4 grid grid-cols-2 gap-3 pb-8">
                {Array.from({ length: 6 }).map((_, i) => (
                    <Link
                        href={"/product-info"}
                        key={i}
                        className="rounded-xl border-2 border-primary flex flex-col overflow-hidden bg-transparent"
                    >
                        <img
                            src="/profile/crops/rice.jpg"
                            alt="rice"
                            className="w-full h-28 object-cover"
                        />
                        <div className="flex flex-col gap-1 p-3 flex-1">
                            <div className="flex items-center justify-between">
                                <h3 className="font-bold text-lg text-primary">
                                    Rice
                                </h3>
                                <div className="flex items-center gap-1">
                                    <img
                                        src="/icons/solar_star-line-duotone.svg"
                                        alt="star"
                                        className="w-4 h-4 object-contain"
                                    />
                                    <span className="text-xs text-primary/60 font-semibold">
                                        4.5
                                    </span>
                                </div>
                            </div>
                            <div className="text-sm text-primary font-semibold">
                                200 PHP{" "}
                                <span className="text-xs text-primary/60 font-normal">
                                    0.75 ICP
                                </span>
                            </div>
                            <div className="text-xs text-primary/80">
                                Indang, Cavite
                            </div>
                        </div>
                    </Link>
                ))}
            </section>
        </motion.main>
    );
}

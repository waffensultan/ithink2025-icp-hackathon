"use client";

import { motion } from "motion/react";

export default function FarmerDashboard() {
    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="bg-[#f8f8e0] min-h-screen flex flex-col"
        >
            {/* Dashboard Title */}
            <section className="px-4 pt-3 pb-2">
                <h2 className="text-2xl font-bold text-primary mb-2">
                    Dashboard
                </h2>
                <div className="flex gap-2 mb-2">
                    <button className="px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-[10px] font-medium text-primary leading-tight min-w-[60px]">
                        Real-time
                    </button>
                    <button className="px-3 py-1 rounded-full border border-primary/10 text-[10px] font-medium text-primary/70 leading-tight min-w-[60px]">
                        Yesterday
                    </button>
                    <button className="px-3 py-1 rounded-full border border-primary/10 text-[10px] font-medium text-primary/70 leading-tight min-w-[60px]">
                        Past 7 Days
                    </button>
                    <button className="px-3 py-1 rounded-full border border-primary/10 text-[10px] font-medium text-primary/70 leading-tight min-w-[60px]">
                        Past 30 Days
                    </button>
                </div>
                <div className="text-xs text-primary/50 font-medium mb-2">
                    Date Period: May 4, 2025 – June 4, 2025
                </div>
            </section>

            {/* Dashboard Cards - strict layout */}
            <section className="px-4 flex flex-col gap-3 pb-4">
                <div
                    className="rounded-2xl border border-primary p-1 flex flex-col relative mb-1"
                    style={{ minHeight: "140px" }}
                >
                    <div className="flex items-center justify-between mb-2">
                        <div className="w-14 h-14 flex items-center justify-center">
                            <img
                                src="/icons/solar_dollar-bold.svg"
                                alt="Earnings"
                                className="w-10 h-10 object-contain"
                            />
                        </div>
                        {/* Logo placeholder for infinity-like icon */}
                        <div className="w-9 h-9 rounded-full border border-primary/20 flex items-center justify-center bg-primary/10 mr-2">
                            <div className="w-7 h-7 rounded-full bg-primary/40 flex items-center justify-center">
                                <span className="text-white text-xs font-bold">
                                    Logo
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-end gap-2">
                        <span className="text-2xl font-bold text-primary pl-4">
                            12,100.75 PHP
                        </span>
                        <span className="text-base text-primary/60 font-semibold">
                            41.42 ICP
                        </span>
                    </div>
                    <div className="text-xs text-primary/50 font-medium pl-4">
                        Kita
                    </div>
                </div>
                <div className="flex gap-3">
                    <div className="rounded-2xl border border-primary p-1 flex-1 flex flex-col items-start min-h-[110px]">
                        <div className="w-14 h-14 flex items-center justify-center mb-1">
                            <img
                                src="/icons/solar_graph-up-bold.svg"
                                alt="Graph Up"
                                className="w-7 h-7 object-contain"
                            />
                        </div>
                        <span className="text-xl font-bold text-accent pl-3">
                            678
                        </span>
                        <span className="text-xs text-primary/70 font-medium pl-3 pb-3">
                            Nabentang Tanim
                        </span>
                    </div>
                    <div className="rounded-2xl border border-primary p-1 flex-1 flex flex-col items-start min-h-[110px]">
                        <div className="w-14 h-14 flex items-center justify-center mb-1">
                            <img
                                src="/icons/ri_plant-fill.svg"
                                alt="Plant"
                                className="w-7 h-7 object-contain"
                            />
                        </div>
                        <span className="text-xl font-bold text-[#fcca00] pl-3">
                            30
                        </span>
                        <span className="text-xs text-primary/70 font-medium pl-3 pb-3">
                            Still Available
                        </span>
                    </div>
                </div>
            </section>

            {/* Graph Section - strict layout */}
            <section className="px-4 pb-24">
                <div
                    className="rounded-2xl border border-primary p-1 relative overflow-hidden"
                    style={{ minHeight: "180px" }}
                >
                    {/* Y-axis labels */}
                    <div
                        className="absolute left-2 top-6 flex flex-col gap-6 text-xs text-primary/40 font-semibold z-10"
                        style={{
                            height: "100%",
                            justifyContent: "space-between",
                        }}
                    >
                        <span>12,000 PHP</span>
                        <span>9,000 PHP</span>
                        <span>6,000 PHP</span>
                        <span>3,000 PHP</span>
                    </div>
                    {/* Graph placeholder */}
                    <div className="h-36 flex items-end justify-center w-full">
                        <div className="w-full h-full flex items-end">
                            {/* Simulated graph line */}
                            <svg
                                width="100%"
                                height="100%"
                                viewBox="0 0 320 120"
                                className="absolute left-0 top-0 z-0"
                            >
                                <polyline
                                    fill="none"
                                    stroke="#337418"
                                    strokeWidth="3"
                                    points="0,100 40,80 80,90 120,60 160,70 200,40 240,60 280,30 320,50"
                                />
                                <rect
                                    x="200"
                                    y="40"
                                    width="4"
                                    height="80"
                                    fill="#337418"
                                    opacity="0.2"
                                />
                            </svg>
                            {/* Data point highlight */}
                            <div className="absolute left-[62%] top-[38%] w-3 h-3 bg-primary rounded-full border-2 border-white z-10" />
                            {/* Data label */}
                            <div className="absolute left-[58%] top-[20%] rounded-xl shadow px-3 py-1 flex flex-col items-center border border-primary/10 z-20 bg-[#f8f8e0]">
                                <span className="text-primary font-bold text-base">
                                    1,350.04
                                </span>
                                <span className="text-green-600 text-xs font-semibold">
                                    +3.4%
                                </span>
                                <span className="text-primary/50 text-xs">
                                    May 22
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </motion.main>
    );
}

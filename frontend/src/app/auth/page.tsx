"use client";

import { useState, useEffect } from "react";

import { useRouter } from "next/navigation";

import { motion } from "motion/react";
import { OnboardingRole } from "@/app/page";

export default function Auth() {
    const [savedRole, setSavedRole] = useState<OnboardingRole | null>(null);

    const router = useRouter();

    useEffect(() => {
        const role = localStorage.getItem(
            "selectedRole"
        ) as OnboardingRole | null;

        if (role) {
            if (typeof window !== "undefined" && window.localStorage) {
                setSavedRole(role);
            }
        }
    }, []);

    const redirect = () => {
        if (savedRole) {
            if (savedRole === "magsasaka") {
                router.push("/farmer");
            } else if (savedRole === "mamimili") {
                router.push("/buyer");
            }
        }
    }

    return (
        <main className="bg-primary text-dark-foreground h-screen flex flex-col justify-end items-center relative overflow-hidden">
            <img
                src="/short_line.svg"
                alt="short-line"
                className="absolute -top-10 -rotate-5 right-0 w-50"
            />

            <motion.div
                layout
                className="flex flex-col w-full z-10"
                initial={{ y: 300 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
            >
                <div className="flex flex-col gap-2 px-8">
                    <h1 className="font-bold text-6xl">Log In</h1>
                    <h3 className="text-xl">
                        Mag log-in gamit ang iyong wallet
                    </h3>
                </div>

                <motion.article
                    layout
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.5,
                        ease: "easeOut",
                    }}
                    className="bg-dark-foreground flex flex-col gap-3 w-full rounded-t-4xl p-8 mt-6"
                >
                    <h5 className="text-light-foreground font-semibold text-lg tracking-tight">
                        Mag log-in gamit:
                    </h5>

                    <section className="flex flex-col gap-1">
                        <button onClick={() => redirect()} className="bg-[#337418] text-dark-foreground font-semibold text-md rounded-xl py-5">
                            <span>COINBASE</span>
                        </button>

                        <button onClick={() => redirect()} className="bg-[#337418] text-dark-foreground font-semibold text-md rounded-xl py-5">
                            <span>INTERNET COMPUTER</span>
                        </button>

                        <button onClick={() => redirect()} className="bg-[#337418] text-dark-foreground font-semibold text-md rounded-xl py-5">
                            <span>METAMASK</span>
                        </button>
                    </section>
                </motion.article>
            </motion.div>

            <img
                src="/long_line.svg"
                alt="long-line"
                className="absolute bottom-0 left-0 w-100"
            />
        </main>
    );
}

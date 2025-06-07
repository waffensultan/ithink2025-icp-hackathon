"use client";

import { useState, useEffect } from "react";

import { usePathname } from "next/navigation";
import { motion } from "motion/react";

import {
    BadgeCheckIcon,
    StarIcon,
    PhoneIcon,
    CopyIcon,
    LeafIcon,
    LucideIcon,
    LeafyGreenIcon,
    WalletIcon,
    HeartIcon,
    ShoppingCartIcon,
} from "lucide-react";

import Link from "next/link";

import { type OnboardingRole } from "@/app/page";

export default function Profile() {
    const [user, setUser] = useState<OnboardingRole | null>(null);

    const currentPath = usePathname();

    useEffect(() => {
        const role = localStorage.getItem(
            "selectedRole"
        ) as OnboardingRole | null;

        if (role) {
            if (typeof window !== "undefined" && window.localStorage) {
                setUser(role);
            }
        }
    }, []);

    const statuses: Record<
        OnboardingRole,
        Record<string, number | string[]>
    > = {
        magsasaka: {
            "Isi-ship": 12,
            Kumpleto: 260,
            Ibinalik: 2,
            Rebyu: 210,
        },
        mamimili: {
            Babayarana: 2,
            Ipapadala: 1,
            Tatanggapin: 2,
            Rebyu: 210,
        },
    };

    const statusesColors: Record<OnboardingRole, Record<"colors", string[]>> = {
        magsasaka: {
            colors: [
                "border-warning",
                "border-success",
                "border-danger",
                "border-primary",
            ],
        },
        mamimili: {
            colors: [
                "border-danger",
                "border-warning",
                "border-success",
                "border-primary",
            ],
        },
    };

    const links: Record<
        OnboardingRole,
        Record<string, Record<string, LucideIcon | string>>
    > = {
        magsasaka: {
            Bukid: {
                icon: LeafIcon,
                link: "/farmer/profile",
            },
            Tanim: {
                icon: LeafyGreenIcon,
                link: "/farmer/profile/crops",
            },
            Wallet: {
                icon: WalletIcon,
                link: "/farmer/profile/wallet",
            },
        },
        mamimili: {
            Aktibidad: {
                icon: HeartIcon,
                link: "/buyer/profile",
            },
            Cart: {
                icon: ShoppingCartIcon,
                link: "/buyer/profile/cart",
            },
            Wallet: {
                icon: WalletIcon,
                link: "/buyer/profile/wallet",
            },
        },
    };

    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full flex flex-col gap-3"
        >
            <section className="w-full pt-25 flex items-center gap-2 px-4 bg-gradient-to-t from-dark-foreground to-[#cbd7bf]">
                <div className="w-25 h-20 rounded-md border-1 border-primary">
                    <img
                        src={`/profile/${
                            user === "magsasaka" ? "farmer" : "buyer"
                        }.jpg`}
                        alt="farmer"
                        className="object-cover h-full w-full rounded-md"
                    />
                </div>
                <section className="flex flex-col gap-1 w-full overflow-auto">
                    <div className="flex items-center gap-1 text-primary">
                        <h1 className="font-bold text-2xl">
                            {user === "magsasaka"
                                ? "Farmer Dela Cruz"
                                : "Buyer Pepito"}
                        </h1>
                        {user === "magsasaka" && <BadgeCheckIcon />}
                    </div>
                    <div className="flex items-center gap-1 whitespace-nowrap overflow-x-scroll w-full">
                        {user === "magsasaka" && (
                            <div className="flex items-center gap-1 py-1 px-4 rounded-full bg-[#bccdb4] text-[#648f71] text-sm border-1 border-primary">
                                <StarIcon size={20} />
                                <span>4.5</span>
                            </div>
                        )}

                        <div className="flex items-center gap-1 py-1 px-4 rounded-full bg-[#bccdb4] text-[#648f71] text-sm border-1 border-primary">
                            <PhoneIcon size={20} />
                            <span>09919191199</span>
                        </div>

                        <div className="flex items-center gap-1 py-1 px-4 rounded-full bg-[#bccdb4] text-[#648f71] text-sm border-1 border-primary">
                            <CopyIcon size={20} />
                            <span>c3h5v-xiaaa-aaaah-qcfzq-cai</span>
                        </div>
                    </div>
                </section>
            </section>

            <section className="px-4">
                <div className="border-3 border-primary text-primary rounded-xl w-full p-1 flex flex-col gap-1">
                    <h2 className="font-bold text-xl pl-2">
                        {user === "magsasaka"
                            ? "Status ng Order"
                            : "Mga Binili"}
                    </h2>
                    <div className="flex items-center justify-evenly gap-1">
                        {user &&
                            statuses[user] &&
                            Object.entries(statuses[user]).map(
                                ([status, count], index) => (
                                    <article
                                        key={status}
                                        className={`grow border ${statusesColors[user].colors[index]} rounded-2xl p-2 flex flex-col`}
                                    >
                                        <h3 className="font-bold text-xl">
                                            {count}
                                        </h3>
                                        <h5 className="tracking-tight text-sm">
                                            {status}
                                        </h5>
                                    </article>
                                )
                            )}
                    </div>
                </div>
            </section>

            <div className="px-4">
                <nav className="flex items-center rounded-full bg-[#235b3c] justify-around p-3 text-light gap-2">
                    {user &&
                        links[user] &&
                        Object.entries(links[user]).map(
                            ([title, { icon: Icon, link }]) => {
                                const isActive = currentPath === link;

                                return (
                                    <motion.div
                                        key={title}
                                        layout
                                        transition={{
                                            layout: {
                                                duration: 0.3,
                                                ease: "easeInOut",
                                            },
                                        }}
                                        className={`flex items-center justify-center rounded-full overflow-hidden ${
                                            isActive ? "flex-[1.5]" : "flex-1"
                                        }`}
                                    >
                                        <Link
                                            href={link as string}
                                            scroll={false}
                                            className={`w-full flex items-center justify-center gap-2 border ${
                                                isActive
                                                    ? "border-white bg-white/10 text-white"
                                                    : "border-transparent text-white/70"
                                            } rounded-full py-2 px-4 transition-all duration-300`}
                                        >
                                            <motion.div
                                                layout
                                                className="w-5 h-5 shrink-0 flex items-center justify-center"
                                            >
                                                <Icon className="w-5 h-5" />
                                            </motion.div>
                                            <motion.span
                                                layout
                                                className="whitespace-nowrap text-sm font-medium"
                                            >
                                                {title}
                                            </motion.span>
                                        </Link>
                                    </motion.div>
                                );
                            }
                        )}
                </nav>
            </div>
        </motion.main>
    );
}

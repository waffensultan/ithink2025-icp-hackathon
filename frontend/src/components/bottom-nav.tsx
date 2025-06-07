"use client";

import { useState, useEffect } from "react";

import Link from "next/link";

import { motion } from "motion/react";

import {
    HomeIcon,
    ShoppingBasketIcon,
    MessageSquareIcon,
    UserIcon,
    LucideIcon,
    PlusIcon,
} from "lucide-react";
import { type OnboardingRole } from "@/app/page";

export default function BottomNav() {
    const [user, setUser] = useState<OnboardingRole | null>(null);

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

    const links: Record<
        OnboardingRole,
        Record<string, Record<string, LucideIcon | string>>
    > = {
        magsasaka: {
            Home: {
                icon: HomeIcon,
                link: "/farmer", // farmer dashboard
            },
            Market: {
                icon: ShoppingBasketIcon,
                link: "/marketplace",
            },
            Messages: {
                icon: MessageSquareIcon,
                link: "/messages",
            },
            Profile: {
                icon: UserIcon,
                link: "/farmer/profile",
            },
        },
        mamimili: {
            Home: {
                icon: HomeIcon,
                link: "/buyer", // buyer home
            },
            Market: {
                icon: ShoppingBasketIcon,
                link: "/marketplace",
            },
            Messages: {
                icon: MessageSquareIcon,
                link: "/messages",
            },
            Profile: {
                icon: UserIcon,
                link: "/buyer/profile",
            },
        },
    };

    return (
        <motion.nav
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 10 }}
            transition={{
                delay: 0.2,
                type: "spring",
                stiffness: 300,
                damping: 20,
            }}
            className="-bottom-2 fixed w-full z-1000 rounded-t-4xl bg-primary text-dark-foreground flex items-center justify-between p-5"
        >
            <div className="absolute left-1/2 transform -translate-x-1/2 -top-9">
                {user === "magsasaka" && (
                    <Link
                        href={"/farmer/add-crop"}
                        className="border-4 border-dark-foreground bg-[#2e5441] w-15 h-15 rounded-full flex items-center justify-center shadow-lg"
                    >
                        <PlusIcon size={32} />
                    </Link>
                )}
            </div>
            <div className="flex gap-8">
                {user &&
                    links[user] &&
                    Object.entries(links[user])
                        .slice(0, 2)
                        .map(([label, { icon: Icon, link }]) => (
                            <Link
                                href={link as string}
                                key={label}
                                className="flex flex-col items-center gap-1"
                            >
                                <Icon size={40} />
                                <span className="text-lg font-medium">
                                    {label}
                                </span>
                            </Link>
                        ))}
            </div>

            <div className="flex gap-8">
                {user &&
                    links[user] &&
                    Object.entries(links[user])
                        .slice(2)
                        .map(([label, { icon: Icon, link }]) => (
                            <Link
                                href={link as string}
                                key={label}
                                className="flex flex-col items-center gap-1"
                            >
                                <Icon size={40} />
                                <span className="text-lg font-medium">
                                    {label}
                                </span>
                            </Link>
                        ))}
            </div>
        </motion.nav>
    );
}

"use client";

import Link from "next/link";

import { useState, useEffect } from "react";

import { ShoppingCartIcon } from "lucide-react";
import { type OnboardingRole } from "@/app/page";

export default function Nav() {
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

    return (
        <nav className="flex items-center justify-between p-3">
            <section className="flex items-center gap-1">
                <Link href={user === "magsasaka" ? "/farmer" : "/buyer"}>
                    <h2 className="text-primary font-bold text-2xl">
                        FarmChain
                    </h2>
                </Link>
            </section>
            <Link href={"/cart"} className="bg-primary rounded-md py-2 px-3 font-bold text-light">
                <ShoppingCartIcon />
            </Link>
        </nav>
    );
}

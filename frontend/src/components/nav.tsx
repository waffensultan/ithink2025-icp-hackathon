"use client";

import Link from "next/link";

export default function Nav() {
    return (
        <nav className="flex items-center justify-between p-3">
            <section className="flex items-center gap-1">
                <Link href={"/"}>
                    <h2 className="text-primary font-bold text-2xl">FarmChain</h2>
                </Link>
            </section>
            <button className="bg-primary rounded-md py-2 px-3 font-bold text-light">My Wallet</button>
        </nav>
    );
}

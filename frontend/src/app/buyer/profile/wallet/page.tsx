"use client";

import { WalletIcon, CircleDollarSignIcon as DollarIcon } from "lucide-react";

import { motion } from "motion/react";

export default function Page() {
    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="px-4 text-primary py-5"
        >
            <div className="flex  flex-col gap-1 pb-3">
                <div className="flex items-center gap-2 text-primary text-3xl">
                    <WalletIcon size={30} />
                    <h1 className="font-bold">Wallet</h1>
                </div>
            </div>
            <article className="border-2 border-primary rounded-2xl flex flex-col gap-1 p-4">
                <div className="flex justify-between items-start pb-4">
                    <DollarIcon size={50} />
                    <img src="/profile/wallet/icp.svg" alt="icp-icon" />
                </div>
                <div className="flex flex-col">
                    <div className="flex items-start gap-2">
                        <h4 className="font-bold text-2xl">12,100.75 PHP</h4>
                        <span className="opacity-50 text-lg">41.42 ICP</span>
                    </div>
                    <span className="opacity-50 -mt-1">Kita</span>
                </div>
            </article>
        </motion.main>
    );
}

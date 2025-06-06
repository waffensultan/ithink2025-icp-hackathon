"use client";

import { PlusIcon } from "lucide-react";

import { motion } from "motion/react";

export default function AddCrop() {
    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="px-3 pt-10 text-primary"
        >
            <div className="flex  flex-col gap-1 pb-3">
                <div className="flex items-center gap-2 text-primary text-3xl">
                    <h1 className="font-bold">Tanim</h1>
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1 px-3">
                    <h4 className="font-semibold">Tanim</h4>
                    <input
                        type="text"
                        placeholder="Pangalan ng pananim..."
                        className="rounded-2xl p-3 border border-primary"
                    />
                </div>

                <div className="flex flex-col gap-1 px-3">
                    <h4 className="font-semibold">Imahe ng Tanim</h4>
                    <article className="border rounded-xl flex justify-center items-center gap-1 h-60 bg-[#cad1bc] text-sm">
                        <PlusIcon size={20} />
                        <span>Imahe ng Tanim</span>
                    </article>
                </div>

                <div className="flex flex-col gap-1 px-3">
                    <h4 className="font-semibold">Presyo ng Tanim</h4>
                    <input
                        type="text"
                        placeholder="Presyo..."
                        className="rounded-2xl p-3 border border-primary"
                    />
                </div>

                <div className="flex flex-col gap-1 px-3">
                    <h4 className="font-semibold">Deskripsyon ng Tanim</h4>
                    <input
                        type="text"
                        placeholder="Deskripsyon..."
                        className="rounded-2xl p-3 border border-primary"
                    />
                </div>

                <button className="bg-[#337418] text-dark-foreground font-semibold text-md rounded-xl py-5">
                    <span>SAVE</span>
                </button>
            </div>
        </motion.main>
    );
}

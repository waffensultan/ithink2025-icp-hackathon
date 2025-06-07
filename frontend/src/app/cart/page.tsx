"use client";

import { Fragment, useState } from "react";

import { MinusIcon, PlusIcon, ChevronDownIcon, MapPinIcon } from "lucide-react";

import { motion } from "motion/react";

export default function Page() {
    const [search, setSearch] = useState("");

    const cart = [
        {
            name: "Rice",
            price: 200,
            icp_price: 1.5,
            quantity: 2,
            selected: true,
        },
        {
            name: "Rice",
            price: 200,
            icp_price: 0.75,
            quantity: 1,
            selected: false,
        },
    ];

    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="px-4 text-primary py-5 flex flex-col"
        >
            <section className="flex flex-col gap-1 pb-8">
                <div className="flex items-center justify-between gap-2 text-3xl">
                    <h1 className="font-bold">Cart</h1>
                    <ChevronDownIcon />
                </div>
                <input
                    type="text"
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                    placeholder="Search..."
                    className="rounded-2xl p-3 border border-primary"
                />
            </section>

            <section className="flex flex-col gap-6">
                {cart.map((product, index) => (
                    <Fragment key={index}>
                        <article className="flex items-center gap-3">
                            <div className="w-8 h-8 border-2 border-primary rounded-xl"></div>
                            <div className="w-32 h-32 border border-primary rounded-2xl">
                                <img
                                    src="/profile/crops/rice.jpg"
                                    alt="rice"
                                    className="w-full h-full object-contain rounded-2xl"
                                />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-bold text-2xl">
                                    {product.name}
                                </h3>
                                <div className="flex items-center justify-end gap-1">
                                    <h3 className="font-bold text-2xl">
                                        {product.price} PHP
                                    </h3>
                                    <h6 className="opacity-50">
                                        {product.icp_price} ICP
                                    </h6>
                                </div>

                                <div className="flex items-center gap-3">
                                    <button
                                        disabled
                                        className="w-6 h-6 rounded-full flex justify-center items-center bg-[#cad1bc]"
                                    >
                                        <MinusIcon size={15} />
                                    </button>
                                    <span>{product.quantity}</span>
                                    <button
                                        disabled
                                        className="w-6 h-6 rounded-full flex justify-center items-center bg-[#cad1bc]"
                                    >
                                        <PlusIcon size={15} />
                                    </button>
                                </div>
                            </div>
                        </article>
                        <hr className="h-0.5 border-none bg-gradient-to-r from-[#4AC281] via-[#235C3D] to-[#4AC281] opacity-30" />
                    </Fragment>
                ))}
            </section>

            <article className="bg-primary text-dark-foreground rounded-t-4xl p-10 w-full absolute bottom-0 left-0 flex flex-col gap-10">
                <div className="flex flex-col gap-2">
                    <h3 className="font-semibold text-xl">Delivery Address</h3>
                    <div className="border rounded-2xl p-5 text-sm">
                        <div className="opacity-50 flex items-center gap-2">
                            <MapPinIcon />
                            <span>Brgy. Masaya, Manila</span>
                        </div>
                    </div>
                </div>

                <section className="flex flex-col gap-3">
                    <div className="flex justify-between items-center">
                        <span className="text-xl">Total:</span>
                        <h3 className="font-bold text-2xl">
                            400 PHP{" "}
                            <span className="font-normal opacity-50">
                                1.5 ICP
                            </span>
                        </h3>
                    </div>
                    <button className="bg-[#337418] text-dark-foreground font-semibold text-md rounded-xl py-5">
                        <span>CONFIRM</span>
                    </button>
                </section>
            </article>
        </motion.main>
    );
}

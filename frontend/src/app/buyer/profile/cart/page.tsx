import { Fragment } from "react";

import { ShoppingCartIcon, MinusIcon, PlusIcon } from "lucide-react";

export default function Page() {
    const cart = [
        {
            name: "Rice",
            price: 400,
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
        <main className="px-4 text-primary py-5">
            <section className="flex flex-col pb-3">
                <div className="flex items-center gap-2 text-primary text-3xl">
                    <ShoppingCartIcon size={30} />
                    <h1 className="font-bold">Cart</h1>
                </div>
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
                        <hr />
                    </Fragment>
                ))}
            </section>
        </main>
    );
}

import React from "react";

export default function Messages() {
    return (
        <main className="bg-[#f8f8e0] min-h-screen flex flex-col">
            {/* Topbar */}
            <section className="flex justify-between items-center px-4 pt-4 pb-2">
                <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center mr-2" />
                    <h1 className="font-bold text-2xl text-primary tracking-tight">
                        FarmChain
                    </h1>
                </div>
                <button className="p-2">
                    <img
                        src="/icons/cart.svg"
                        alt="Cart"
                        className="w-8 h-8 object-contain"
                    />
                </button>
            </section>

            {/* Messages Title */}
            <section className="px-4 pt-3 pb-2">
                <h2 className="text-2xl font-bold text-primary mb-2">Messages</h2>
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full rounded-md border border-primary/70 px-4 py-2 text-primary bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/20 mb-2"
                />
            </section>

            {/* Message List */}
            <section className="flex-1 flex flex-col divide-y divide-primary/10">
                {/* Message Item */}
                <div className="flex items-center px-4 py-3">
                    <div className="w-12 h-12 rounded-full bg-primary mr-4 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                        <div className="font-bold text-primary text-base leading-tight">
                            Will Buyer
                        </div>
                        <div className="text-primary text-sm leading-tight">
                            Magandang araw!
                        </div>
                    </div>
                    <div className="text-xs text-primary/60 ml-2 whitespace-nowrap">
                        9:00 AM
                    </div>
                </div>
                <div className="flex items-center px-4 py-3">
                    <div className="w-12 h-12 rounded-full bg-primary mr-4 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                        <div className="font-bold text-primary text-base leading-tight">
                            Will Buyer
                        </div>
                        <div className="text-primary text-sm leading-tight">
                            Magandang araw!
                        </div>
                    </div>
                    <div className="text-xs text-primary/60 ml-2 whitespace-nowrap">
                        32hrs | 9:00 AM
                    </div>
                </div>
                <div className="flex items-center px-4 py-3">
                    <div className="w-12 h-12 rounded-full bg-primary mr-4 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                        <div className="font-bold text-primary text-base leading-tight">
                            Will Buyer
                        </div>
                        <div className="text-primary text-sm leading-tight">
                            <span className="font-semibold">You:</span> Magandang araw!
                        </div>
                    </div>
                    <div className="text-xs text-primary/60 ml-2 whitespace-nowrap">
                        2mo | 9:00 AM
                    </div>
                </div>
                <div className="flex items-center px-4 py-3">
                    <div className="w-12 h-12 rounded-full bg-primary mr-4 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                        <div className="font-bold text-primary text-base leading-tight">
                            Will Buyer
                        </div>
                        <div className="text-primary text-sm leading-tight">
                            Magandang araw!
                        </div>
                    </div>
                    <div className="text-xs text-primary/60 ml-2 whitespace-nowrap">
                        Jan 1 | 9:00 AM
                    </div>
                </div>
            </section>
        </main>
    );
}


import {
    HeartIcon,
    StarIcon,
    StarHalfIcon,
    RulerIcon,
    MapPinIcon,
    BadgeCheckIcon,
    PhoneIcon,
    CopyIcon,
    MessageSquareIcon,
    ShoppingCartIcon,
} from "lucide-react";

export default function Page() {
    return (
        <main className="w-full text-primary pb-3">
            <div className="flex flex-col gap-1 pb-3">
                <div className="w-full h-50">
                    <img
                        src="/profile/crops/rice.jpg"
                        alt="rice"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="flex items-center gap-1">
                    {Array.from({ length: 4 }).map((_, index) => (
                        <div key={index} className="w-full h-20">
                            <img
                                src="/profile/crops/rice.jpg"
                                alt="rice"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <section className="px-4 flex flex-col gap-4">
                <div className="flex items-end gap-1">
                    <h3 className="font-bold text-3xl">200 PHP</h3>
                    <span className="text-lg">0.75 ICP</span>
                </div>
                <hr className="h-0.5 border-none bg-gradient-to-r from-[#4AC281] via-[#235C3D] to-[#4AC281] opacity-30" />
                <div className="flex justify-between items-center text-dark">
                    <h3 className="text-3xl text-dark">Rice</h3>
                    <HeartIcon size={30} />
                </div>
                <div className="flex flex-col gap-1">
                    <h5 className="font-bold text-lg">Detalye ng Produkto</h5>
                    <p className="leading-tight tracking-tight">
                        Malinis at de-kalidad na bigas, angkop para sa araw-araw
                        na pagluluto. Sariwa, bagong ani, at direktang galing sa
                        lokal na magsasaka. Isang kilo per sako, sakto para sa
                        8–10 na servings.
                    </p>
                    <span className="opacity-50 text-sm">
                        June 5, 2025 | 10:00 AM
                    </span>
                </div>
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-3">
                        <h5 className="font-bold text-lg">Rebyu ng Produkto</h5>
                        <div className="flex items-start gap-1">
                            <StarIcon className="text-warning" />
                            <span className="text-accent text-lg font-semibold">
                                4.5
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <article className="flex flex-col gap-1">
                            <div className="flex items-center gap-3">
                                <div className="w-15 h-15 rounded-full">
                                    <img
                                        src="/profile/buyer.jpg"
                                        alt="buyer"
                                        className="w-full h-full object-cover rounded-full"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-bold">
                                        Buyer Pepito
                                    </span>
                                    <div className="flex items-center">
                                        {Array.from({ length: 4 }).map(
                                            (_, index) => (
                                                <StarIcon
                                                    key={index}
                                                    size={20}
                                                />
                                            )
                                        )}
                                        <StarHalfIcon size={20} />
                                    </div>
                                </div>
                            </div>
                            <span className="text-lg">Sulit!</span>

                            <section className="flex flex-col gap-2 py-5">
                                <h5 className="font-bold text-lg">Bukid</h5>
                                <article>
                                    <img
                                        src="/profile/farm/farm.png"
                                        alt="farm"
                                        className="w-full"
                                    />
                                </article>
                                <h1 className="font-bold text-2xl">
                                    Farm Land
                                </h1>
                                <div className="flex items-center gap-1 text-sm opacity-80">
                                    <div className="flex items-center gap-1 border rounded-full py-1 px-4">
                                        <span>Tanim</span>
                                    </div>
                                    <div className="flex border rounded-full py-1 px-4">
                                        <span>Bigas</span>
                                    </div>
                                    <div className="flex border rounded-full py-1 px-4">
                                        <span>Mais</span>
                                    </div>
                                    <div className="flex border rounded-full py-1 px-4">
                                        <span>Pinya</span>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-1 text-xs opacity-80">
                                    <div className="flex items-center gap-2">
                                        <MapPinIcon />
                                        <p>
                                            <span className="font-semibold">
                                                Lokasyon:
                                            </span>{" "}
                                            Brgy. Maligaya, Indang, Cavite
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <RulerIcon />
                                        <p>
                                            <span className="font-semibold">
                                                Sukat:
                                            </span>{" "}
                                            3.5 hectare
                                        </p>
                                    </div>
                                </div>
                            </section>
                        </article>
                    </div>
                </div>
            </section>

            <section className="flex flex-col gap-2">
                <section className="w-full flex items-center gap-2 px-4">
                    <div className="w-25 h-20 rounded-md border-1 border-primary">
                        <img
                            src={`/profile/farmer.jpg`}
                            alt="farmer"
                            className="object-cover h-full w-full rounded-md"
                        />
                    </div>
                    <section className="flex flex-col gap-1 w-full overflow-auto">
                        <div className="flex items-center gap-1 text-primary">
                            <h1 className="font-bold text-2xl">
                                Farmer Dela Cruz
                            </h1>
                            <BadgeCheckIcon />
                        </div>
                        <div className="flex items-center gap-1 whitespace-nowrap overflow-x-scroll w-full">
                            <div className="flex items-center gap-1 py-1 px-4 rounded-full bg-[#bccdb4] text-[#648f71] text-sm border-1 border-primary">
                                <StarIcon size={20} />
                                <span>4.5</span>
                            </div>
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

                <section className="px-4 flex flex-col gap-4">
                    <div className="flex items-center gap-5">
                        <MessageSquareIcon size={50} />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="rounded-2xl p-3 border border-primary w-full"
                        />
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                        <button
                            disabled
                            className="grow border border-primary rounded-xl p-3 flex justify-center items-center"
                        >
                            <MessageSquareIcon />
                        </button>
                        <button
                            disabled
                            className="grow border border-primary rounded-xl p-3 flex items-center justify-center gap-1"
                        >
                            <ShoppingCartIcon />
                            <span>Add to Cart</span>
                        </button>
                        <button
                            disabled
                            className="grow border border-primary rounded-xl p-3 flex items-center justify-center gap-1 bg-primary text-dark-foreground font-semibold text-lg"
                        >
                            <span>Buy Now</span>
                        </button>
                    </div>
                </section>
            </section>
        </main>
    );
}

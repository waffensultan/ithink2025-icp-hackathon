import { LeafyGreenIcon, BadgeCheckIcon, PlusIcon } from "lucide-react";

export default function Crops() {
    return (
        <main className="px-4 text-primary py-5">
            <div className="flex  flex-col gap-1 pb-3">
                <div className="flex items-center gap-2 text-primary text-3xl">
                    <LeafyGreenIcon size={30} />
                    <h1 className="font-bold">Bukid</h1>
                </div>

                <h1 className="font-medium text-2xl">Lahat ng Tanim</h1>

                <div className="grid grid-cols-2 gap-4">
                    <article className="border-2 border-primary rounded-2xl flex justify-center items-center gap-1">
                        <PlusIcon />
                        <h1>Tanim</h1>
                    </article>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <article
                            key={index}
                            className="border-2 border-primary rounded-2xl flex flex-col gap-1"
                        >
                            <div className="w-full h-32">
                                <img
                                    src="/profile/crops/rice.jpg"
                                    alt="rice"
                                    className="w-full h-full object-cover rounded-t-2xl"
                                />
                            </div>
                            <section className="flex flex-col pl-2 py-2">
                                <h3 className="font-semibold text-xl">Rice</h3>
                                <h5>
                                    200 PHP{" "}
                                    <span className="opacity-50">0.75 ICP</span>
                                </h5>
                                <div className="flex items-center gap-1">
                                    <span className="text-sm font-semibold">
                                        Farmer Dela Cruz
                                    </span>
                                    <BadgeCheckIcon size={18} />
                                </div>
                            </section>
                        </article>
                    ))}
                </div>
            </div>
        </main>
    );
}

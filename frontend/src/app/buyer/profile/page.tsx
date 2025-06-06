import { HeartIcon, BadgeCheckIcon } from "lucide-react";

export default function Page() {
    return (
        <main className="px-4 text-primary py-5">
            <section className="flex flex-col">
                <div className="flex items-center gap-2 text-primary text-3xl">
                    <HeartIcon size={30} />
                    <h1 className="font-bold">Aktibidad</h1>
                </div>
            </section>

            <section className="flex flex-col gap-1 pb-3">
                <h1 className="font-medium text-2xl">Nagustuhan Ko</h1>
                <div className="flex items-center overflow-x-auto whitespace-nowrap gap-3 w-full">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <article
                            key={index}
                            className="min-w-[180px] border-2 border-primary rounded-2xl flex flex-col gap-1"
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
            </section>

            <section className="flex flex-col gap-1 pb-3">
                <h1 className="font-medium text-2xl">Huling Tinignan</h1>
                <div className="flex overflow-x-auto whitespace-nowrap gap-4 w-full">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <article
                            key={index}
                            className="min-w-[180px] border-2 border-primary rounded-2xl flex flex-col gap-1"
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
            </section>
            <section className="flex flex-col gap-1 pb-3">
                <h1 className="font-medium text-2xl">Bilhin Muli</h1>
                <div className="flex overflow-x-auto whitespace-nowrap gap-4 w-full">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <article
                            key={index}
                            className="min-w-[180px] border-2 border-primary rounded-2xl flex flex-col gap-1"
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
            </section>
        </main>
    );
}

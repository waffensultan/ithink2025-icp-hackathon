import {
    LeafIcon,
    PencilIcon,
    PlusIcon,
    LocateIcon,
    RulerIcon,
} from "lucide-react";

export default function Page() {
    return (
        <main className="px-4 text-primary py-5">
            <section className="flex justify-between items-center pb-3">
                <div className="flex items-center gap-2 text-primary text-3xl">
                    <LeafIcon size={30} />
                    <h1 className="font-bold">Bukid</h1>
                </div>
                <div className="flex items-center gap-2 text-sm opacity-50">
                    <PencilIcon size={15} />
                    <span>Edit Farm</span>
                </div>
            </section>
            <article>
                <img src="/profile/farm/farm.png" alt="farm" className="w-full" />
            </article>

            <section className="flex flex-col gap-2 py-5">
                <h1 className="font-bold text-2xl">Farm Land</h1>
                <div className="flex items-center gap-1 text-sm opacity-80">
                    <div className="flex items-center gap-1 border rounded-full py-1 px-4">
                        <PlusIcon />
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
                        <LocateIcon />
                        <p>
                            <span className="font-semibold">Lokasyon:</span>{" "}
                            Brgy. Maligaya, Indang, Cavite
                        </p>
                    </div>

                    <div className="flex items-center gap-2">
                        <RulerIcon />
                        <p>
                            <span className="font-semibold">Sukat:</span> 3.5
                            hectare
                        </p>
                    </div>
                </div>

                <div>
                    <p className="leading-tight tracking-tight">
                        A 3.5-hectare mixed farm growing rice during the wet
                        season, corn in the dry months, and pineapples
                        year-round. Located on gently sloping land, the farm
                        uses basic sustainable practices and works with the
                        local cooperative
                    </p>
                </div>
            </section>
        </main>
    );
}

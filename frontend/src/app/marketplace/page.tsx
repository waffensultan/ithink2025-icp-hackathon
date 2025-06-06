// diitoooooo ang marketplacee page

export default function Marketplace() {
  return (
    <main className="bg-[#f8f8e0] min-h-screen flex flex-col">
      {/* Topbar */}
      <section className="flex justify-between items-center px-4 pt-4 pb-2">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center mr-2" />
          <h1 className="font-bold text-2xl text-primary tracking-tight">FarmChain</h1>
        </div>
        <button className="p-2">
          <img src="/icons/cart.svg" alt="Cart" className="w-8 h-8 object-contain" />
        </button>
      </section>

      {/* Marketplace Title and Filter */}
      <section className="px-4 pt-3 pb-2 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-primary mb-2">Marketplace</h2>
        <button className="p-2">
          <img src="/icons/mingcute_filter-fill.svg" alt="Filter" className="w-7 h-7 object-contain" />
        </button>
      </section>

      {/* Search Bar */}
      <section className="px-4 pb-2">
        <input
          type="text"
          placeholder="Search..."
          className="w-full rounded-xl border border-primary/70 px-4 py-2 text-primary bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/20 mb-2"
        />
      </section>

      {/* Product Grid */}
      <section className="px-4 grid grid-cols-2 gap-3 pb-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="rounded-xl border-2 border-primary flex flex-col overflow-hidden bg-transparent"
          >
            <img
              src="/profile/crops/rice.jpg"
              alt="rice"
              className="w-full h-28 object-cover"
            />
            <div className="flex flex-col gap-1 p-3 flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-lg text-primary">Rice</h3>
                <div className="flex items-center gap-1">
                  <img src="/icons/solar_star-line-duotone.svg" alt="star" className="w-4 h-4 object-contain" />
                  <span className="text-xs text-primary/60 font-semibold">4.5</span>
                </div>
              </div>
              <div className="text-sm text-primary font-semibold">200 PHP <span className="text-xs text-primary/60 font-normal">0.75 ICP</span></div>
              <div className="text-xs text-primary/80">Indang, Cavite</div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
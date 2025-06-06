import React from "react";

export default function BuyerHome() {
  return (
    <main className="bg-[#f8f8e0] min-h-screen flex flex-col">
      {/* Topbar/Navbar */}
      <section className="flex justify-between items-center px-4 pt-4 pb-2">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center mr-2" />
          <h1 className="font-bold text-2xl text-primary tracking-tight">FarmChain</h1>
        </div>
        <button className="p-2">
          <img src="/icons/cart.svg" alt="Cart" className="w-8 h-8 object-contain" />
        </button>
      </section>

      {/* Greeting */}
      <section className="px-4 pt-2 pb-3">
        <h2 className="text-xl font-bold text-primary mb-2">Hi, Will Buyer!</h2>
        {/* Wallet Card - updated layout */}
        <div className="border-2 border-primary rounded-xl p-4 flex flex-col items-start mb-2 bg-transparent relative">
          <img src="/icons/iconoir_wallet.svg" alt="Wallet" className="w-14 h-14 object-contain mb-3" />
          <div>
            <div className="text-2xl font-bold text-primary leading-tight">12,100.75 PHP <span className="text-base font-normal text-primary/60">41.42 ICP</span></div>
            <div className="text-primary/60 text-sm">Wallet</div>
          </div>
          <img src="/icons/icp.svg" alt="ICP" className="w-8 h-8 object-contain absolute top-4 right-4" />
        </div>
      </section>

      {/* Tampok na Tanim */}
      <section className="px-4 pb-2">
        <div className="flex items-center gap-2 mb-2">
          <img src="/icons/mdi_star-box.svg" alt="Star" className="w-7 h-7 object-contain" />
          <h3 className="text-lg font-bold text-primary">Tampok na Tanim</h3>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-1 hide-scrollbar">
          {[1,2].map((item, i) => (
            <div key={i} className="min-w-[220px] max-w-[220px] rounded-2xl border-2 border-primary flex-shrink-0 overflow-hidden">
              <img src="/profile/crops/rice.jpg" alt="Rice" className="w-full h-36 object-cover" />
              <div className="p-4 flex flex-col gap-2">
                <div className="font-bold text-xl text-primary">Rice</div>
                <div className="text-base text-primary font-semibold">200 PHP <span className="text-sm text-primary/60 font-normal">0.75 ICP</span></div>
                <div className="flex items-center gap-1 text-sm text-primary/80">
                  {i === 0 ? 'Indang, Cavite' : 'Farmer Dela Cruz'}
                  <img src="/icons/verified.svg" alt="Verified" className="w-5 h-5 object-contain ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Magsasakang Malapit Sa'yo */}
      <section className="px-4 pb-6">
        <div className="flex items-center gap-2 mb-2">
          <img src="/icons/mdi_plant-outline.svg" alt="Plant Outline" className="w-7 h-7 object-contain" />
          <h3 className="text-lg font-bold text-primary">Magsasakang Malapit Sa'yo</h3>
        </div>
        <div className="flex gap-3">
          {[1,2,3,4].map((item, i) => (
            <img key={i} src="/profile/farmer.jpg" alt="Farmer" className="w-20 h-20 rounded-xl object-cover border-2 border-primary" />
          ))}
        </div>
      </section>

      {/* The rest of the layout will follow after you confirm the topbar/navbar. */}
    </main>
  );
}


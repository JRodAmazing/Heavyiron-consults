import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-neutral-950 text-white">
      <div className="text-center px-6 py-20">
        <h1 className="text-5xl md:text-6xl font-bold text-amber-400 mb-6">
          HeavyIron Consults
        </h1>
        <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto mb-10">
          Business & AI Consulting for Construction, Heavy Equipment, and Skilled Trades.
          We help companies modernize operations, elevate branding, and dominate RFQs.
        </p>
        <button className="bg-amber-400 text-neutral-950 px-8 py-3 rounded-lg font-semibold hover:bg-amber-500 transition">
          Join the HeavyIron Network
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 pb-20">
        <Image src="/excavator.jpg" alt="Excavator" width={500} height={300} className="rounded-lg object-cover" />
        <Image src="/city-skyline.jpg" alt="City Skyline" width={500} height={300} className="rounded-lg object-cover" />
        <Image src="/camera.jpg" alt="Camera" width={500} height={300} className="rounded-lg object-cover" />
      </div>
    </main>
  )
}

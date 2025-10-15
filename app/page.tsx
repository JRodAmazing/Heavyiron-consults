import Image from "next/image"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white flex flex-col items-center justify-center px-6">
      {/* Hero Section */}
      <section className="text-center py-20 max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-extrabold text-amber-400 mb-6">
          HeavyIron Consults
        </h1>
        <p className="text-lg md:text-xl text-neutral-300 mb-10 leading-relaxed">
          Business & AI Consulting for Construction, Heavy Equipment, and Skilled Trades.
          We help companies modernize operations, elevate branding, and dominate RFQs.
        </p>
        <button className="bg-amber-400 text-neutral-900 px-8 py-3 rounded-lg font-semibold hover:bg-amber-500 transition">
          Join the HeavyIron Network
        </button>
      </section>

      {/* Animated Image Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mb-20">
        {[
          { src: "/excavator.jpg", alt: "Excavator" },
          { src: "/city-skyline.jpg", alt: "City Skyline" },
          { src: "/camera.jpg", alt: "Camera" },
        ].map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={500}
              height={300}
              className="rounded-xl object-cover"
            />
          </motion.div>
        ))}
      </section>
    </main>
  )
}

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

      {/* Services Section */}
      <section className="bg-neutral-950 text-white w-full py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-400 mb-12">
            Core Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Bidding & Estimating",
                desc: "Streamline your RFQs with AI-powered templates and bid review tools to win more projects.",
                icon: "📈",
              },
              {
                title: "ERP / CRM Implementation",
                desc: "Modernize your construction workflow — integrate project tracking, financials, and customer portals.",
                icon: "⚙️",
              },
              {
                title: "Contract Auditing & RFQs",
                desc: "Reduce risk and boost profitability with fast, intelligent contract scans and compliance checks.",
                icon: "🧾",
              },
              {
                title: "Service Department Optimization",
                desc: "Train teams, automate scheduling, and track equipment uptime to improve field performance.",
                icon: "🚜",
              },
              {
                title: "Exit Programs / Equipment Sales",
                desc: "Get strategic advisory for asset liquidation, resale, or trade-in to maximize returns.",
                icon: "💼",
              },
              {
                title: "AI-Driven Brand Building",
                desc: "From web design to marketing automation — build your digital presence and authority in the industry.",
                icon: "🤖",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl hover:border-amber-400 hover:shadow-lg hover:shadow-amber-400/20 transition-all duration-300"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-amber-300">
                  {service.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

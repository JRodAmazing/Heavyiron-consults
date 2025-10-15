"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white flex flex-col items-center justify-center px-6">
      {/* ================= HERO ================= */}
      <section className="text-center py-20 max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-extrabold text-amber-400 mb-6">
          HeavyIron Consults
        </h1>
        <p className="text-lg md:text-xl text-neutral-300 mb-10 leading-relaxed">
          Business & AI Consulting for Construction, Heavy Equipment, and Skilled Trades.
          We help companies modernize operations, elevate branding, and dominate RFQs.
        </p>
        <a
          href="#contact"
          className="inline-block bg-amber-400 text-neutral-900 px-8 py-3 rounded-lg font-semibold hover:bg-amber-500 transition"
        >
          Join the HeavyIron Network
        </a>
      </section>

      {/* ================= IMAGE GRID ================= */}
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

      {/* ================= SERVICES ================= */}
      <section className="bg-neutral-950 text-white w-full py-20 px-6 md:px-12 border-t border-neutral-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-400 mb-12">
            Core Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Bidding & Estimating",
                desc:
                  "Streamline your RFQs with AI-powered templates and bid review tools to win more projects.",
                icon: "📈",
              },
              {
                title: "ERP / CRM Implementation",
                desc:
                  "Modernize your construction workflow — integrate project tracking, financials, and customer portals.",
                icon: "⚙️",
              },
              {
                title: "Contract Auditing & RFQs",
                desc:
                  "Reduce risk and boost profitability with fast, intelligent contract scans and compliance checks.",
                icon: "🧾",
              },
              {
                title: "Service Department Optimization",
                desc:
                  "Train teams, automate scheduling, and track equipment uptime to improve field performance.",
                icon: "🚜",
              },
              {
                title: "Exit Programs / Equipment Sales",
                desc:
                  "Get strategic advisory for asset liquidation, resale, or trade-in to maximize returns.",
                icon: "💼",
              },
              {
                title: "AI-Driven Brand Building",
                desc:
                  "From web design to marketing automation — build your digital presence and authority in the industry.",
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

      {/* ================= NEWSLETTER ================= */}
      <section className="bg-neutral-900 w-full py-20 border-t border-neutral-800">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-400 mb-4">
            Weekly Construction Insights
          </h2>
          <p className="text-neutral-400 mb-8">
            Get weekly strategies, AI automation tips, and systems to scale your construction business.
          </p>
          <form className="flex flex-col sm:flex-row justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-md text-neutral-900"
            />
            <button
              type="submit"
              className="bg-amber-400 text-neutral-950 px-6 py-3 rounded-md font-semibold hover:bg-amber-500 transition"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs text-neutral-500 mt-4">No spam. Unsubscribe anytime.</p>
        </div>
      </section>

      {/* ================= CTA FOOTER ================= */}
      <footer
        id="contact"
        className="bg-neutral-950 border-t border-neutral-800 w-full py-16 px-6 md:px-12"
      >
        <div className="max-w-6xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-400">
            Ready to Level Up Your Business?
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Join the HeavyIron Network — connect with experts, leverage AI tools, and
            get 1-on-1 consulting to streamline your operations and dominate your market.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
            <a
              href="https://discord.gg/your-discord-link"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-400 text-neutral-950 px-8 py-3 rounded-lg font-semibold hover:bg-amber-500 transition shadow-md shadow-amber-400/20"
            >
              Join Discord Network
            </a>

            <a
              href="mailto:contact@heavyiron-consults.com"
              className="border border-amber-400 px-8 py-3 rounded-lg font-semibold text-amber-400 hover:bg-amber-400 hover:text-neutral-950 transition"
            >
              Book a Consultation
            </a>
          </div>

          <div className="text-neutral-600 text-sm mt-10">
            <p>© {new Date().getFullYear()} HeavyIron Consults. All rights reserved.</p>
            <p className="mt-1 text-neutral-700">
              Built for Construction, Equipment, and Trades Professionals — Powered by AI.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}

'use client'

import { useEffect, useState } from "react"
import { Menu, X, ArrowRight, Wallet } from "lucide-react"
import AOS from "aos"
import "aos/dist/aos.css"

import { About } from "./About"
import Products from "./Products"
import Token from "./Token"
import { NFT } from "./NFT"
import Roadmap from "./Roadmap"
import Community from "./Community"
import Partnership from "./Partnership"
import Footer from "../components/Footer"

export default function Hero() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
    })
  }, [])

  const navLinks = ["About", "Products", "Token", "NFT", "Roadmap"]

  return (
    <section className="relative min-h-screen text-white overflow-hidden bg-black">

      {/* 🔴 ANIMATED CRYPTO RED BACKGROUND */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B0F1A] via-[#1A0B0B] to-black" />

        {/* Animated red pulse */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(239,68,68,0.25),transparent_50%)] animate-pulseSlow" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(239,68,68,0.18),transparent_55%)] animate-pulseSlow delay-1000" />

        {/* Noise / depth */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-6">

        {/* NAVBAR */}
        <nav
          data-aos="fade-down"
          className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 backdrop-blur px-4 sm:px-5 py-3"
        >
          <a href="#" className="flex items-center gap-2 font-semibold text-lg">
            <img
              src="/solraccs.jpg"
              alt="Solraccs Logo"
              className="h-10 w-10 rounded-full"
            />
            Solraccs
          </a>

          <div className="hidden md:flex items-center gap-6 text-sm text-white/80">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="hover:text-white transition"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button className="hidden md:flex items-center gap-2 px-4 py-2 text-sm rounded-full bg-gradient-to-r from-red-400 to-red-500 hover:opacity-90 transition">
              <Wallet size={16} />
              Connect Wallet
            </button>

            <button className="md:hidden" onClick={() => setOpen(!open)}>
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </nav>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden mt-4 rounded-2xl border border-white/10 bg-black/70 backdrop-blur p-6 space-y-4 text-sm">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="block text-white/80 hover:text-white"
              >
                {link}
              </a>
            ))}
            <button className="w-full flex items-center justify-center gap-2 mt-2 px-4 py-2 rounded-full bg-red-500 hover:bg-red-600">
              <Wallet size={16} />
              Connect Wallet
            </button>
          </div>
        )}

        {/* HERO */}
        <div className="relative min-h-[85vh] flex flex-col items-center justify-center text-center mt-12 sm:mt-20">

          {/* FLOATING NFT CARDS */}
          {[
            { src: "/NFT1.jpg", pos: "left-2 top-10 sm:left-6 sm:top-24", rot: "-20deg", delay: "" },
            { src: "/NFT2.jpg", pos: "right-2 top-16 sm:right-6 sm:top-20", rot: "20deg", delay: "delay-200" },
            { src: "/NFT3.jpg", pos: "left-4 bottom-16 sm:left-10 sm:bottom-32", rot: "15deg", delay: "delay-400" },
            { src: "/NFT4.jpg", pos: "right-4 bottom-12 sm:right-10 sm:bottom-28", rot: "-15deg", delay: "delay-600" },
          ].map((nft, i) => (
            <img
              key={i}
              src={nft.src}
              alt={`NFT ${i + 1}`}
              className={`absolute w-12 sm:w-16 md:w-24 rounded-xl shadow-xl animate-float ${nft.pos} rotate-[${nft.rot}] ${nft.delay}`}
            />
          ))}

          {/* CENTER CONTENT */}
          <div className="relative z-10 max-w-full sm:max-w-3xl px-4 mt-12">

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-400/40 bg-red-400/10 text-xs sm:text-sm text-red-200 mb-4">
              Built on Solana • AI × DeFi × NFTs
            </div>

            <h1
              data-aos="fade-up"
              className="mt-4 text-3xl sm:text-4xl md:text-6xl font-semibold leading-snug bg-gradient-to-r from-white via-red-200 to-red-400 bg-clip-text text-transparent"
            >
              AI-Powered Tools for <br className="hidden md:block" />
              Smarter Trading on Solana
            </h1>

            <p className="mt-4 text-white/70 text-sm sm:text-base">
              Solraccs is an AI-native ecosystem combining intelligent analytics tools and AI-assisted swaps.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-7 py-3 rounded-full bg-red-500 hover:bg-red-600 transition font-semibold">
                Explore Ecosystem
              </button>

              <a href="http://t.me/Raccsonsol" target="_blank">
                <button className="px-7 py-3 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition font-semibold flex items-center gap-2">
                  Join Community <ArrowRight size={16} />
                </button>
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* OTHER SECTIONS */}
      <About />
      <Products />
      <Token />
      <NFT />
      <Roadmap />
      <Partnership />
      <Community />
      <Footer />

      {/* 🔴 CUSTOM ANIMATION */}
      <style jsx global>{`
        @keyframes pulseSlow {
          0%, 100% {
            opacity: 0.35;
          }
          50% {
            opacity: 0.6;
          }
        }
        .animate-pulseSlow {
          animation: pulseSlow 6s ease-in-out infinite;
        }
      `}</style>

    </section>
  )
}

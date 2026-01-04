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
import { Link } from "react-router-dom"

export default function Hero() {
  const [open, setOpen] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    AOS.init({ duration: 900, easing: "ease-out-cubic", once: true })

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const navLinks = ["About", "Products", "Token", "NFT", "Roadmap"]

  return (
    <section className="relative min-h-screen text-white overflow-hidden bg-black">

      {/* ================= RED CRYPTO BACKGROUND ================= */}
      <div className="absolute inset-0">
        {/* Base dark red gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0C0B0F] via-[#2C0B0B] to-[#0B0B0B]" />

        {/* Glowing animated red blobs */}
        <div
          className="absolute w-[700px] h-[700px] rounded-full blur-[200px] pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(255,59,59,0.35) 0%, transparent 70%)",
            transform: `translate(${mousePos.x / 30}px, ${mousePos.y / 30}px)`
          }}
        />
        <div
          className="absolute w-[700px] h-[700px] rounded-full blur-[250px] pointer-events-none bottom-[-300px] right-[-300px]"
          style={{
            background: "radial-gradient(circle, rgba(255,107,107,0.25) 0%, transparent 80%)",
            transform: `translate(${mousePos.x / 50}px, ${mousePos.y / 50}px)`
          }}
        />

        {/* Moving particle dots */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white/15 rounded-full"
              style={{
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `particleMove ${10 + Math.random() * 10}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 10}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* ================= HERO CONTENT ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-6">

        {/* NAVBAR */}
        <nav
          data-aos="fade-down"
          className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 backdrop-blur px-4 sm:px-5 py-3"
        >
          <a href="#" className="flex items-center gap-2 font-semibold text-lg">
            <img src="/solraccs.jpg" alt="Solraccs Logo" className="h-10 w-10 rounded-full" />
            Solraccs
          </a>

          <div className="hidden md:flex items-center gap-6 text-sm text-white/80">
            {navLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-white transition">{link}</a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link to="/connect-wallet">
              <button className="hidden md:flex items-center gap-2 px-4 py-2 text-sm rounded-full bg-gradient-to-r from-red-500 via-red-600 to-red-500 hover:opacity-90 transition cursor-pointer">
              <Wallet size={16} /> Connect Wallet
            </button>
            </Link>
            <button className="md:hidden" onClick={() => setOpen(!open)}>
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </nav>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden mt-4 rounded-2xl border border-white/10 bg-black/70 backdrop-blur p-6 space-y-4 text-sm">
            {navLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="block text-white/80 hover:text-white">{link}</a>
            ))}
            <Link to="/connect-wallet">
            <button className="w-full flex items-center justify-center gap-2 mt-2 px-4 py-2 rounded-full bg-red-500 hover:bg-red-600 cursor-pointer">
              <Wallet size={16} /> Connect Wallet
            </button>
            </Link>
          </div>
        )}

        {/* HERO SECTION */}
        <div className="relative min-h-[85vh] flex flex-col items-center justify-center text-center mt-12 sm:mt-20">
          {[ 
            { src: "/NFT1.jpg", pos: "left-2 top-10 sm:left-6 sm:top-24", rot: "-20deg", delay: "" },
            { src: "/NFT2.jpg", pos: "right-2 top-16 sm:right-6 sm:top-20", rot: "20deg", delay: "delay-200" },
            { src: "/NFT3.jpg", pos: "left-4 bottom-16 sm:left-10 sm:bottom-32", rot: "15deg", delay: "delay-400" },
            { src: "/NFT4.jpg", pos: "right-4 bottom-12 sm:right-10 sm:bottom-28", rot: "-15deg", delay: "delay-600" },
          ].map((nft, i) => (
            <img key={i} src={nft.src} alt={`NFT ${i + 1}`} className={`absolute w-12 sm:w-16 md:w-24 rounded-xl shadow-xl animate-float ${nft.pos} rotate-[${nft.rot}] ${nft.delay}`} />
          ))}

          <div className="relative z-10 max-w-full sm:max-w-3xl px-4 mt-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-500/50 bg-red-500/10 text-xs sm:text-sm text-red-200 mb-4">
              Built on Solana • AI × DeFi × NFTs
            </div>

            <h1
              data-aos="fade-up"
              className="mt-4 text-3xl sm:text-4xl md:text-6xl font-semibold leading-snug bg-gradient-to-r from-white via-red-300 to-red-500 bg-clip-text text-transparent"
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

      {/* ================= OTHER SECTIONS ================= */}
      <div className="relative z-10">
        <About />
        <Products />
        <Token />
        <NFT />
        <Roadmap />
        <Partnership />
        <Community />
        <Footer />
      </div>

      {/* ================= GLOBAL ANIMATIONS ================= */}
      <style jsx global>{`
        @keyframes pulseSlow {
          0%, 100% { opacity: 0.35; }
          50% { opacity: 0.6; }
        }
        .animate-pulseSlow {
          animation: pulseSlow 6s ease-in-out infinite;
        }

        @keyframes particleMove {
          0% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}

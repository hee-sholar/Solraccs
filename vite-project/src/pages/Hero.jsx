"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowRight, Wallet } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { About } from "./About";
import Products from "./Products";
import Token from "./Token";
import { NFT } from "./NFT";
import Roadmap from "./Roadmap";
import Community from "./Community";
import Partnership from "./Partnership";
import Footer from "../components/Footer";

export default function Hero() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  const navLinks = ["About", "Products", "Token", "NFT", "Roadmap"];

  return (
    <section className="relative min-h-screen text-white overflow-hidden bg-red-900">
      {/* RED GRADIENT BACKGROUND */}
      <div className="absolute inset-0 bg-red-gradient" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-6">
        {/* NAVBAR */}
        <nav
          data-aos="fade-down"
          className="flex items-center justify-between rounded-full
                     border border-white/10 bg-white/5 backdrop-blur px-5 py-3"
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
            <button
              className="hidden md:flex items-center gap-2 px-4 py-2 text-sm rounded-full
                         bg-gradient-to-r from-red-400 to-red-500 hover:opacity-90 transition"
            >
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
          <div
            className="md:hidden mt-4 rounded-2xl border border-white/10
                          bg-black/60 backdrop-blur p-6 space-y-4 text-sm"
          >
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="block text-white/80 hover:text-white"
              >
                {link}
              </a>
            ))}
            <button
              className="w-full flex items-center justify-center gap-2 mt-2 px-4 py-2
                         rounded-full bg-red-500 hover:bg-red-600"
            >
              <Wallet size={16} />
              Connect Wallet
            </button>
          </div>
        )}

        {/* HERO */}
        <div className="relative min-h-[85vh] flex items-center justify-center text-center">
          {/* FLOATING NFT CARDS */}
          {[
            {
              src: "/NFT1.jpg",
              pos: "left-6 top-24",
              rot: "-20deg",
              delay: "",
            },
            {
              src: "/NFT2.jpg",
              pos: "right-6 top-20",
              rot: "20deg",
              delay: "delay-200",
            },
            {
              src: "/NFT3.jpg",
              pos: "left-10 bottom-32",
              rot: "15deg",
              delay: "delay-400",
            },
            {
              src: "/NFT4.jpg",
              pos: "right-10 bottom-28",
              rot: "-15deg",
              delay: "delay-600",
            },
          ].map((nft, i) => (
            <img
              key={i}
              src={nft.src}
              alt={`NFT ${i + 1}`}
              className={`absolute w-16 md:w-24 rounded-xl shadow-xl animate-float
                ${nft.pos} rotate-[${nft.rot}] ${nft.delay}`}
            />
          ))}

          {/* CENTER CONTENT */}
          <div className="relative z-10 max-w-3xl px-4 mt-28">
            {/* COMMUNITY BADGE */}
            <div className="flex items-center justify-center gap-2 text-xs mb-4">
              <div className="flex -space-x-2">
                <img
                  className="h-7 w-7 rounded-full border-2 border-white"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=50"
                />
                <img
                  className="h-7 w-7 rounded-full border-2 border-white"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=50"
                />
                <img
                  className="h-7 w-7 rounded-full border-2 border-white"
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=50"
                />
              </div>
              <p className="text-white/80">Join community of 1M+ founders</p>
            </div>

            {/* TAGLINE */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                            border border-red-400/40 bg-red-400/10 text-xs text-red-200"
            >
              Built on Solana • AI × DeFi × NFTs
            </div>

            {/* HEADLINE */}
            <h1
              data-aos="fade-up"
              className="mt-6 text-4xl md:text-6xl font-semibold leading-tight
                         bg-gradient-to-r from-white via-red-200 to-red-400
                         bg-clip-text text-transparent"
            >
              AI-Powered Tools for <br className="hidden md:block" />
              Smarter Trading on Solana
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-5 max-w-2xl mx-auto text-white/70">
              Solraccs is an AI-native Web3 ecosystem combining intelligent
              analytics, AI-assisted swaps, utility tokens, and NFTs — built for
              speed and clarity.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <button className="px-7 py-3 rounded-full bg-red-500 hover:bg-red-600 transition font-semibold">
                Explore Ecosystem
              </button>

              <button
                className="px-7 py-3 rounded-full border border-white/20 bg-white/5
                           hover:bg-white/10 transition font-semibold flex items-center gap-2"
              >
                Join Community <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <About />
      <Products />
      <Token />
      <NFT />
      <Roadmap />
      <Partnership />
      <Community />
      <Footer />
    </section>
  );
}

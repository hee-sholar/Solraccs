'use client';

import { useEffect, useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: 'ease-out-cubic',
      once: true,
    });
  }, []);

  const navLinks = ['About', 'Products', 'Token', 'NFT', 'Roadmap'];

  return (
    <section className="relative overflow-hidden bg-[#120004] text-white">
      {/* Background Gradients & Shapes */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a0007] via-[#3a000f] to-[#120004]" />
      <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-red-900/20 blur-[160px]" />
      <div className="absolute -bottom-40 -left-40 h-[600px] w-[600px] rounded-full bg-red-800/10 blur-[160px]" />

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-6 pb-28">

        {/* NAVBAR */}
        <nav
          data-aos="fade-down"
          className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 backdrop-blur px-5 py-3"
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 font-semibold text-lg">
            <img src="/solraccs.jpg" alt="Solraccs Logo" className="h-10 w-10 rounded-full" />
            Solraccs
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6 text-sm text-white/80">
            {navLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-white transition">
                {link}
              </a>
            ))}
          </div>

          {/* Buttons & Mobile Menu */}
          <div className="flex items-center gap-3">
            <button className="hidden md:block px-5 py-2 text-sm rounded-full bg-red-600 hover:bg-red-700 transition">
              Join Community
            </button>

            <button className="md:hidden" onClick={() => setOpen(!open)}>
              {open ? <X color="white" size={26} /> : <Menu color="white" size={26} />}
            </button>
          </div>
        </nav>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden mt-4 rounded-2xl border border-white/10 bg-black/60 backdrop-blur p-6 space-y-4 text-sm">
            {navLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="block text-white/80 hover:text-white">
                {link}
              </a>
            ))}
            <button className="w-full mt-2 px-4 py-2 rounded-full bg-red-600 hover:bg-red-700">
              Join Community
            </button>
          </div>
        )}

        {/* HERO */}
        <div className="mt-28 text-center">

          {/* Community Badge */}
          <div className="flex flex-wrap items-center justify-center p-1.5 mt-24 text-xs">
            <div className="flex items-center -space-x-2">
              <img
                className="h-7 w-7 rounded-full border-2 border-white"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=50"
                alt="userImage1"
              />
              <img
                className="h-7 w-7 rounded-full border-2 border-white"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=50"
                alt="userImage2"
              />
              <img
                className="h-7 w-7 rounded-full border-2 border-white"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=50&h=50&auto=format&fit=crop"
                alt="userImage3"
              />
            </div>
            <p className="ml-2 text-white/80">Join community of 1M+ founders</p>
          </div>

          {/* Tagline */}
          <div
            data-aos="fade-up"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-800/40 bg-red-900/20 text-xs text-red-200 mt-4"
          >
            Built on Solana • AI × DeFi × NFTs
          </div>

          {/* Headline */}
          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            className="mt-6 text-4xl md:text-6xl font-semibold leading-tight bg-gradient-to-b from-white to-red-200/70 bg-clip-text text-transparent"
          >
            AI-Powered Tools for <br className="hidden md:block" />
            Smarter Trading on Solana
          </h1>

          {/* Description */}
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-5 max-w-2xl mx-auto text-white/70 text-base"
          >
            Solraccs is an AI-native Web3 ecosystem combining intelligent analytics,
            AI-assisted swaps, utility tokens, and NFTs — built for speed, clarity,
            and next-gen crypto users.
          </p>

          {/* CTA Buttons */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <button className="px-7 py-3 rounded-full bg-red-600 hover:bg-red-700 transition font-semibold">
              Explore Ecosystem
            </button>

            <button className="px-7 py-3 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition font-semibold flex items-center gap-2">
              Join Community <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client'

import { Twitter, MessageCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative text-white overflow-hidden">

      {/* 🔴 Subtle red glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-red-500/10 blur-[140px]" />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-3">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-3">
            <img
              src="/sol.jpg"
              alt="Solraccs Logo"
              className="w-14 h-14 rounded-full border border-white/10"
            />
            <h3 className="text-xl font-semibold">Solraccs</h3>
          </div>

          <p className="mt-4 text-white/60 text-sm leading-relaxed max-w-sm">
            AI-powered tools for smarter trading, analytics, and decentralized finance on Solana.
          </p>

          {/* Social Icons */}
          <div className="mt-6 flex items-center gap-4">
            <a
              href="http://t.me/Raccsonsol"
              target="_blank"
              aria-label="Telegram"
              className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-red-500/20 hover:border-red-400 transition"
            >
              <MessageCircle size={18} />
            </a>

            <a
              href="https://x.com/Solraccs"
              target="_blank"
              aria-label="Twitter"
              className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-red-500/20 hover:border-red-400 transition"
            >
              <Twitter size={18} />
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="text-sm">
          <h4 className="font-semibold mb-4">Resources</h4>
          <ul className="space-y-2">
            {["About", "Products", "Token", "NFT", "Roadmap"].map(link => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-white/60 hover:text-red-400 transition"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Community */}
        <div>
          <h4 className="font-semibold mb-4">Community</h4>
          <p className="text-white/60 text-sm mb-6 max-w-sm">
            All announcements, updates, and product releases are shared through our official community channels.
          </p>

          <a
            href="https://t.me/solraccschannel"
            target="_blank"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-red-500 to-red-600 hover:opacity-90 transition text-sm font-medium shadow-lg shadow-red-500/20"
          >
            Join Telegram
          </a>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-white/10 py-6 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Solraccs. All rights reserved.
      </div>
    </footer>
  )
}

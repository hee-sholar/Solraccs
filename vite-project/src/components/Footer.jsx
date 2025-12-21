'use client';

import { Twitter, MessageCircle } from "lucide-react";
import { FaDiscord } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative  border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-3">

        {/* Brand */}
        <div>
          <h3 className="text-xl font-semibold text-white">Solraccs</h3>
          <p className="mt-3 text-white/60 text-sm leading-relaxed">
            AI-powered tools for smarter trading, analytics, and decentralized finance on Solana.
          </p>
        </div>

        {/* Links */}
        <div className="space-y-2 text-sm">
          <h4 className="font-semibold text-white mb-3">Resources</h4>
          {["About", "Products", "Token", "NFT", "Roadmap"].map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block text-white/60 hover:text-red-400 transition"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Community */}
        <div>
          <h4 className="font-semibold text-white mb-3">Community</h4>
          <p className="text-white/60 text-sm mb-4">
            Join our community and stay updated with announcements.
          </p>

          <a
            href="http://t.me/Raccsonsol"
            target="_blank"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500 hover:bg-red-600 transition text-sm font-medium"
          >
            Join Telegram
          </a>
        </div>

      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Solraccs. All rights reserved.
      </div>
    </footer>
  )
}

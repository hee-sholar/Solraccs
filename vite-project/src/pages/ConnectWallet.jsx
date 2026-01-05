import React, { useRef, useState, useEffect } from "react";
import { Wallet, TrendingUp, ShieldCheck, Sparkles, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { AiSwap } from "./AiSwap";

const BG_COLOR = "#F9FAFB";
const CARD_BORDER = "#E5E7EB";
const BRAND_RED = "#FF3B3B";

export default function ConnectWallet() {

  const [launched, setLaunched] = useState(false);

  // Scroll target
  const swapRef = useRef(null);

  const handleLaunchClick = () => {
    if (!swapRef.current) return;

    // Scroll to AI Swap
    swapRef.current.scrollIntoView({ behavior: "smooth", block: "start" });

    // Send event → AiSwap listens & switches to SWAP tab
    window.dispatchEvent(new Event("activate-swap"));

    // Glow highlight
    swapRef.current.classList.add("ring-4","ring-red-400","ring-offset-2");

    setTimeout(() => {
      swapRef.current.classList.remove("ring-4","ring-red-400","ring-offset-2");
    }, 1200);

    // Bounce effect
    swapRef.current.classList.add("animate-bounce");
    setTimeout(() => swapRef.current.classList.remove("animate-bounce"), 800);

    // Update button text
    setLaunched(true);
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center py-16 px-4"
      style={{ backgroundColor: BG_COLOR }}
    >

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-6xl bg-white rounded-2xl border shadow-sm px-6 py-5 flex items-center justify-between"
        style={{ borderColor: CARD_BORDER }}
      >
        <div className="flex items-center gap-4">
          <a href="/">
            <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center">
              <img src="/solraccs.jpg" alt="Solracss" className="w-10 h-10" />
            </div>
          </a>

          <div>
            <h1 className="text-xl font-semibold text-gray-900">solracss</h1>
            <p className="text-sm text-gray-500">AI-Powered Trading</p>
          </div>
        </div>

        {/* 🚀 Launch Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleLaunchClick}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-white shadow cursor-pointer"
          style={{ backgroundColor: BRAND_RED }}
        >
          <Wallet size={18} />
          Launch AI Trading
        </motion.button>
      </motion.div>

      {/* DASHBOARD STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl mt-10">
        <StatCard title="Total Swapped" value="$47,293" subtitle="+12.3% this week" color="text-emerald-500" icon={<TrendingUp />} />
        <StatCard title="Total Staked" value="$12,480" subtitle="8.5% APY" color="text-blue-500" icon={<ShieldCheck />} />
        <StatCard title="Savings" value="$847" subtitle="vs other DEXs" color="text-green-500" icon={<Sparkles />} />
        <StatCard title="AI Score" value="92/100" subtitle="Excellent routing" color="text-yellow-500" icon={<Zap />} />
      </div>

      {/* SCROLL TARGET */}
      <div ref={swapRef} className="w-full max-w-6xl mt-12">
        {/* AiSwap imported from separate file */}
        <AiSwap />
      </div>
    </div>
  );
}

/* STAT CARD */

function StatCard({ title, value, subtitle, icon, color }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-2xl border shadow-sm p-6 flex flex-col gap-3"
      style={{ borderColor: CARD_BORDER }}
    >
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">{title}</p>

        <div className={`w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center ${color}`}>
          {icon}
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900">{value}</h2>
      <p className={`text-sm ${color}`}>{subtitle}</p>
    </motion.div>
  );
}

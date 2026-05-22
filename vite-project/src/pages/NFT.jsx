import React from "react";
import { ImageIcon, Sparkles, Star, ShieldCheck, Gift } from "lucide-react";
import { motion } from "framer-motion";

export function NFT() {
  const utilities = [
    { icon: Star, label: "Access to premium RACCS AI analytics" },
    { icon: ShieldCheck, label: "Early access to new Solraccs products" },
    { icon: Gift, label: "Governance privileges" },
    { icon: Sparkles, label: "Exclusive community benefits and drops" },
  ];

  return (
    <section className="relative py-24 px-4 bg-red-gradient" id="nft">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 via-white to-red-500 bg-clip-text text-transparent">
            Solraccs NFT
          </h2>
          <p className="text-lg text-white/70 leading-relaxed">Total Supply: 3,333 NFTs</p>
        </motion.div>

        {/* NFT Card */}
        <motion.div
          className="bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12 hover:bg-black/50 hover:border-red-500 transition-all"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center text-center space-y-6">
            {/* Icon */}
            <div className="w-24 h-24 rounded-2xl bg-red-500/20 flex items-center justify-center glow-effect">
              <img src="/sol.jpg" className="rounded-2xl text-red-400" />
            </div>

            {/* Description */}
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl">
              Raccoons are survivors, hustlers, and natural-born meme lords. Just like them, SolRaccs thrives in the chaos — mixing NFT culture with meme token energy. On Solana's lightning-fast chain, we bring you Solraccs NFT: A limited 3,333 NFT collection.
            </p>

            {/* Utilities */}
            <div className="w-full max-w-md">
              <h4 className="text-xl font-bold mb-4 text-white flex items-center justify-center gap-2">
                <Sparkles className="w-5 h-5 text-red-400" />
                NFT Benefits
              </h4>
              <ul className="space-y-3">
                {utilities.map((utility, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3 text-white/70"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <utility.icon className="w-5 h-5 text-red-400 shrink-0 mt-1" />
                    <span className="leading-relaxed text-left">{utility.label}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <button size="lg" className="gap-2 bg-red-500 hover:bg-red-600 text-white glow-effect rounded-4xl px-6 py-3 flex items-center">
                <Sparkles className="w-5 h-5" />
                Mint Coming Soon
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default NFT;

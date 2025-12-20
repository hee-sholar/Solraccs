'use client';

import { Coins, ShieldCheck, Users, TrendingUp, Gift } from "lucide-react";
import { motion } from "framer-motion";

export function Token() {
  const distribution = [
    { label: "Liquidity", percentage: 40, color: "bg-red-500" },
    { label: "Presales", percentage: 20, color: "bg-red-400" },
    { label: "Marketing & Partnerships", percentage: 13, color: "bg-yellow-400" },
    { label: "Ecosystem Growth", percentage: 12, color: "bg-green-400" },
    { label: "Team", percentage: 10, color: "bg-blue-400" },
    { label: "Community & Rewards", percentage: 5, color: "bg-purple-400" },
  ];

  const utilities = [
    { icon: ShieldCheck, label: "Access to premium RACCS AI features" },
    { icon: Users, label: "Governance participation" },
    { icon: TrendingUp, label: "Staking and ecosystem rewards" },
    { icon: Coins, label: "Fee benefits on Raccs Swap" },
    { icon: Gift, label: "Utility within NFT ecosystem" },
  ];

  return (
    <section className="relative py-24 px-4 bg-red-gradient" id="token">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 via-white to-red-500 bg-clip-text text-transparent">
            $RACCS Tokenomics
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
            Total Supply: 1,000,000,000 (1 Billion) • Solana Blockchain
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Token Utility */}
          <motion.div
            className="bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl p-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
                <Coins className="w-5 h-5 text-red-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Token Utility</h3>
            </div>
            <ul className="space-y-4">
              {utilities.map((utility, index) => (
                <motion.li
                  key={index}
                  className="flex items-center gap-3 text-white/70"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <utility.icon className="w-5 h-5 text-red-400 shrink-0" />
                  <span>{utility.label}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Distribution */}
          <motion.div
            className="bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl p-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Distribution</h3>
            <div className="space-y-6">
              {distribution.map((item, index) => (
                <motion.div
                  key={index}
                  className="space-y-2"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.2 * index }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between text-sm">
                    <span className="text-white/70">{item.label}</span>
                    <span className="font-mono font-bold text-white">{item.percentage}%</span>
                  </div>
                  <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className={`${item.color} h-full rounded-full transition-all`}
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Token;

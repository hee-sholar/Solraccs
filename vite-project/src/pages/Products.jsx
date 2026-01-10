import React, { useState } from "react";
import { Bot, Wallet, ExternalLink, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import ConnectWallet from "./ConnectWallet";

export function Products() {
  const [showWallet, setShowWallet] = useState(false);

  const products = [
    {
      name: "RACCS AI",
      status: "BETA",
      icon: Bot,
      description:
        "Your intelligent crypto companion providing AI-powered market insights, on-chain analysis, and sentiment-driven intelligence to help you make smarter trading decisions.",
      features: [
        "Market trend analysis",
        "On-chain data interpretation",
        "AI-generated insights",
        "Sentiment tracking",
      ],
      button: {
        label: "Learn More",
        icon: ExternalLink,
        action: null,
      },
    },
    {
      name: "RACCS SWAP",
      status: "LIVE",
      icon: Wallet,
      description:
        "Connect your wallet and access AI-powered trading, smart swaps, analytics, and optimized execution — all in one intelligent dashboard.",
      features: [
        "Secure wallet connection",
        "AI-powered trading",
        "Smart swap routing",
        "Real-time performance stats",
      ],
      button: {
        label: "Launch App",
        icon: Wallet,
        action: () => setShowWallet(true),
      },
    },
  ];

  return (
    <>
      <section className="relative py-24 px-4 bg-red-gradient" id="products">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 via-white to-red-500 bg-clip-text text-transparent">
              Our Products
            </h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              Intelligent tools designed to elevate your crypto experience
            </p>
          </motion.div>

          {/* Products */}
          <div className="space-y-12">
            {products.map((product, index) => (
              <motion.div
                key={index}
                className="bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12 hover:bg-black/50 hover:border-red-500 transition-all"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 * index, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-16 h-16 rounded-xl bg-red-500/20 flex items-center justify-center">
                    <product.icon className="w-8 h-8 text-red-400" />
                  </div>

                  <div className="flex-1 space-y-4">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-3xl font-bold text-white">
                        {product.name}
                      </h3>
                      <span className="px-3 py-1 rounded-full text-xs font-mono bg-red-500/20 border border-red-400 text-red-400">
                        {product.status}
                      </span>
                    </div>

                    <p className="text-white/70 text-lg">
                      {product.description}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-3">
                      {product.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-white/70"
                        >
                          <CheckCircle2 className="w-4 h-4 text-red-400" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {product.button && (
                      <button
                        onClick={product.button.action}
                        className="mt-4 inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white rounded-xl px-6 py-3 text-sm font-medium transition cursor-pointer"
                      >
                        {product.button.label}
                        <product.button.icon className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONNECT WALLET APP */}
      {showWallet && (
        <section className="relative">
          <ConnectWallet />
        </section>
      )}
    </>
  );
}

export default Products;

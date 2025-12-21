'use client';

import { Brain, Zap, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export function About() {
  const features = [
    {
      icon: Brain,
      title: "AI Intelligence",
      description: "Harness advanced AI for market insights and on-chain analysis",
    },
    {
      icon: Zap,
      title: "Solana Speed",
      description: "Lightning-fast transactions with low costs on Solana",
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Built for the community with governance and rewards",
    },
  ];

  return (
    <section className="relative py-24 px-4 bg-red-gradient" id="about">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 via-white to-red-500 bg-clip-text text-transparent">
            About Solraccs
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
            Solraccs is an AI-powered Web3 ecosystem built on Solana. We combine advanced crypto analytics, AI-assisted trading, and NFTs to create smarter, faster, and more accessible crypto tools.
          </p>
        </motion.div>

        {/* Two Column Layout: Image + Text */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          {/* NFT Image */}
          <motion.div
            className="flex justify-center md:justify-start"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="/NFT1.jpg"
              alt="Raccoon NFT"
              className="rounded-2xl shadow-2xl"
              width={400}
              height={400}
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-red-400 font-semibold uppercase mb-2">About Us</p>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Welcome to Raccs</h3>
            <p className="text-white/70 leading-relaxed mb-6">
              SolRaccs is a <span className="text-red-400 font-semibold">fun AI-native ecosystem</span> engineered to <span className="text-yellow-400 font-semibold">redefine how users interact with the Solana blockchain</span>. While we embrace the energy of Web3, we are built on a foundation of <span className="text-red-400 font-semibold">serious technology</span>. By merging <span className="text-yellow-400 font-semibold">high-speed AI analytics</span> with <span className="text-red-400 font-semibold">optimized DeFi tools</span>, SolRaccs provides a <span className="text-white font-bold">smarter, faster gateway</span> for both elite traders and newcomers. Our mission is simple: to make <span className="text-red-500 font-bold">onchain interaction fun and seamless</span> while delivering <span className="text-yellow-400 font-bold">cutting-edge performance</span>.
            </p>
            <button className="cursor-pointer px-6 py-3 rounded-full border border-red-400 text-red-400 hover:bg-red-500 hover:text-white transition font-semibold">
              Learn more
            </button>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-black/30 backdrop-blur-md border border-white/10 rounded-xl p-8 hover:bg-black/50 hover:border-red-500 transition-all cursor-default"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-14 h-14 rounded-lg bg-red-500/20 flex items-center justify-center mb-4">
                <feature.icon className="w-7 h-7 text-red-400" />
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-white/70 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;

'use client';

import { motion } from 'framer-motion';
import { Globe, Handshake } from "lucide-react";

export function Partnership() {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Small partner images with names
  const smallPartnerImages = [
    { src: "/layer.jpg", name: "AdventureLayer" },
    { src: "/noahAI.jpg", name: "NoahAI" },
    { src: "/pixel.jpg", name: "Pixel Fishing" },
    { src: "/wave.jpg", name: "OneWave" },
  ];

  return (
    <section className="relative py-24 px-4 text-white" id="partnership">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-start gap-12">
        {/* Text Content */}
        <div className="flex-1">
          {/* Section Header */}
          <motion.div
            className="text-center md:text-left mb-12 md:mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-red-400">
              Partnership Opportunities
            </h2>
            <p className="text-lg leading-relaxed max-w-xl text-white/80">
              We are open to collaborations that drive growth and innovation. Partner with us to bring mutual benefits to our communities and ecosystems.
            </p>
          </motion.div>

          {/* Partnership Steps/Benefits */}
          <motion.div
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 md:p-12 mb-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-center md:text-left">
              How to Partner With Us
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: 'Strategic Collaboration', description: 'Work with us on joint projects that benefit both communities.' },
                { title: 'Co-Marketing', description: 'Boost visibility through shared marketing campaigns.' },
                { title: 'Technology Sharing', description: 'Leverage our tools and solutions for innovation.' },
                { title: 'Community Growth', description: 'Engage our users and expand your audience.' },
              ].map((step, index) => (
                <motion.div key={index} className="flex items-start gap-3" variants={itemVariants}>
                  <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{step.title}</h4>
                    <p className="text-white/70 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact / Partnership Links */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <a
              href="mailto:partnerships@solraccs.com"
              className="flex items-center justify-center gap-2 px-7 py-3 rounded-3xl bg-white text-purple-700 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
            >
              <Handshake className="w-5 h-5" />
              Contact Us
            </a>

            <a
              href="https://solraccs.com/partnerships"
              className="flex items-center justify-center gap-2 px-7 py-3 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold shadow-md hover:bg-white/20 hover:scale-105 transition-all duration-300"
            >
              <Globe className="w-5 h-5" />
              Learn More
            </a>
          </motion.div>
        </div>

        {/* Image Section */}
        <motion.div
          className="flex-1 flex flex-col items-center relative mt-60"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Partner Illustration */}
          <img
            src="/partner.jpg"
            alt="Partnership Illustration"
            className="w-full rounded-2xl shadow-xl mb-6 relative z-10"
          />

          {/* Four Small Partner Logos with Names */}
          <div className="flex justify-between w-full mt-4">
            {smallPartnerImages.map((partner, i) => (
              <div key={i} className="flex flex-col items-center w-1/4 relative">
                {/* Glowing blurred background */}
                <div className="absolute w-full h-full rounded-lg blur-[40px] bg-red-500/30 -z-10 animate-pulseSlow" />

                {/* Floating Logo */}
                <motion.img
                  src={partner.src}
                  alt={partner.name}
                  className="w-full h-20 object-contain rounded-lg shadow-md bg-white/10 p-2"
                  animate={{ y: [0, -8, 0], x: [0, 5, 0] }}
                  transition={{ duration: 4 + i, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut', delay: i * 0.3 }}
                  whileHover={{ scale: 1.05 }}
                />

                {/* Partner Name */}
                <p className="mt-2 text-sm text-white/80 font-medium">{partner.name}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ================= Global Animations ================= */}
      <style jsx global>{`
        @keyframes pulseSlow {
          0%, 100% { opacity: 0.35; }
          50% { opacity: 0.6; }
        }
        .animate-pulseSlow { animation: pulseSlow 6s ease-in-out infinite; }
      `}</style>
    </section>
  );
}

export default Partnership;

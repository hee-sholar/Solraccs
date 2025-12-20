'use client';

import { motion } from 'framer-motion';
import { Globe, Handshake } from "lucide-react";

export function Partnership() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative py-24 px-4 bg-gradient-to-r text-white" id="partnership">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="flex-1">
          {/* Section Header */}
          <motion.div
            className="text-center md:text-left mb-12 md:mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center flex ">
              Partnership Opportunities
            </h2>
            <p className="text-lg leading-relaxed max-w-xl">
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
            <h3 className="text-2xl font-bold mb-6 text-center md:text-left">How to Partner With Us</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  title: 'Strategic Collaboration',
                  description: 'Work with us on joint projects that benefit both communities.',
                },
                {
                  title: 'Co-Marketing',
                  description: 'Boost visibility through shared marketing campaigns.',
                },
                {
                  title: 'Technology Sharing',
                  description: 'Leverage our tools and solutions for innovation.',
                },
                {
                  title: 'Community Growth',
                  description: 'Engage our users and expand your audience.',
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  variants={itemVariants}
                >
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

        {/* Image */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/partner.jpg"
            alt="Partnership Illustration"
            className="w-full rounded-2xl shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Partnership;

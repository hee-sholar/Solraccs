'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Twitter } from "lucide-react";
import { FaDiscord } from "react-icons/fa";

export function Community() {
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
    <section className="relative py-24 px-4" id="community">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Join the Community
          </h2>
          <p className="text-lg text-foreground/80 leading-relaxed">
            All announcements, updates, and product releases will be shared through our official community channels.
          </p>
        </motion.div>

        {/* How to Get Involved */}
        <motion.div
          className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12 mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-center text-foreground">How to Get Involved</h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: 'Join the Community',
                description: 'Connect with us on X, Telegram, and Discord to stay updated',
              },
              {
                title: 'Hold $RACCS',
                description: 'Participate in the ecosystem with our utility token',
              },
              {
                title: 'Mint NFTs',
                description: 'Get exclusive access when Solraccs NFTs launch',
              },
              {
                title: 'Participate',
                description: 'Help shape the future of Solraccs ecosystem',
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-3"
                variants={itemVariants}
              >
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                  <span className="text-primary font-bold">{index + 1}</span>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">{step.title}</h4>
                  <p className="text-sm text-foreground/70 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <a
            href="https://x.com/Solraccs"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-7 py-3 rounded-3xl bg-primary text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
          >
            <Twitter className="w-5 h-5" />
            Follow on X
          </a>

          <a
            href="https://t.me/solraccschannel"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-7 py-3 rounded-3xl bg-card/50 backdrop-blur-sm border border-border text-foreground font-semibold shadow-md hover:bg-card/70 hover:scale-105 transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5" />
            Join Telegram
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Community;

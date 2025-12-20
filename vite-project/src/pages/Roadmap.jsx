'use client';

import { CheckCircle2, Circle, Rocket, Cpu, Users, Star } from "lucide-react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

export function Roadmap() {
  const phases = [
    {
      phase: "Phase 1",
      title: "Foundation",
      icon: Rocket,
      items: ["Branding", "Beta website launch", "Community building"],
    },
    {
      phase: "Phase 2",
      title: "Product Launch",
      icon: Cpu,
      items: ["RACCS AI MVP", "Solraccs NFT launch", "Early token utility"],
    },
    {
      phase: "Phase 3",
      title: "Ecosystem Expansion",
      icon: Users,
      items: ["Raccs Swap launch", "Staking & rewards", "Deeper token integrations"],
    },
    {
      phase: "Phase 4",
      title: "Full Platform",
      icon: Star,
      items: ["Full AI dashboard", "Advanced analytics", "Ecosystem expansion"],
    },
  ];

  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-50px" });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section className="relative py-24 px-4 bg-red-gradient" id="roadmap">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 via-white to-red-500 bg-clip-text text-transparent">
            Roadmap
          </h2>
          <p className="text-lg text-white/70 leading-relaxed">
            Step by step journey to building the future of AI-powered crypto tools
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div
          className="relative flex flex-col md:flex-row items-start md:items-center md:justify-between space-y-12 md:space-y-0 md:space-x-8"
          ref={ref}
        >
          {/* Horizontal connector line for desktop */}
          <motion.div
            className="hidden md:block absolute top-16 left-6 right-6 h-1 bg-white/20 z-0"
            initial={{ scaleX: 0 }}
            animate={controls}
            variants={{
              visible: { scaleX: 1, transition: { duration: 1.5, ease: "easeInOut" } },
            }}
            style={{ transformOrigin: "left" }}
          />

          {phases.map((phase, index) => {
            const Icon = phase.icon;
            return (
              <motion.div
                key={index}
                className="relative z-10 flex flex-col items-center text-center md:w-1/4"
                initial="hidden"
                animate={controls}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0, transition: { delay: index * 0.5, duration: 0.6 } },
                }}
              >
                {/* Phase Icon */}
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-red-500 glow-effect">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Phase Title */}
                <div className="mb-4">
                  <div className="text-sm font-mono mb-1 text-white/70">{`Phase ${index + 1}`}</div>
                  <h3 className="text-lg font-bold text-white">{phase.title}</h3>
                </div>

                {/* Milestones */}
                <ul className="space-y-2">
                  {phase.items.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      className="flex items-center gap-2 text-white/70 text-sm"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 * itemIndex, duration: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle2 className="w-4 h-4 text-white/70 shrink-0" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Roadmap;

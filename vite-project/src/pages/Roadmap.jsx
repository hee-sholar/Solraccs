'use client'

import { CheckCircle2, Rocket, Cpu, Users, Star } from "lucide-react"
import { motion, useAnimation, useInView } from "framer-motion"
import { useRef, useEffect } from "react"

export function Roadmap() {
  const phases = [
    {
      title: "Foundation",
      icon: Rocket,
      items: ["Branding", "Beta website launch", "Community building"],
    },
    {
      title: "Product Launch",
      icon: Cpu,
      items: ["RACCS AI MVP", "Solraccs NFT launch", "Early token utility"],
    },
    {
      title: "Ecosystem Expansion",
      icon: Users,
      items: ["Raccs Swap launch", "Staking & rewards", "Deeper token integrations"],
    },
    {
      title: "Full Platform",
      icon: Star,
      items: ["Full AI dashboard", "Advanced analytics", "Ecosystem expansion"],
    },
  ]

  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { margin: "-100px" })

  useEffect(() => {
    if (inView) controls.start("visible")
  }, [controls, inView])

  return (
    <section className="relative py-20 px-4" id="roadmap">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-400 via-white to-red-500 bg-clip-text text-transparent">
            Roadmap
          </h2>
          <p className="text-white/70 max-w-xl mx-auto text-sm sm:text-base">
            Step-by-step journey to building the future of AI-powered crypto tools
          </p>
        </motion.div>

        {/* Timeline */}
        <div ref={ref} className="relative">

          {/* Vertical line (mobile) */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/10 md:hidden" />

          {/* Horizontal line (desktop) */}
          <motion.div
            className="hidden md:block absolute top-20 left-6 right-6 h-px bg-white/15"
            initial={{ scaleX: 0 }}
            animate={controls}
            variants={{
              visible: { scaleX: 1, transition: { duration: 1.4, ease: "easeInOut" } },
            }}
            style={{ transformOrigin: "left" }}
          />

          <div className="flex flex-col md:flex-row gap-16 md:gap-8 justify-between">
            {phases.map((phase, index) => {
              const Icon = phase.icon
              return (
                <motion.div
                  key={index}
                  className="relative flex flex-col items-center text-center md:w-1/4"
                  initial={{ opacity: 0, y: 40 }}
                  animate={controls}
                  variants={{
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { delay: index * 0.35, duration: 0.6 },
                    },
                  }}
                >
                  {/* Icon */}
                  <div className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 bg-red-500 shadow-lg shadow-red-500/30">
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>

                  {/* Phase */}
                  <span className="text-xs tracking-widest text-white/50 mb-1">
                    PHASE {index + 1}
                  </span>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3">
                    {phase.title}
                  </h3>

                  {/* Items */}
                  <ul className="space-y-2 text-sm text-white/70">
                    {phase.items.map((item, i) => (
                      <motion.li
                        key={i}
                        className="flex items-center justify-center gap-2"
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.15 }}
                        viewport={{ once: true }}
                      >
                        <CheckCircle2 className="w-4 h-4 text-red-400" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Roadmap

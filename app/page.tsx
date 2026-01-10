"use client"

import { motion } from "framer-motion"
import { Shield, Zap, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function WelcomeGateway() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 overflow-hidden">
      {/* Background Grid Minimal */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#10b981_1px,transparent_1px),linear-gradient(to_bottom,#10b981_1px,transparent_1px)] bg-[size:40px_40px]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center space-y-12"
      >
        <div className="flex justify-center flex-col items-center space-y-4">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="w-20 h-20 border border-primary flex items-center justify-center glow-emerald"
          >
            <Shield className="w-10 h-10 text-primary" />
          </motion.div>
          <div className="space-y-1">
            <h1 className="text-4xl md:text-6xl font-black tracking-[0.3em] uppercase italic text-primary">GastroIA</h1>
            <p className="terminal-text opacity-40">Operational Kernel v.2026.4</p>
          </div>
        </div>

        <div className="max-w-xl mx-auto space-y-6">
          <p className="text-sm font-medium tracking-widest text-primary/60 uppercase">
            Sincronizando flujos de capital y mentoría neuronal.
          </p>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, delay: 0.5 }}
            className="h-[1px] bg-primary/20 mx-auto"
          />
        </div>

        <Link href="/admin/dashboard" className="inline-block">
          <button className="system-btn group">
            <span className="flex items-center gap-4">
              Entrar al Sistema
              <ChevronRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </span>
          </button>
        </Link>
      </motion.div>

      {/* System Status Footer */}
      <div className="absolute bottom-10 left-10 right-10 flex justify-between items-center opacity-20 terminal-text">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
          SECURE_NODE_04
        </div>
        <div>UPLINK_STABLE</div>
      </div>
    </div>
  )
}

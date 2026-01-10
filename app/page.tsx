"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Zap, Target, Activity, Cpu, ChevronRight } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden selection:bg-primary/20">
      {/* Navigator Hub */}
      <nav className="fixed top-0 w-full z-100 glass-luxury border-b border-white/5">
        <div className="container mx-auto px-10 h-24 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-sm flex items-center justify-center text-primary glow-emerald">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <span className="text-2xl font-black tracking-[0.2em] uppercase leading-none">GastroIA</span>
              <p className="text-[8px] font-bold text-primary tracking-[0.3em] uppercase mt-1">SaaS Force One</p>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-12 text-[10px] font-black uppercase tracking-[0.4em] text-secondary">
            <a href="#architecture" className="hover:text-primary transition-all">Architecture</a>
            <a href="#intelligence" className="hover:text-primary transition-all">Intelligence</a>
            <a href="#admin" className="hover:text-primary transition-all">Command</a>
          </div>
          <button className="cyber-button">
            Initialize
          </button>
        </div>
      </nav>

      <main>
        {/* Cyber Hero Section */}
        <section className="relative pt-60 pb-40 container mx-auto px-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="mb-10 flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full animate-ping" />
                <span className="cyber-terminal">Status: Ready for Deployment</span>
              </div>
              <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.8] mb-12 uppercase italic">
                Construye un <span className="text-primary">Imperio</span> <span className="text-secondary/20">Sintético.</span>
              </h1>
              <p className="text-lg md:text-xl text-secondary mb-16 max-w-xl leading-relaxed font-medium">
                GastroIA es la columna vertebral tecnológica para restaurantes de ultra-lujo. Gestión financiera, mentoría IA y escalabilidad global en una sola terminal.
              </p>
              <div className="flex flex-col sm:flex-row gap-8">
                <button className="cyber-button h-16 px-12 text-xs">
                  Aceder al Comando Central
                </button>
                <button className="h-16 px-12 glass-luxury border-white/10 text-secondary rounded-sm font-black text-[10px] uppercase tracking-[0.3em] hover:bg-white/5 transition-all">
                  Ver Blueprint
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-sm overflow-hidden border border-white/5 relative group glass-luxury">
                <Image
                  src="/hero.png"
                  alt="Cyber Gastronomy"
                  fill
                  className="object-cover opacity-40 group-hover:scale-110 group-hover:opacity-60 transition-all duration-[3s]"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

                {/* Floating Terminal Data */}
                <div className="absolute top-10 left-10 p-6 glass-neon rounded-sm border-primary/20 animate-vertical-float">
                  <div className="flex items-center gap-2 mb-4">
                    <Activity className="w-3 h-3 text-primary" />
                    <span className="text-[8px] font-black uppercase tracking-widest text-primary">Marginal Flow</span>
                  </div>
                  <p className="text-4xl font-black text-white italic">+32.5%</p>
                </div>

                <div className="absolute bottom-10 right-10 p-6 glass-luxury border-white/10 rounded-sm">
                  <p className="text-[8px] font-black uppercase tracking-widest text-secondary/40 mb-2">Neural Node: 0x42F</p>
                  <p className="text-lg font-black uppercase tracking-widest">Optimized</p>
                </div>
              </div>
              {/* Cyber Orbs */}
              <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-[150px] -z-1" />
            </motion.div>
          </div>
        </section>

        {/* Technical Architecture */}
        <section id="architecture" className="py-40 border-y border-white/5">
          <div className="container mx-auto px-10">
            <div className="grid lg:grid-cols-3 gap-16">
              {[
                {
                  icon: <Target className="w-6 h-6" />,
                  title: "Alta Precisión",
                  desc: "Márgenes calculados al centavo mediante algoritmos de auditoría sintética."
                },
                {
                  icon: <Cpu className="w-6 h-6" />,
                  title: "Núcleo Mentor IA",
                  desc: "Un agente autónomo que aprende de tus platos y optimiza tus precios 24/7."
                },
                {
                  icon: <Zap className="w-6 h-6" />,
                  title: "Despliegue Global",
                  desc: "Infraestructura serverless preparada para imperios de 100+ locaciones."
                }
              ].map((f, i) => (
                <div key={i} className="group p-10 glass-luxury border-white/5 hover:border-primary/20 transition-all duration-700">
                  <div className="w-16 h-16 rounded-sm bg-primary/5 text-primary flex items-center justify-center mb-10 border border-primary/10 group-hover:glow-emerald group-hover:scale-110 transition-all">
                    {f.icon}
                  </div>
                  <h3 className="text-2xl font-black mb-6 tracking-tighter uppercase italic">{f.title}</h3>
                  <p className="text-secondary leading-relaxed font-medium text-sm">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="py-20 border-t border-white/5">
        <div className="container mx-auto px-10 flex flex-col lg:row justify-between items-center gap-10">
          <div className="flex items-center gap-4 opacity-40 grayscale group hover:grayscale-0 hover:opacity-100 transition-all">
            <Zap className="w-6 h-6 text-primary" />
            <span className="text-2xl font-black tracking-[0.2em] uppercase">GastroIA</span>
          </div>
          <div className="flex gap-12 text-[10px] font-black uppercase tracking-[0.4em] text-secondary/30">
            <a href="#" className="hover:text-primary transition-all">Legal Terminal</a>
            <a href="#" className="hover:text-primary transition-all">Privacy Node</a>
            <a href="#" className="hover:text-primary transition-all">Security Protocol</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ChefHat, Smartphone, Zap, BarChart3, ChevronRight, Target } from "lucide-react"
import { cn } from "@/lib/utils"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden selection:bg-primary/30">
      {/* Navbar Minimalist */}
      <nav className="fixed top-0 w-full z-100 border-b border-white/5 bg-background/50 backdrop-blur-2xl">
        <div className="container mx-auto px-10 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/20 border border-primary/20 rounded-2xl flex items-center justify-center">
              <Zap className="text-primary w-5 h-5" />
            </div>
            <span className="text-2xl font-black tracking-tighter">GastroIA</span>
          </div>
          <div className="hidden lg:flex items-center gap-12 text-[10px] font-black uppercase tracking-widest text-foreground/40">
            <a href="#growth" className="hover:text-primary transition-all">Crecimiento</a>
            <a href="#intelligence" className="hover:text-primary transition-all">Inteligencia</a>
            <a href="#pricing" className="hover:text-primary transition-all">Planes</a>
          </div>
          <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all shadow-2xl shadow-primary/20 hover:scale-[1.02] active:scale-95">
            Reservar Demo
          </button>
        </div>
      </nav>

      <main>
        {/* Luxury Hero Section */}
        <section className="relative pt-40 pb-32 container mx-auto px-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-primary/10 border border-primary/10 text-primary text-[10px] font-black uppercase tracking-widest mb-10">
                <Target className="w-3 h-3" />
                SaaS B2B para Gastronomía
              </div>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-10">
                No abras un restaurante, construye un <span className="text-primary italic">Imperio.</span>
              </h1>
              <p className="text-lg md:text-xl text-foreground/40 mb-12 max-w-xl leading-relaxed font-medium">
                GastroIA combina gestión inteligente con educación financiera para transformar tu pasión en rentabilidad extrema.
              </p>
              <div className="flex flex-col sm:row gap-6">
                <button className="h-16 px-10 bg-primary text-white rounded-3xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 group transition-all hover:shadow-3xl hover:shadow-primary/40 active:scale-95">
                  Iniciar Crecimiento
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="h-16 px-10 bg-secondary text-foreground rounded-3xl font-black text-xs uppercase tracking-widest border border-border hover:bg-border transition-all active:scale-95">
                  Ver Arquitectura
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-[4rem] overflow-hidden border border-white/5 relative group">
                <Image
                  src="/hero.png"
                  alt="Imperio Gastronómico"
                  fill
                  className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-[2s]"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/20" />

                {/* Micro Dashboard UI */}
                <div className="absolute top-10 left-10 p-6 glass-dark rounded-[2.5rem] border border-white/10 animate-vertical-float">
                  <p className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Rentabilidad</p>
                  <p className="text-3xl font-black text-white">+42%</p>
                  <div className="flex gap-1 mt-3">
                    {[40, 70, 50, 90, 60].map((h, i) => (
                      <div key={i} className="w-1.5 bg-primary/60 rounded-full" style={{ height: h + '%' }} />
                    ))}
                  </div>
                </div>
              </div>
              {/* Orbs */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -z-1" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-accent/10 rounded-full blur-[100px] -z-1" />
            </motion.div>
          </div>
        </section>

        {/* Intelligence Section */}
        <section id="intelligence" className="py-32 border-y border-white/5">
          <div className="container mx-auto px-10">
            <div className="grid md:grid-cols-2 gap-20 items-end mb-24">
              <h2 className="text-5xl font-black tracking-tighter leading-none">Inteligencia que enseña.</h2>
              <p className="text-foreground/40 text-lg font-medium">Nuestro motor Groq no solo genera menús, audita tus finanzas en tiempo real y te enseña a manejar tu flujo de caja como un CFO.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  icon: <BarChart3 className="w-6 h-6" />,
                  title: "Auditoría Financiera",
                  desc: "Detección automática de fugas de capital en insumos y personal."
                },
                {
                  icon: <Smartphone className="w-6 h-6" />,
                  title: "UX Mobile-First",
                  desc: "Experiencia sin fricción para tus comensales y eficiencia crítica para tu cocina."
                },
                {
                  icon: <Zap className="w-6 h-6" />,
                  title: "Escalabilidad Pura",
                  desc: "Arquitectura Serverless que crece contigo, desde 1 hasta 100 locales."
                }
              ].map((f, i) => (
                <div key={i} className="p-10 rounded-[3rem] bg-card border border-border group hover:border-primary/20 transition-all duration-500">
                  <div className="w-16 h-16 rounded-[2rem] bg-secondary text-primary flex items-center justify-center mb-8 border border-white/5 group-hover:scale-110 transition-transform">
                    {f.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 tracking-tight">{f.title}</h3>
                  <p className="text-foreground/40 leading-relaxed font-medium">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Minimal */}
        <section className="py-40">
          <div className="container mx-auto px-10 text-center">
            <div className="max-w-4xl mx-auto p-20 rounded-[5rem] bg-primary relative overflow-hidden shadow-4xl shadow-primary/20">
              <div className="relative z-10 text-white">
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-10">Únete a la nueva era del B2B.</h2>
                <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto font-medium">
                  GastroIA es el sistema operativo para tu éxito financiero.
                </p>
                <div className="flex flex-col sm:row justify-center gap-6">
                  <button className="h-16 px-12 bg-white text-primary rounded-3xl font-black text-xs uppercase tracking-widest hover:scale-[1.05] transition-transform active:scale-95 shadow-2xl">
                    Empezar Ahora
                  </button>
                </div>
              </div>
              <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[size:20px_20px]" />
            </div>
          </div>
        </section>
      </main>

      <footer className="py-20 border-t border-white/5">
        <div className="container mx-auto px-10 flex flex-col md:row justify-between items-center gap-10">
          <div className="flex items-center gap-3 opacity-30 group">
            <Zap className="w-5 h-5 group-hover:text-primary transition-colors" />
            <span className="text-xl font-black tracking-tighter">GastroIA</span>
          </div>
          <div className="flex gap-12 text-[10px] font-black uppercase tracking-widest text-foreground/20">
            <a href="#" className="hover:text-foreground transition-colors">Infraestructura</a>
            <a href="#" className="hover:text-foreground transition-colors">Seguridad</a>
            <a href="#" className="hover:text-foreground transition-colors">Legal</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

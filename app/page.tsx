"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ChefHat, Smartphone, Zap, BarChart3, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
              <ChefHat className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-bold tracking-tight">GastroIA</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground/60">
            <a href="#features" className="hover:text-primary transition-colors">Características</a>
            <a href="#solutions" className="hover:text-primary transition-colors">Soluciones</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Precios</a>
          </div>
          <button className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-md shadow-primary/10 active:scale-95">
            Empezar Ahora
          </button>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-6 tracking-wider uppercase">
                <Zap className="w-3 h-3 fill-current" />
                El Futuro de la Gastronomía
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
                Redefine tu <span className="text-primary italic">Restaurante</span> con IA
              </h1>
              <p className="text-lg md:text-xl text-foreground/60 mb-10 max-w-lg leading-relaxed">
                Gestiona tu menú, pedidos y clientes con potencia de inteligencia artificial. Crea menús digitales en segundos e impresiona a tus comensales.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="h-14 px-8 bg-primary text-white rounded-2xl font-bold flex items-center justify-center gap-2 group transition-all hover:shadow-2xl hover:shadow-primary/30 active:scale-95">
                  Prueba Gratis
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="h-14 px-8 bg-secondary text-foreground rounded-2xl font-bold border border-border hover:bg-secondary/80 transition-all active:scale-95">
                  Ver Demo
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-square lg:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/10 border border-white/10"
            >
              <Image
                src="/hero.png"
                alt="Futuristic Restaurant"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 right-8 glass-dark p-6 rounded-2xl border border-white/10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <BarChart3 className="text-accent w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Aumento del 40%</h4>
                    <p className="text-sm text-white/60 text-balance">Optimización de pedidos mediante IA deductiva</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Preview */}
        <section id="features" className="py-24 bg-secondary/30">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Todo lo que necesitas para escalar</h2>
              <p className="text-foreground/60 leading-relaxed">Pasa menos tiempo en la administración y más tiempo creando experiencias culinarias inolvidables.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Zap className="w-6 h-6" />,
                  title: "Menú IA Eficiente",
                  desc: "Genera descripciones irresistibles y optimiza tus precios automáticamente."
                },
                {
                  icon: <Smartphone className="w-6 h-6" />,
                  title: "QR Inteligente",
                  desc: "Menús digitales sin contacto que aprenden de las preferencias del cliente."
                },
                {
                  icon: <BarChart3 className="w-6 h-6" />,
                  title: "Analítica en Vivo",
                  desc: "Entiende qué platos aman tus clientes y ajusta tu stock en tiempo real."
                }
              ].map((f, i) => (
                <div key={i} className="p-8 rounded-3xl bg-card border border-border group hover:border-primary/50 transition-colors">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {f.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                  <p className="text-foreground/60 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-6 flex flex-col md:row justify-between items-center gap-8">
          <div className="flex items-center gap-2 opacity-50">
            <ChefHat className="w-5 h-5" />
            <span className="font-bold">GastroIA © 2024</span>
          </div>
          <div className="flex gap-8 text-sm text-foreground/40 font-medium">
            <a href="#" className="hover:text-foreground">Privacidad</a>
            <a href="#" className="hover:text-foreground">Términos</a>
            <a href="#" className="hover:text-foreground">Soporte</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

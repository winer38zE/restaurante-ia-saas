"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Zap, Target, Activity, Cpu, ChevronRight, Utensils, DollarSign, ChefHat, ShoppingBag, Terminal } from "lucide-react"
import { cn } from "@/lib/utils"

export default function EmpireDashboard() {
  const [selectedPlan, setSelectedPlan] = useState("hibrido")
  const totalVentas = 124 // Ejemplo
  const feePlataforma = totalVentas * 100

  return (
    <div className="max-w-[1600px] mx-auto space-y-16 py-10 selection:bg-primary/20">
      {/* Top Banner Control */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
        <div>
          <div className="flex items-center gap-3 text-primary mb-3">
            <Zap className="w-5 h-5 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em]">Operational Commander</span>
          </div>
          <h1 className="text-7xl font-black tracking-tighter uppercase italic leading-none">Comando <span className="text-secondary/20">Central</span></h1>
          <p className="text-lg text-white/40 font-medium mt-4">Bienvenido, <span className="text-white italic">Elite Partner.</span> Gestionando 1 local activo.</p>
        </div>
        <div className="grid grid-cols-2 gap-4 w-full lg:w-auto">
          <div className="luxury-card p-6 min-w-[200px] border-primary/20 bg-primary/5">
            <p className="text-[8px] font-black uppercase tracking-widest text-primary mb-2">Fee Acumulado</p>
            <h2 className="text-3xl font-black italic">$ {feePlataforma.toLocaleString()}</h2>
          </div>
          <div className="luxury-card p-6 min-w-[200px]">
            <p className="text-[8px] font-black uppercase tracking-widest text-white/30 mb-2">Ventas Netas</p>
            <h2 className="text-3xl font-black italic">$4.8M</h2>
          </div>
        </div>
      </div>

      {/* Main SaaS Strategy Grid */}
      <div className="grid lg:grid-cols-3 gap-10">
        {/* Quick Access */}
        <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
          {[
            { title: "Menú Digital", href: "/menu", desc: "Ver experiencia del cliente", icon: <Utensils className="w-6 h-6" /> },
            { title: "Cerebro Financiero", href: "/admin/finanzas", desc: "Auditoría IA y márgenes", icon: <DollarSign className="w-6 h-6" /> },
            { title: "Monitor de Cocina", href: "/cocina", desc: "Flujo operativo real", icon: <ChefHat className="w-6 h-6" /> },
            { title: "Gestión de Pedidos", href: "/dashboard/orders", desc: "Historial y reportes", icon: <ShoppingBag className="w-6 h-6" /> },
          ].map((card, i) => (
            <Link key={i} href={card.href} className="luxury-card group hover:scale-[1.02] flex flex-col justify-between h-[240px]">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-white/20 group-hover:text-primary transition-all">
                {card.icon}
              </div>
              <div>
                <h3 className="text-2xl font-black italic mb-2">{card.title}</h3>
                <p className="text-xs text-white/30 font-medium uppercase tracking-widest">{card.desc}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* SaaS Subscription Selection */}
        <div className="space-y-8">
          <div className="luxury-card border-white/5 bg-white/2">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-8">Selección de Estrategia (SaaS)</h4>
            <div className="space-y-6">
              {[
                { id: "basico", name: "Básico", price: "$59k", desc: "Fijo mensual" },
                { id: "premium", name: "Premium", price: "$119k", desc: "Full IA Mentorship" },
                { id: "hibrido", name: "Híbrido", price: "$40k", desc: "$40k + $100/venta" },
              ].map((plan) => (
                <button
                  key={plan.id}
                  onClick={() => setSelectedPlan(plan.id)}
                  className={cn(
                    "w-full p-6 text-left rounded-xl transition-all border",
                    selectedPlan === plan.id ? "bg-primary border-transparent text-black" : "bg-white/5 border-white/5 text-white/40 hover:bg-white/10"
                  )}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[10px] font-black uppercase tracking-widest">{plan.name}</span>
                    <span className="text-lg font-black italic">{plan.price}</span>
                  </div>
                  <p className="text-[10px] font-medium opacity-60 uppercase">{plan.desc}</p>
                </button>
              ))}
            </div>
            <button className="w-full h-14 mt-10 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-xl hover:brightness-90 active:scale-95 transition-all">
              Actualizar Suscripción
            </button>
          </div>

          {/* AI Global Message */}
          <div className="p-8 bg-primary/10 border border-primary/20 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Terminal className="w-20 h-20" />
            </div>
            <h5 className="text-[10px] font-black uppercase tracking-widest text-primary mb-4 flex items-center gap-2">
              <Cpu className="w-4 h-4" /> Global Insight
            </h5>
            <p className="text-sm font-bold italic leading-relaxed text-primary/80">
              "Tu plan actual (Híbrido) está generando un ahorro del 12% comparado con el Plan Premium. Mantén este volumen de ventas o escala para optimizar costos."
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

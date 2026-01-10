"use client"

import {
    BrainCircuit,
    Lightbulb,
    Target,
    ShieldCheck,
    TrendingDown,
    ChevronRight,
    Sparkles,
    Zap
} from "lucide-react"
import { motion } from "framer-motion"

export default function IAMentor() {
    return (
        <div className="min-h-screen bg-gradient-cryptify text-white p-6 lg:p-10 font-sans">
            <header className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                            IA Nivel 2026
                        </span>
                        <span className="flex items-center gap-1 text-xs text-zinc-500 uppercase tracking-widest font-medium">
                            <Zap className="w-3 h-3 text-yellow-500" /> Online
                        </span>
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight mb-2">Mentor <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Inteligente</span></h1>
                    <p className="text-zinc-400 max-w-xl text-sm leading-relaxed">
                        Sistema de inteligencia sintética para la optimización de márgenes y estrategias de ahorro en tiempo real.
                    </p>
                </div>
                <div className="glass-panel px-6 py-4 flex items-center gap-4">
                    <div className="text-right">
                        <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Ahorro Potencial</p>
                        <p className="text-2xl font-bold text-emerald-400">$1.2M <span className="text-xs text-white">/mes</span></p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                        <Sparkles className="w-5 h-5 text-black" />
                    </div>
                </div>
            </header>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {[
                    {
                        title: "Auditoría de Insumos",
                        icon: TrendingDown,
                        desc: "Tu costo de carne subió un 12%. Ajusta el precio para ser un empresario, no solo un cocinero. El margen actual en 'Asado Elite' cayó al 14%.",
                        action: "Recalibrar Menú",
                        color: "text-orange-400",
                        bg: "bg-orange-500/10"
                    },
                    {
                        title: "Punto de Equilibrio",
                        icon: Target,
                        desc: "Has alcanzado tu break-even 3 días antes de lo proyectado. Inicia protocolo de marketing agresivo para maximizar utilidad neta.",
                        action: "Ver Estrategia",
                        color: "text-emerald-400",
                        bg: "bg-emerald-500/10"
                    },
                    {
                        title: "Ahorro Fiscal IA",
                        icon: ShieldCheck,
                        desc: "Se detectó redundancia en pagos de proveedores G-04. Sugerimos unificación para ahorrar costos operativos.",
                        action: "Unificar Pagos",
                        color: "text-blue-400",
                        bg: "bg-blue-500/10"
                    }
                ].map((card, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="glass-panel p-8 flex flex-col justify-between min-h-[320px] group hover:border-emerald-500/30"
                    >
                        <div className="space-y-6">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${card.bg} ${card.color} border border-white/5`}>
                                <card.icon className="w-6 h-6" />
                            </div>
                            <div className="space-y-3">
                                <h3 className="text-xl font-bold text-white">{card.title}</h3>
                                <p className="text-sm leading-relaxed text-zinc-400">"{card.desc}"</p>
                            </div>
                        </div>

                        <button className="flex items-center gap-2 text-sm font-bold mt-8 text-white group-hover:text-emerald-400 transition-colors">
                            {card.action} <ChevronRight className="w-4 h-4" />
                        </button>
                    </motion.div>
                ))}
            </div>

            {/* Global Education Quote */}
            <div className="glass-panel p-10 relative overflow-hidden flex items-center justify-center text-center">
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />

                <div className="relative z-10 max-w-2xl">
                    <div className="mx-auto w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6 text-yellow-400 animate-pulse">
                        <Lightbulb className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-6">
                        "El éxito en 2026 no es cocinar bien, es <span className="text-emerald-400">auditar bien</span> cada centavo de tu plataforma."
                    </h2>
                    <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500">
                        <BrainCircuit className="w-4 h-4" />
                        Central Neural Logic G-IA
                    </div>
                </div>
            </div>
        </div>
    )
}

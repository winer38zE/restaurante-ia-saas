"use client"

import {
    BrainCircuit,
    Lightbulb,
    Target,
    ShieldCheck,
    TrendingDown,
    ChevronRight,
    Database
} from "lucide-react"
import { motion } from "framer-motion"

export default function IAMentor() {
    return (
        <div className="min-h-screen bg-black text-primary p-6 lg:p-12 font-mono">
            <header className="mb-20 border-b border-primary/10 pb-10">
                <div className="flex items-center gap-3 terminal-text mb-4 opacity-40">
                    <Database className="w-4 h-4" /> KNOWLEDGE_BASE_SYNCED
                </div>
                <h1 className="text-5xl font-black uppercase italic tracking-tighter">Mentor <span className="text-white italic">IA</span></h1>
                <p className="text-sm opacity-40 max-w-2xl mt-4">Nivel 2026: Inteligencia sintética para la enseñanza de márgenes y ahorro estratégico.</p>
            </header>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {[
                    {
                        title: "Auditoría de Insumos",
                        icon: <TrendingDown className="w-6 h-6" />,
                        desc: "Tu costo de carne subió un 12%. Ajusta el precio para ser un empresario, no solo un cocinero. El margen actual en 'Asado Elite' cayó al 14%.",
                        action: "Recalibrar Menú"
                    },
                    {
                        title: "Punto de Equilibrio",
                        icon: <Target className="w-6 h-6" />,
                        desc: "Has alcanzado tu break-even 3 días antes de lo proyectado. Inicia protocolo de marketing agresivo para maximizar utilidad neta.",
                        action: "Ver Estrategia"
                    },
                    {
                        title: "Ahorro Fiscal IA",
                        icon: <ShieldCheck className="w-6 h-6" />,
                        desc: "Se detectó redundancia en pagos de proveedores G-04. Sugerimos unificación para ahorrar $1.2M mensuales.",
                        action: "Unificar Pagos"
                    }
                ].map((card, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.2 }}
                        className="glass-emerald p-10 flex flex-col justify-between min-h-[400px] group hover:border-primary transition-all duration-500"
                    >
                        <div className="space-y-8">
                            <div className="w-16 h-16 border border-primary/20 flex items-center justify-center text-primary glow-emerald bg-primary/5">
                                {card.icon}
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-2xl font-black italic uppercase tracking-tighter">{card.title}</h3>
                                <p className="text-xs leading-relaxed text-primary/60 font-medium">"{card.desc}"</p>
                            </div>
                        </div>

                        <button className="flex items-center gap-4 terminal-text group-hover:gap-8 transition-all pt-10">
                            {card.action} <ChevronRight className="w-4 h-4" />
                        </button>
                    </motion.div>
                ))}
            </div>

            {/* Global Education Quote */}
            <div className="mt-32 p-16 border border-primary/10 bg-primary/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-5">
                    <BrainCircuit className="w-40 h-40" />
                </div>
                <div className="relative z-10 max-w-4xl space-y-6">
                    <Lightbulb className="w-10 h-10 mb-4" />
                    <h2 className="text-4xl font-black italic tracking-tighter leading-none uppercase">"El éxito en 2026 no es cocinar bien, es auditar bien cada centavo de tu plataforma."</h2>
                    <p className="terminal-text opacity-40 mt-6">- Central Neural Logic G-IA</p>
                </div>
            </div>
        </div>
    )
}

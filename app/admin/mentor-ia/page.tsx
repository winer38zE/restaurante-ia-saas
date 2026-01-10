"use client"

import {
    BrainCircuit,
    Database,
    ChevronRight,
    Search
} from "lucide-react"

export default function MentorIAPage() {
    return (
        <div className="min-h-screen bg-gradient-cryptify p-6 lg:p-10 font-sans text-white">
            {/* AI Hub Header */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-16">
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            Node: Neural-X
                        </div>
                    </div>
                    <h1 className="text-5xl font-bold tracking-tight">Mentor <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">IA</span></h1>
                    <p className="text-lg text-zinc-400 max-w-xl leading-relaxed">
                        Inteligencia sintética auditando tus flujos de caja en tiempo real.
                        Decisiones basadas en <span className="text-white font-medium">datos, no en intuición.</span>
                    </p>
                </div>

                <div className="glass-panel p-6 flex gap-8 border-l-4 border-l-emerald-500">
                    <div>
                        <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1">Confidence</p>
                        <p className="text-3xl font-bold text-white">98.4%</p>
                    </div>
                    <div className="w-[1px] h-full bg-white/10" />
                    <div>
                        <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1">Training Models</p>
                        <p className="text-3xl font-bold text-white">1.2B</p>
                    </div>
                </div>
            </div>

            {/* AI Insights Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {[
                    {
                        title: "Optimización de Inventario",
                        desc: "Se detectó redundancia en el stock de 'Wagyu A5'. El flujo sugiere reducir compra un 15%.",
                        impact: "High",
                        type: "Profit",
                        bg: "border-l-emerald-500"
                    },
                    {
                        title: "Fuga de Capital",
                        desc: "Insumo 'Aceite de Trufa' inconsistente con recetas. 5% de merma no justificada.",
                        impact: "Critical",
                        type: "Cost",
                        bg: "border-l-red-500"
                    },
                    {
                        title: "Oportunidad de Upselling",
                        desc: "El vino 'Barolo 2018' posee 12% más margen que la recomendación actual del mes.",
                        impact: "Medium",
                        type: "Revenue",
                        bg: "border-l-blue-500"
                    }
                ].map((item, i) => (
                    <div key={i} className={`glass-panel p-8 relative group hover:bg-white/[0.03] transition-colors border-l-4 ${item.bg}`}>
                        <div className="flex justify-between items-start mb-6">
                            <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 flex items-center gap-2">
                                <Database className="w-3 h-3" /> Gastronomic-0{i + 1}
                            </div>
                            <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${item.impact === 'Critical' ? 'bg-red-500/10 text-red-500' : 'bg-white/5 text-zinc-400'}`}>
                                {item.impact}
                            </span>
                        </div>

                        <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                        <p className="text-sm text-zinc-400 leading-relaxed mb-8 min-h-[60px]">
                            "{item.desc}"
                        </p>

                        <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-400 group-hover:gap-3 transition-all">
                            Ejecutar Plan Maestro <ChevronRight className="w-3 h-3" />
                        </button>
                    </div>
                ))}
            </div>

            {/* Footer Stats */}
            <div className="glass-panel p-12 relative overflow-hidden flex flex-col items-center justify-center text-center">
                <div className="absolute top-0 left-0 w-full h-full bg-emerald-500/5" />
                <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-emerald-500/20 blur-[100px] rounded-full" />

                <h4 className="relative z-10 text-2xl font-bold tracking-tight mb-2">Predicción de Cierre de Mes</h4>
                <p className="relative z-10 text-zinc-400 text-sm mb-6">Calculado en base al histórico de los últimos 24 meses.</p>

                <div className="relative z-10 inline-block">
                    <p className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-200 tracking-tight">$42,900,000</p>
                    <div className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 flex items-center justify-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        Accuracy: ±2%
                    </div>
                </div>
            </div>
        </div>
    )
}

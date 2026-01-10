"use client"

import {
    BrainCircuit,
    MessageSquare,
    Target,
    Zap,
    ArrowUpRight,
    ShieldCheck,
    ChevronRight,
    Database
} from "lucide-react"

export default function MentorIAPage() {
    return (
        <div className="space-y-16">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 border-b border-white/5 pb-10">
                <div className="space-y-4">
                    <div className="flex items-center gap-3 text-primary mb-2">
                        <BrainCircuit className="w-6 h-6" />
                        <span className="text-[10px] font-black uppercase tracking-[0.4em]">Neural Expansion Hub</span>
                    </div>
                    <h1 className="text-7xl font-black tracking-tighter uppercase italic leading-none">Mentor <span className="text-secondary/20">IA</span></h1>
                    <p className="text-xl text-white/40 font-medium max-w-2xl">Traduciendo datos complejos en lenguaje de éxito empresarial.</p>
                </div>
                <div className="glass-card flex gap-10 border-primary/20 bg-primary/5 py-4 px-8">
                    <div className="text-center">
                        <p className="text-[8px] font-black uppercase tracking-widest text-primary/40 mb-1">Confidence</p>
                        <p className="text-xl font-black italic">98.4%</p>
                    </div>
                    <div className="w-[1px] h-10 bg-white/10" />
                    <div className="text-center">
                        <p className="text-[8px] font-black uppercase tracking-widest text-primary/40 mb-1">Status</p>
                        <p className="text-xl font-black italic">Ready</p>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {[
                    {
                        title: "Auditoría de Insumos",
                        desc: "Doña Juana, su ganancia real hoy fue del 40%. Sin embargo, detectamos que el costo de la carne subió. Para ser empresaria, mantenga el costo de insumos bajo los $2.5M semanales.",
                        type: "Estratégico",
                        icon: <Target />
                    },
                    {
                        title: "Optimización de Carta",
                        desc: "El vino 'Cosecha Elite' tiene un margen del 70% pero baja rotación. Sugiéralo como acompañamiento del plato estrella para maximizar utilidad inmediata.",
                        type: "Crecimiento",
                        icon: <Zap />
                    },
                    {
                        title: "Fuga de Capital",
                        desc: "Se detectó un excedente de inventario en perecederos del 12%. Ajuste sus pedidos de mañana para evitar pérdidas por merma.",
                        type: "Control",
                        icon: <ShieldCheck />
                    }
                ].map((card, i) => (
                    <div key={i} className="glass-card flex flex-col justify-between h-[450px] group hover:border-primary transition-all duration-500">
                        <div className="space-y-8">
                            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/20 group-hover:text-primary transition-all group-hover:glow-emerald">
                                {card.icon}
                            </div>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center italic">
                                    <h3 className="text-2xl font-black italic uppercase tracking-tighter">{card.title}</h3>
                                    <span className="text-[8px] font-black uppercase tracking-widest opacity-20 px-2 py-1 border border-white/10 rounded-full">{card.type}</span>
                                </div>
                                <p className="text-sm font-medium leading-relaxed italic text-white/60">
                                    "{card.desc}"
                                </p>
                            </div>
                        </div>
                        <button className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-primary group-hover:gap-8 transition-all">
                            Implementar Mejora <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                ))}
            </div>

            {/* Terminal Footer */}
            <div className="p-8 border border-white/5 bg-white/2 rounded-2xl flex items-center justify-between opacity-40">
                <div className="flex items-center gap-6">
                    <Database className="w-5 h-5 text-primary" />
                    <div className="space-y-1">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 leading-none">Conectado a Groq_Engine</p>
                        <p className="text-[10px] font-bold text-primary italic leading-none">Uplink Stable // Latency: 14ms</p>
                    </div>
                </div>
                <div className="text-[10px] font-bold uppercase tracking-widest">
                    Audit_V_2026_Cycle_04
                </div>
            </div>
        </div>
    )
}

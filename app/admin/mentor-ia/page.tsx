"use client"

import {
    Cpu,
    BrainCircuit,
    Fingerprint,
    Zap,
    AlertTriangle,
    ChevronRight,
    Database
} from "lucide-react"

export default function MentorIAPage() {
    return (
        <div className="max-w-[1200px] mx-auto space-y-16 py-10 selection:bg-primary/20">
            {/* AI Hub Header */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10">
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 glass-neon rounded-full flex items-center justify-center text-primary glow-emerald">
                            <BrainCircuit className="w-6 h-6" />
                        </div>
                        <span className="cyber-terminal">Node: Neural-X</span>
                    </div>
                    <h1 className="text-6xl font-black tracking-tighter uppercase italic">Mentor <span className="text-primary italic">IA</span></h1>
                    <p className="text-xl text-secondary font-medium max-w-xl">Inteligencia sintética audicionando tus flujos de caja en tiempo real. Decisiones basadas en <span className="text-white italic">datos, no en intuición.</span></p>
                </div>
                <div className="glass-luxury p-8 border-white/5 border-l-4 border-l-primary flex gap-10">
                    <div>
                        <p className="text-[8px] font-bold text-secondary uppercase tracking-[0.4em] mb-2">Confidence</p>
                        <p className="text-3xl font-black">98.4%</p>
                    </div>
                    <div className="w-[1px] h-full bg-white/5" />
                    <div>
                        <p className="text-[8px] font-bold text-secondary uppercase tracking-[0.4em] mb-2">Training Data</p>
                        <p className="text-3xl font-black">1.2B</p>
                    </div>
                </div>
            </div>

            {/* Cyber AI Insights Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                    {
                        title: "Optimización de Inventario",
                        desc: "Se detectó redundancia en el stock de 'Wagyu A5'. El flujo sugiere reducir compra un 15%.",
                        impact: "High",
                        type: "Profit"
                    },
                    {
                        title: "Fuga de Capital",
                        desc: "Insumo 'Aceite de Trufa' inconsistente con recetas. 5% de merma no justificada.",
                        impact: "Critical",
                        type: "Cost"
                    },
                    {
                        title: "Oportunidad de Upselling",
                        desc: "El vino 'Barolo 2018' posee 12% más margen que la recomendación actual del mes.",
                        impact: "Med",
                        type: "Revenue"
                    }
                ].map((item, i) => (
                    <div key={i} className="premium-card relative group border-white/5 hover:border-primary/20 transition-all duration-500">
                        <div className="absolute top-4 right-4 text-[8px] font-black uppercase tracking-widest text-primary/40 flex items-center gap-1">
                            <Database className="w-2 h-2" /> Sector: Gastronomic-0{i + 1}
                        </div>
                        <p className={`text-[8px] font-black uppercase tracking-widest mb-4 inline-block px-2 py-0.5 border rounded-sm ${item.impact === 'Critical' ? 'border-red-500/50 text-red-500 bg-red-500/5' : 'border-primary/50 text-primary bg-primary/5'}`}>
                            {item.impact} Impact
                        </p>
                        <h3 className="text-xl font-bold mb-4 tracking-tight uppercase italic">{item.title}</h3>
                        <p className="text-sm text-secondary leading-relaxed font-medium mb-8">
                            "{item.desc}"
                        </p>
                        <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary group-hover:gap-4 transition-all">
                            Ejecutar Plan Maestro <ChevronRight className="w-3 h-3" />
                        </button>
                    </div>
                ))}
            </div>

            {/* Futuristic Stats Footer */}
            <div className="premium-card border-none bg-primary/5 p-12 overflow-hidden relative">
                <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-[100px]" />
                <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-10">
                    <div className="space-y-2">
                        <h4 className="text-3xl font-black tracking-tighter uppercase italic">Predicción de Cierre de Mes</h4>
                        <p className="text-sm text-secondary font-medium">Basado en el histórico de los últimos 24 meses y tendencias locales.</p>
                    </div>
                    <div className="text-center lg:text-right">
                        <p className="text-5xl font-black text-primary glow-emerald mb-2 italic">$42,900,000 COP</p>
                        <span className="cyber-terminal">Accuracy: ±2%</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

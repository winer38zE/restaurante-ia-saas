"use client"

import {
    TrendingUp,
    Users,
    ShoppingBag,
    Clock,
    ArrowUpRight,
    Plus,
    Utensils,
    ChefHat
} from "lucide-react"

const stats = [
    { label: "Ventas Totales", value: "$12,450", change: "+14.5%", icon: TrendingUp, color: "text-emerald-400", bg: "bg-emerald-500/10" },
    { label: "Clientes Nuevos", value: "84", change: "+5.2%", icon: Users, color: "text-blue-400", bg: "bg-blue-500/10" },
    { label: "Pedidos Hoy", value: "45", change: "+12.1%", icon: ShoppingBag, color: "text-amber-400", bg: "bg-amber-500/10" },
    { label: "Tiempo Promedio", value: "24m", change: "-2.5%", icon: Clock, color: "text-rose-400", bg: "bg-rose-500/10" },
]

export default function DashboardPage() {
    return (
        <div className="space-y-12">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-4xl font-bold tracking-tight text-white mb-2">Bienvenido, <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Resort del Sol</span></h1>
                    <p className="text-gray-400 text-sm">Panel de control operativo en tiempo real.</p>
                </div>
                <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/5 border border-emerald-500/10">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-widest text-emerald-500">Sistema Operativo</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                    <div key={i} className="glass-panel p-6 flex flex-col justify-between group hover:bg-white/5 transition-all duration-300">
                        <div className="flex items-center justify-between mb-4">
                            <div className={`p-3 rounded-xl ${stat.bg} ${stat.color} border border-white/5`}>
                                <stat.icon className="h-5 w-5" />
                            </div>
                            <div className="flex items-center gap-1 text-emerald-400 font-bold text-xs bg-emerald-500/10 px-2 py-1 rounded">
                                <ArrowUpRight className="h-3 w-3" />
                                {stat.change}
                            </div>
                        </div>
                        <div>
                            <p className="text-xs font-medium uppercase tracking-widest text-gray-500 mb-1">{stat.label}</p>
                            <h2 className="text-3xl font-bold text-white tracking-tight">{stat.value}</h2>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 glass-panel p-8">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-lg font-bold text-white flex items-center gap-2">
                            <ChefHat className="w-5 h-5 text-emerald-400" />
                            Actividad Reciente
                        </h3>
                        <button className="text-xs font-bold text-emerald-400 uppercase tracking-widest hover:text-emerald-300 transition-colors">Ver Todo</button>
                    </div>
                    <div className="space-y-4">
                        {[1, 2, 3, 4].map((_, i) => (
                            <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-colors group">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center font-bold text-gray-400 text-sm group-hover:text-emerald-400 transition-colors">
                                        #{1020 + i}
                                    </div>
                                    <div>
                                        <p className="font-bold text-white text-sm">Hamburguesa Wagyu - Mesa 4</p>
                                        <p className="text-xs text-gray-500">Hace 12 minutos</p>
                                    </div>
                                </div>
                                <div className="px-3 py-1 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-bold uppercase tracking-wider border border-emerald-500/20">
                                    Completado
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="glass-panel p-8 relative overflow-hidden group flex flex-col justify-center text-center">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                    <div className="relative z-10">
                        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center text-emerald-400 shadow-lg shadow-emerald-500/10">
                            <Utensils className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-white">Nuevo Plato</h3>
                        <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                            Utiliza nuestra IA generativa para crear descripciones y fotos de menú ultra-realistas.
                        </p>
                        <button className="w-full py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-sm shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:scale-105 transition-all duration-300">
                            Generar con IA
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

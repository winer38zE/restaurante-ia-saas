"use client"

import {
    TrendingUp,
    Users,
    ShoppingBag,
    Clock,
    ArrowUpRight,
    Plus
} from "lucide-react"

const stats = [
    { label: "Ventas Totales", value: "$12,450", change: "+14.5%", icon: TrendingUp, color: "text-blue-500", bg: "bg-blue-500/10" },
    { label: "Clientes Nuevos", value: "84", change: "+5.2%", icon: Users, color: "text-purple-500", bg: "bg-purple-500/10" },
    { label: "Pedidos Hoy", value: "45", change: "+12.1%", icon: ShoppingBag, color: "text-orange-500", bg: "bg-orange-500/10" },
    { label: "Tiempo Promedio", value: "24m", change: "-2.5%", icon: Clock, color: "text-emerald-500", bg: "bg-emerald-500/10" },
]

export default function DashboardPage() {
    return (
        <div className="space-y-10">
            <div>
                <h1 className="text-3xl font-extrabold tracking-tight">Bienvenido de nuevo, Resort del Sol 👋</h1>
                <p className="text-foreground/40 mt-1">Hoy es un gran día para optimizar tu servicio.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                    <div key={i} className="p-6 rounded-[2rem] bg-card border border-border flex flex-col justify-between group hover:border-primary/30 transition-all hover:translate-y-[-2px]">
                        <div className="flex items-center justify-between mb-4">
                            <div className={`p-4 rounded-2xl ${stat.bg} ${stat.color}`}>
                                <stat.icon className="h-6 w-6" />
                            </div>
                            <div className="flex items-center gap-1 text-emerald-500 font-bold text-sm bg-emerald-500/10 px-2 py-1 rounded-full">
                                <ArrowUpRight className="h-3 w-3" />
                                {stat.change}
                            </div>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-foreground/40">{stat.label}</p>
                            <h2 className="text-3xl font-black mt-1">{stat.value}</h2>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 p-8 rounded-[2rem] bg-card border border-border">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-xl font-bold">Actividad Reciente</h3>
                        <button className="text-sm font-bold text-primary hover:underline">Ver Todo</button>
                    </div>
                    <div className="space-y-6">
                        {[1, 2, 3, 4].map((_, i) => (
                            <div key={i} className="flex items-center justify-between p-4 rounded-2xl hover:bg-secondary/50 transition-colors border border-transparent hover:border-border">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center font-bold">
                                        #{1020 + i}
                                    </div>
                                    <div>
                                        <p className="font-bold">Hamburguesa Wagyu - Mesa 4</p>
                                        <p className="text-sm text-foreground/40">Hace 12 minutos</p>
                                    </div>
                                </div>
                                <div className="px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-bold uppercase tracking-wider">
                                    Completado
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="p-8 rounded-[2rem] bg-primary text-white shadow-2xl shadow-primary/30 relative overflow-hidden group">
                    <Plus className="absolute -bottom-10 -right-10 w-48 h-48 opacity-10 group-hover:scale-110 transition-transform duration-500" />
                    <div className="relative z-10">
                        <h3 className="text-2xl font-black mb-4 leading-tight">¿Deseas añadir un nuevo plato?</h3>
                        <p className="text-white/70 mb-8 leading-relaxed">Usa nuestra IA para generar nombres descriptivos e imágenes realistas para tu menú.</p>
                        <button className="w-full h-12 bg-white text-primary rounded-xl font-bold hover:scale-[1.02] transition-transform active:scale-95 shadow-xl shadow-black/10">
                            Generar con IA
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

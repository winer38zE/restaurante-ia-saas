"use client"

import { useState, useEffect } from "react"
import {
    TrendingUp,
    Users,
    ShoppingBag,
    Clock,
    DollarSign,
    Star,
    Flame,
    ChefHat,
    Sparkles,
    TrendingDown,
    Activity,
    Award,
    Calendar,
    Utensils
} from "lucide-react"

export default function DashboardPage() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    const stats = [
        { 
            label: "Ingresos Hoy", 
            value: "$12,450", 
            change: "+14.5%", 
            icon: DollarSign,
            trend: "up",
            color: "from-orange-500 to-amber-500"
        },
        { 
            label: "Clientes", 
            value: "84", 
            change: "+5.2%", 
            icon: Users,
            trend: "up",
            color: "from-emerald-500 to-teal-500"
        },
        { 
            label: "Pedidos", 
            value: "45", 
            change: "+12.1%", 
            icon: ShoppingBag,
            trend: "up",
            color: "from-purple-500 to-pink-500"
        },
        { 
            label: "Tiempo Medio", 
            value: "24min", 
            change: "-2.5%", 
            icon: Clock,
            trend: "down",
            color: "from-blue-500 to-cyan-500"
        },
    ]

    const recentOrders = [
        { id: "1024", dish: "Risotto de Trufa Negra", table: "12", price: "$45", status: "preparing", time: "5 min" },
        { id: "1023", dish: "Salmón a la Parrilla Premium", table: "08", price: "$38", status: "ready", time: "2 min" },
        { id: "1022", dish: "Pasta Carbonara Artesanal", table: "05", price: "$32", status: "delivered", time: "0 min" },
        { id: "1021", dish: "Hamburguesa Wagyu Deluxe", table: "03", price: "$42", status: "delivered", time: "0 min" },
    ]

    const topDishes = [
        { name: "Risotto de Trufa", sales: 18, revenue: "$810", trend: "+24%" },
        { name: "Salmón Premium", sales: 15, revenue: "$570", trend: "+18%" },
        { name: "Hamburguesa Wagyu", sales: 12, revenue: "$504", trend: "+12%" }
    ]

    return (
        <div className="min-h-screen p-4 md:p-8">
            {/* Animated Background */}
            <div className="fixed inset-0 -z-10">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-[128px] animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-emerald-500/20 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            {/* Header */}
            <div className="mb-8 animate-in fade-in slide-in-from-top duration-700">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-2xl shadow-orange-500/50 animate-pulse">
                                <Flame className="w-7 h-7 text-white" />
                            </div>
                            <div>
                                <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight">
                                    Dashboard <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent">Ejecutivo</span>
                                </h1>
                                <p className="text-sm text-gray-400 font-medium">Resort del Sol • En Vivo</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-xl">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Sistema Online</span>
                        </div>
                        <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl">
                            <span className="text-xs font-bold text-gray-300 uppercase tracking-wider">
                                <Calendar className="w-3 h-3 inline mr-1" />
                                {new Date().toLocaleDateString('es-ES', { month: 'short', day: 'numeric' })}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
                {stats.map((stat, i) => {
                    const Icon = stat.icon
                    return (
                        <div 
                            key={i}
                            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-xl p-6 hover:border-white/30 transition-all duration-500 hover:scale-105 animate-in fade-in slide-in-from-bottom"
                            style={{ animationDelay: `${i * 100}ms` }}
                        >
                            {/* Gradient Background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
                            
                            {/* Content */}
                            <div className="relative z-10">
                                <div className="flex items-start justify-between mb-4">
                                    <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color} shadow-2xl`}>
                                        <Icon className="w-6 h-6 text-white" />
                                    </div>
                                    <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-bold ${
                                        stat.trend === 'up' 
                                            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' 
                                            : 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                                    }`}>
                                        {stat.trend === 'up' ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                                        {stat.change}
                                    </div>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">{stat.label}</p>
                                    <p className="text-3xl md:text-4xl font-black text-white">{stat.value}</p>
                                </div>
                            </div>

                            {/* Shine Effect */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* Main Content */}
            <div className="grid lg:grid-cols-3 gap-6">
                {/* Orders List */}
                <div className="lg:col-span-2 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-xl p-6 md:p-8 animate-in fade-in slide-in-from-left duration-700">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-xl shadow-orange-500/50">
                                <ChefHat className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h2 className="text-xl font-black text-white">Órdenes en Vivo</h2>
                                <p className="text-xs text-gray-400">Actualización en tiempo real</p>
                            </div>
                        </div>
                        <button className="px-4 py-2 rounded-xl bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider hover:bg-orange-500/20 transition-all">
                            Ver Todas
                        </button>
                    </div>

                    <div className="space-y-3">
                        {recentOrders.map((order, i) => (
                            <div 
                                key={i}
                                className="group flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                            >
                                <div className="flex items-center gap-4 flex-1">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center border border-purple-500/30 font-black text-purple-400 group-hover:scale-110 transition-transform">
                                        #{order.id}
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-bold text-white mb-1 group-hover:text-orange-400 transition-colors">{order.dish}</p>
                                        <div className="flex items-center gap-3 text-xs text-gray-400">
                                            <span>Mesa {order.table}</span>
                                            <span>•</span>
                                            <span className="font-bold text-amber-400">{order.price}</span>
                                            <span>•</span>
                                            <span>{order.time}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={`px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${
                                    order.status === 'delivered' 
                                        ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
                                        : order.status === 'ready'
                                        ? 'bg-amber-500/20 text-amber-400 border-amber-500/30'
                                        : 'bg-orange-500/20 text-orange-400 border-orange-500/30'
                                }`}>
                                    {order.status === 'delivered' ? '✓ Entregado' : order.status === 'ready' ? '⚡ Listo' : '🔥 Cocinando'}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    {/* AI Generator */}
                    <div className="rounded-2xl bg-gradient-to-br from-orange-500/20 via-amber-500/20 to-yellow-500/20 border border-orange-500/30 backdrop-blur-xl p-6 hover:border-orange-500/50 transition-all duration-500 animate-in fade-in slide-in-from-right">
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-2xl shadow-orange-500/50 animate-pulse">
                                <Sparkles className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-lg font-black text-white mb-2">Generador IA</h3>
                            <p className="text-sm text-gray-300 mb-6">Crea descripciones gourmet automáticamente con inteligencia artificial</p>
                            <button className="w-full py-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-sm shadow-2xl shadow-orange-500/50 hover:shadow-orange-500/70 hover:scale-105 transition-all duration-300">
                                Generar Menú IA
                            </button>
                        </div>
                    </div>

                    {/* Top Dishes */}
                    <div className="rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-xl p-6 animate-in fade-in slide-in-from-right" style={{ animationDelay: '200ms' }}>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-500 flex items-center justify-center shadow-xl">
                                <Award className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h3 className="font-black text-white">Top Platos</h3>
                                <p className="text-xs text-gray-400">Más vendidos hoy</p>
                            </div>
                        </div>
                        
                        <div className="space-y-3">
                            {topDishes.map((dish, i) => (
                                <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                                    <div className="flex items-center gap-3 flex-1">
                                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500/30 to-yellow-500/30 flex items-center justify-center font-black text-amber-400 text-sm border border-amber-500/30">
                                            {i + 1}
                                        </div>
                                        <div className="flex-1">
                                            <p className="font-bold text-white text-sm">{dish.name}</p>
                                            <p className="text-xs text-gray-400">{dish.sales} pedidos • {dish.revenue}</p>
                                        </div>
                                    </div>
                                    <span className="text-emerald-400 text-xs font-bold">{dish.trend}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 backdrop-blur-xl p-6 animate-in fade-in slide-in-from-right" style={{ animationDelay: '400ms' }}>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-xl">
                                <Activity className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h3 className="font-black text-white">Resumen</h3>
                                <p className="text-xs text-gray-400">Estadísticas del día</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            <div className="p-3 rounded-xl bg-white/10 border border-white/10">
                                <p className="text-2xl font-black text-white">95%</p>
                                <p className="text-xs text-gray-400">Satisfacción</p>
                            </div>
                            <div className="p-3 rounded-xl bg-white/10 border border-white/10">
                                <p className="text-2xl font-black text-white">4.8</p>
                                <p className="text-xs text-gray-400">Rating ⭐</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes slide-in-from-top {
                    from { transform: translateY(-20px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
                @keyframes slide-in-from-bottom {
                    from { transform: translateY(20px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
                @keyframes slide-in-from-left {
                    from { transform: translateX(-20px); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
                @keyframes slide-in-from-right {
                    from { transform: translateX(20px); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
                .animate-in {
                    animation-fill-mode: both;
                }
                .fade-in {
                    animation-name: fade-in;
                }
                .slide-in-from-top {
                    animation-name: slide-in-from-top;
                }
                .slide-in-from-bottom {
                    animation-name: slide-in-from-bottom;
                }
                .slide-in-from-left {
                    animation-name: slide-in-from-left;
                }
                .slide-in-from-right {
                    animation-name: slide-in-from-right;
                }
                .duration-300 {
                    animation-duration: 300ms;
                }
                .duration-500 {
                    animation-duration: 500ms;
                }
                .duration-700 {
                    animation-duration: 700ms;
                }
            `}</style>
        </div>
    )
}

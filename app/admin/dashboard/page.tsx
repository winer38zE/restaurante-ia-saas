"use client"

import {
    TrendingUp,
    Users,
    ShoppingBag,
    Clock,
    ArrowUpRight,
    Utensils,
    ChefHat,
    DollarSign,
    Star,
    Flame,
} from "lucide-react"

const stats = [
    { 
        label: "Ventas Totales", 
        value: "$12,450", 
        change: "+14.5%", 
        icon: DollarSign, 
        color: "text-amber-400", 
        bg: "bg-gradient-to-br from-amber-500/20 to-orange-500/20",
        borderColor: "border-amber-500/30"
    },
    { 
        label: "Clientes Nuevos", 
        value: "84", 
        change: "+5.2%", 
        icon: Users, 
        color: "text-emerald-400", 
        bg: "bg-gradient-to-br from-emerald-500/20 to-teal-500/20",
        borderColor: "border-emerald-500/30"
    },
    { 
        label: "Pedidos Hoy", 
        value: "45", 
        change: "+12.1%", 
        icon: ShoppingBag, 
        color: "text-orange-400", 
        bg: "bg-gradient-to-br from-orange-500/20 to-red-500/20",
        borderColor: "border-orange-500/30"
    },
    { 
        label: "Tiempo Promedio", 
        value: "24m", 
        change: "-2.5%", 
        icon: Clock, 
        color: "text-cyan-400", 
        bg: "bg-gradient-to-br from-cyan-500/20 to-blue-500/20",
        borderColor: "border-cyan-500/30"
    },
]

const recentOrders = [
    { id: "1024", item: "Risotto de Trufa Negra", table: "12", time: "5 min", price: "$45", status: "preparing" },
    { id: "1023", item: "Salmón a la Parrilla", table: "8", time: "8 min", price: "$38", status: "ready" },
    { id: "1022", item: "Pasta Carbonara Premium", table: "5", time: "12 min", price: "$32", status: "completed" },
    { id: "1021", item: "Hamburguesa Wagyu", table: "3", time: "15 min", price: "$42", status: "completed" },
]

export default function DashboardPage() {
    return (
        <div className="space-y-8 animate-fadeIn">
            {/* Header Section - Warm Welcome */}
            <div className="relative">
                {/* Background glow effect */}
                <div className="absolute -top-20 -left-20 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse-slow" />
                <div className="absolute -top-10 -right-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse-slow animation-delay-400" />
                
                <div className="relative flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                    <div>
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-lg shadow-orange-500/30">
                                <Flame className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h1 className="text-3xl md:text-4xl font-black tracking-tight text-white">
                                    Bienvenido, <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400">Resort del Sol</span>
                                </h1>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm ml-15">Dashboard Gastronómico • En tiempo real</p>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 backdrop-blur-sm">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-lg shadow-emerald-500/50" />
                        <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Sistema Activo</span>
                    </div>
                </div>
            </div>

            {/* Stats Grid - Restaurant Colors */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, i) => {
                    const IconComponent = stat.icon
                    const isNegative = stat.change.startsWith('-')
                    return (
                        <div 
                            key={i} 
                            className={`relative overflow-hidden rounded-2xl p-6 border ${stat.borderColor} backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-2xl group cursor-pointer`}
                            style={{
                                background: `linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 100%)`,
                            }}
                        >
                            {/* Gradient Background */}
                            <div className={`absolute inset-0 ${stat.bg} opacity-50 group-hover:opacity-70 transition-opacity`} />
                            
                            {/* Content */}
                            <div className="relative z-10">
                                <div className="flex items-center justify-between mb-4">
                                    <div className={`p-3 rounded-xl ${stat.bg} ${stat.color} border ${stat.borderColor} shadow-lg`}>
                                        <IconComponent className="h-6 w-6" />
                                    </div>
                                    <div className={`flex items-center gap-1 ${isNegative ? 'text-rose-400 bg-rose-500/10' : 'text-emerald-400 bg-emerald-500/10'} font-bold text-xs px-3 py-1.5 rounded-full border ${isNegative ? 'border-rose-500/20' : 'border-emerald-500/20'}`}>
                                        <ArrowUpRight className={`h-3 w-3 ${isNegative ? 'rotate-90' : ''}`} />
                                        {stat.change}
                                    </div>
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">{stat.label}</p>
                                    <h2 className="text-4xl font-black text-white tracking-tight">{stat.value}</h2>
                                </div>
                            </div>

                            {/* Hover shine effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        </div>
                    )
                })}
            </div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-3 gap-6">
                {/* Recent Orders - Premium Look */}
                <div className="lg:col-span-2 relative overflow-hidden rounded-2xl border border-white/10 backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/[0.02] p-8 hover:border-white/20 transition-all">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-lg shadow-orange-500/30">
                                <ChefHat className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-black text-white">Órdenes Activas</h3>
                                <p className="text-xs text-gray-500">Gestión en tiempo real</p>
                            </div>
                        </div>
                        <button className="text-xs font-bold text-orange-400 uppercase tracking-widest hover:text-orange-300 transition-colors px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 hover:bg-orange-500/20">
                            Ver Todas
                        </button>
                    </div>

                    {/* Orders List */}
                    <div className="space-y-3">
                        {recentOrders.map((order, i) => (
                            <div 
                                key={i} 
                                className="group relative overflow-hidden flex items-center justify-between p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.08] hover:border-white/10 transition-all cursor-pointer"
                            >
                                <div className="flex items-center gap-4 flex-1">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-amber-500/20 flex items-center justify-center font-black text-orange-400 text-sm border border-orange-500/30 group-hover:scale-110 transition-transform">
                                        #{order.id}
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-bold text-white text-sm group-hover:text-orange-400 transition-colors">{order.item}</p>
                                        <div className="flex items-center gap-3 mt-1">
                                            <p className="text-xs text-gray-500">Mesa {order.table}</p>
                                            <span className="text-gray-600">•</span>
                                            <p className="text-xs text-gray-500">{order.time}</p>
                                            <span className="text-gray-600">•</span>
                                            <p className="text-xs font-bold text-amber-400">{order.price}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={`px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${
                                    order.status === 'completed' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' :
                                    order.status === 'ready' ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' :
                                    'bg-orange-500/10 text-orange-400 border-orange-500/20'
                                }`}>
                                    {order.status === 'completed' ? '✓ Entregado' : 
                                     order.status === 'ready' ? '⚡ Listo' : 
                                     '🔥 Preparando'}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Actions - Restaurant Theme */}
                <div className="space-y-6">
                    {/* AI Menu Generator */}
                    <div className="relative overflow-hidden rounded-2xl border border-orange-500/20 backdrop-blur-sm bg-gradient-to-br from-orange-500/10 via-amber-500/10 to-red-500/10 p-6 hover:border-orange-500/30 transition-all group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
                        
                        <div className="relative z-10 text-center">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-2xl shadow-orange-500/30 group-hover:scale-110 transition-transform">
                                <Utensils className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-lg font-black mb-2 text-white">Crear Plato con IA</h3>
                            <p className="text-gray-400 text-xs mb-6 leading-relaxed">
                                Genera descripciones gourmet y sugerencias de maridaje automáticamente
                            </p>
                            <button className="w-full py-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-sm shadow-2xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105 transition-all duration-300 border border-orange-400/20">
                                Generar Menú
                            </button>
                        </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="relative overflow-hidden rounded-2xl border border-amber-500/20 backdrop-blur-sm bg-gradient-to-br from-amber-500/10 to-yellow-500/10 p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-500 flex items-center justify-center shadow-lg shadow-amber-500/30">
                                <Star className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h4 className="font-black text-white text-sm">Platos Destacados</h4>
                                <p className="text-xs text-gray-500">Los más vendidos hoy</p>
                            </div>
                        </div>
                        
                        <div className="space-y-3">
                            {[
                                { name: "Risotto Trufa", sales: 18, trend: "+24%" },
                                { name: "Salmón Parrilla", sales: 15, trend: "+18%" },
                                { name: "Pasta Carbonara", sales: 12, trend: "+12%" }
                            ].map((dish, i) => (
                                <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-all">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 font-bold text-xs">
                                            #{i + 1}
                                        </div>
                                        <div>
                                            <p className="font-bold text-white text-xs">{dish.name}</p>
                                            <p className="text-[10px] text-gray-500">{dish.sales} ventas</p>
                                        </div>
                                    </div>
                                    <span className="text-emerald-400 text-xs font-bold">{dish.trend}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

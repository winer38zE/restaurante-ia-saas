"use client"

import { useState } from "react"
import {
    ShoppingBag,
    ChevronLeft,
    Search,
    Plus,
    Info,
    BarChart3,
    ChevronRight,
    Star,
    Flame
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

const categories = ["Entradas", "Principales", "Postres", "Bebidas"]
const menuItems = [
    { id: 1, name: "Tacos de Ribeye", price: 15.00, desc: "Costilla de res premium con tortilla artesanal y salsa tatemada.", cat: "Entradas", popular: true, image: "/hero.png" },
    { id: 2, name: "Salmón al Eneldo", price: 28.00, desc: "Salmón fresco a la plancha con costra de hierbas y puré trufado.", cat: "Principales", popular: false, image: "/hero.png" },
    { id: 3, name: "Volcán de Chocolate", price: 12.00, desc: "Bizcocho tibio de chocolate amargo con centro líquido.", cat: "Postres", popular: true, image: "/hero.png" },
]

export default function PublicMenuPage({ params }: { params: { slug: string } }) {
    const [cartCount, setCartCount] = useState(0)
    const [activeCategory, setActiveCategory] = useState("Principales")
    const [showHistory, setShowHistory] = useState(false)

    const history = [
        { date: "Hoy", items: "Hamburguesa Wagyu", total: 24.50 },
        { date: "Ayer", items: "Pizza Di'Ablo", total: 18.00 },
        { date: "3 Ene", items: "Pasta Carbonara", total: 16.50 },
    ]

    return (
        <div className="min-h-screen bg-background text-foreground pb-24 selection:bg-primary/30 font-sans">
            {/* Header Sticky */}
            <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-white/5 px-6 py-4 flex items-center justify-between shadow-lg shadow-black/5">
                <div className="flex items-center gap-3">
                    <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                        <ChevronLeft className="w-5 h-5 text-zinc-400" />
                    </button>
                    <div>
                        <h1 className="font-bold text-lg leading-none tracking-tight text-white">Resort del Sol</h1>
                        <div className="flex items-center gap-1.5 mt-1">
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            <p className="text-[10px] text-emerald-500/80 uppercase tracking-widest font-black">Abierto</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setShowHistory(!showHistory)}
                        className={cn(
                            "w-10 h-10 rounded-full flex items-center justify-center transition-all border",
                            showHistory 
                                ? "bg-emerald-500 border-emerald-500 text-black shadow-[0_0_15px_rgba(16,185,129,0.4)]" 
                                : "bg-white/5 border-white/10 text-zinc-400 hover:bg-white/10"
                        )}
                    >
                        <BarChart3 className="w-5 h-5" />
                    </button>
                    <div className="relative group cursor-pointer">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-900/20 group-hover:scale-105 transition-transform">
                            <ShoppingBag className="w-5 h-5 text-white" />
                        </div>
                        {cartCount > 0 && (
                            <span className="absolute -top-1 -right-1 w-5 h-5 bg-white text-black text-[10px] flex items-center justify-center rounded-full font-black border-2 border-background">
                                {cartCount}
                            </span>
                        )}
                    </div>
                </div>
            </div>

            <AnimatePresence mode="wait">
                {showHistory ? (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="p-6 space-y-6"
                    >
                        <div className="p-8 rounded-[2rem] bg-gradient-to-br from-emerald-600 to-teal-800 text-white overflow-hidden relative shadow-2xl shadow-emerald-900/50 border border-white/10">
                            <div className="relative z-10">
                                <p className="text-emerald-100/60 text-xs font-bold uppercase tracking-widest mb-2">Tu Estatus</p>
                                <h2 className="text-3xl font-black mb-4 tracking-tighter">¡Nivel Oro!</h2>
                                <p className="text-sm text-emerald-50/90 leading-relaxed font-medium max-w-[80%]">
                                    Has desbloqueado el postre secreto del chef. Pídelo hoy.
                                </p>
                            </div>
                            <Star className="absolute -bottom-6 -right-6 w-40 h-40 text-black/10 rotate-12" />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-6 rounded-[2rem] bg-zinc-900/50 border border-white/5">
                                <p className="text-[10px] text-zinc-500 font-black uppercase tracking-widest mb-1">Total Gastado</p>
                                <h4 className="text-2xl font-black text-white">$154k</h4>
                            </div>
                            <div className="p-6 rounded-[2rem] bg-zinc-900/50 border border-white/5">
                                <p className="text-[10px] text-zinc-500 font-black uppercase tracking-widest mb-1">Visitas</p>
                                <h4 className="text-2xl font-black text-emerald-400">12</h4>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-6 px-2">Historial Reciente</h3>
                            <div className="space-y-3">
                                {history.map((h, i) => (
                                    <div key={i} className="flex justify-between items-center p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                                        <div>
                                            <p className="font-bold text-white text-sm">{h.items}</p>
                                            <p className="text-[11px] text-zinc-500 mt-0.5">{h.date}</p>
                                        </div>
                                        <span className="font-bold text-sm text-emerald-400">${h.total.toFixed(2)}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {/* Hero Section */}
                        <div className="px-6 py-8">
                            <div className="h-56 rounded-[2.5rem] bg-zinc-900/80 relative overflow-hidden flex items-end p-8 cursor-pointer border border-white/5 group">
                                <img src="/hero.png" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" alt="Hero" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                                
                                <div className="relative z-10 w-full">
                                    <div className="flex justify-between items-end">
                                        <div>
                                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 mb-3">
                                                <Flame className="w-3 h-3 text-emerald-400 fill-emerald-400" />
                                                <span className="text-[10px] font-bold text-emerald-300 uppercase tracking-wider">Recomendado IA</span>
                                            </div>
                                            <h2 className="text-3xl font-black text-white italic tracking-tighter">Ribeye A5</h2>
                                        </div>
                                        <button className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-white/20">
                                            <Plus className="w-6 h-6" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Categories */}
                        <div className="flex gap-3 overflow-x-auto px-6 mb-8 no-scrollbar pb-2">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`whitespace-nowrap px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                                        activeCategory === cat 
                                        ? "bg-emerald-500 text-black shadow-lg shadow-emerald-500/20 scale-105" 
                                        : "bg-zinc-900 text-zinc-400 border border-white/5 hover:bg-zinc-800"
                                    }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        {/* Menu Items */}
                        <div className="px-6 space-y-4">
                            <div className="flex items-center justify-between mb-2 px-1">
                                <h3 className="text-xl font-bold text-white tracking-tight">{activeCategory}</h3>
                                <div className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center border border-white/5">
                                    <Search className="w-4 h-4 text-zinc-500" />
                                </div>
                            </div>

                            {menuItems.map((item) => (
                                <motion.div 
                                    key={item.id} 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="p-5 rounded-[2rem] bg-zinc-900/40 border border-white/5 flex gap-5 hover:bg-zinc-900/60 transition-colors group"
                                >
                                    <div className="w-24 h-24 rounded-2xl bg-zinc-800 relative overflow-hidden flex-shrink-0">
                                        <img src="/hero.png" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={item.name} />
                                    </div>
                                    <div className="flex-1 flex flex-col justify-between py-1">
                                        <div>
                                            <h4 className="font-bold text-white text-base leading-tight">{item.name}</h4>
                                            <p className="text-[11px] text-zinc-500 mt-2 line-clamp-2 leading-relaxed">
                                                {item.desc}
                                            </p>
                                        </div>
                                        <div className="flex justify-between items-center mt-3">
                                            <span className="font-bold text-lg text-emerald-400">${item.price.toFixed(2)}</span>
                                            <button
                                                onClick={() => setCartCount(c => c + 1)}
                                                className="w-10 h-10 rounded-xl bg-zinc-800 text-white flex items-center justify-center border border-white/5 hover:bg-emerald-500 hover:text-black hover:border-emerald-500 transition-all active:scale-95"
                                            >
                                                <Plus className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Action Button */}
            <AnimatePresence>
                {cartCount > 0 && !showHistory && (
                    <motion.div 
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 100, opacity: 0 }}
                        className="fixed bottom-6 left-6 right-6 z-50"
                    >
                        <button className="w-full h-16 bg-gradient-to-r from-white to-zinc-200 text-black rounded-full font-black text-sm uppercase tracking-widest flex items-center justify-between px-8 shadow-2xl shadow-white/10 hover:scale-[1.02] transition-transform active:scale-95">
                            <span className="flex items-center gap-3">
                                <div className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center text-xs">
                                    {cartCount}
                                </div>
                                <span className="opacity-60">Ver Orden</span>
                            </span>
                            <span className="flex items-center gap-2">
                                Pagar <ChevronRight className="w-4 h-4" />
                            </span>
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

"use client"

import { useState } from "react"
import {
    ShoppingBag,
    ChevronLeft,
    Search,
    Plus,
    Info,
    BarChart3,
    ChevronRight
} from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const categories = ["Entradas", "Principales", "Postres", "Bebidas"]
const menuItems = [
    { id: 1, name: "Tacos de Ribeye", price: 15.00, desc: "Costilla de res premium con tortilla artesanal y salsa tatemada.", cat: "Entradas" },
    { id: 2, name: "Salmón al Eneldo", price: 28.00, desc: "Salmón fresco a la plancha con costra de hierbas y puré trufado.", cat: "Principales" },
    { id: 3, name: "Volcán de Chocolate", price: 12.00, desc: "Bizcocho tibio de chocolate amargo con centro líquido.", cat: "Postres" },
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
        <div className="min-h-screen bg-background pb-20 selection:bg-primary/30">
            {/* Header */}
            <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-secondary flex items-center justify-center border border-border">
                        <ChevronLeft className="w-5 h-5 text-foreground/60" />
                    </div>
                    <div>
                        <h1 className="font-bold text-lg leading-none tracking-tight">Resort del Sol</h1>
                        <div className="flex items-center gap-1.5 mt-1">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            <p className="text-[10px] text-foreground/40 uppercase tracking-widest font-black">Online</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => setShowHistory(!showHistory)}
                        className={cn(
                            "w-10 h-10 rounded-2xl flex items-center justify-center transition-all border",
                            showHistory ? "bg-primary border-primary text-white" : "bg-secondary border-border text-foreground/60"
                        )}
                    >
                        <BarChart3 className="w-5 h-5" />
                    </button>
                    <div className="relative">
                        <ShoppingBag className="w-6 h-6 text-foreground/60" />
                        {cartCount > 0 && (
                            <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-white text-[10px] flex items-center justify-center rounded-full font-bold shadow-lg shadow-primary/40">
                                {cartCount}
                            </span>
                        )}
                    </div>
                </div>
            </div>

            {showHistory ? (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-6 space-y-8"
                >
                    <div className="p-8 rounded-[2.5rem] bg-primary text-white overflow-hidden relative shadow-2xl shadow-primary/20">
                        <div className="relative z-10">
                            <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-1">Tu Impacto</p>
                            <h2 className="text-3xl font-black mb-4 tracking-tighter">¡Felicidades!</h2>
                            <p className="text-sm text-white/80 leading-relaxed font-medium">Eres nuestro cliente <span className="text-white underline font-black">#1</span> en Hamburguesa Wagyu este mes.</p>
                        </div>
                        <div className="absolute -bottom-4 -right-2 opacity-20 rotate-12">
                            <Info className="w-32 h-32" />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-6 rounded-[2rem] bg-card border border-border">
                            <p className="text-[10px] text-foreground/40 font-black uppercase tracking-widest mb-1">Gastado</p>
                            <h4 className="text-2xl font-black text-primary">$154k</h4>
                        </div>
                        <div className="p-6 rounded-[2rem] bg-card border border-border">
                            <p className="text-[10px] text-foreground/40 font-black uppercase tracking-widest mb-1">Pedidos</p>
                            <h4 className="text-2xl font-black text-primary">12</h4>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                            Últimos Pedidos
                            <div className="h-px flex-1 bg-border" />
                        </h3>
                        <div className="space-y-4">
                            {history.map((h, i) => (
                                <div key={i} className="flex justify-between items-center p-4 rounded-2xl border border-border hover:bg-secondary/30 transition-colors">
                                    <div>
                                        <p className="font-bold text-sm tracking-tight">{h.items}</p>
                                        <p className="text-[10px] text-foreground/40 mt-0.5">{h.date}</p>
                                    </div>
                                    <span className="font-black text-sm text-primary">${h.total.toFixed(2)}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={() => setShowHistory(false)}
                        className="w-full h-14 bg-secondary text-foreground rounded-2xl font-bold border border-border flex items-center justify-center gap-2"
                    >
                        <ChevronLeft className="w-4 h-4" /> Volver al Menú
                    </button>
                </motion.div>
            ) : (
                <>
                    {/* Hero Mini with Glassmorphism */}
                    <div className="px-6 py-8">
                        <div className="h-48 rounded-[2.5rem] bg-primary relative overflow-hidden flex items-center px-10 group cursor-pointer shadow-2xl shadow-primary/20">
                            <div className="relative z-10 text-white max-w-[70%]">
                                <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-4">
                                    <Plus className="w-6 h-6" />
                                </div>
                                <h2 className="text-3xl font-black mb-1 leading-none tracking-tighter italic">Especial IA</h2>
                                <p className="text-xs text-white/70 font-medium">Recomendación basada en tus gustos: Risotto de Langosta.</p>
                            </div>
                            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-black/40 via-transparent to-transparent opacity-50" />
                            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700" />
                        </div>
                    </div>

                    {/* Categories Horizontal - Minimalist */}
                    <div className="flex gap-3 overflow-x-auto px-6 mb-8 no-scrollbar scroll-smooth">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`whitespace-nowrap px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all duration-300 transform active:scale-95 ${activeCategory === cat ? "bg-primary text-white shadow-xl shadow-primary/30" : "bg-card text-foreground/40 border border-border hover:bg-secondary"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Menu List */}
                    <div className="px-6 space-y-6">
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="text-2xl font-black tracking-tighter">{activeCategory}</h3>
                            <Search className="w-5 h-5 text-foreground/30" />
                        </div>

                        {menuItems.map((item) => (
                            <div key={item.id} className="p-6 rounded-[2.5rem] bg-card border border-border flex gap-6 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 group">
                                <div className="w-28 h-28 rounded-3xl bg-secondary relative overflow-hidden flex-shrink-0 group-hover:scale-[1.02] transition-transform">
                                    <img src="/hero.png" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                                </div>
                                <div className="flex-1 flex flex-col justify-between py-1">
                                    <div>
                                        <div className="flex justify-between items-start">
                                            <h4 className="font-extrabold text-lg tracking-tight leading-tight">{item.name}</h4>
                                        </div>
                                        <p className="text-[12px] text-foreground/40 mt-1.5 line-clamp-2 leading-relaxed font-medium">
                                            {item.desc}
                                        </p>
                                    </div>
                                    <div className="flex justify-between items-center mt-4">
                                        <span className="font-black text-xl text-primary">${item.price.toFixed(2)}</span>
                                        <button
                                            onClick={() => setCartCount(c => c + 1)}
                                            className="w-12 h-12 bg-secondary text-foreground hover:bg-primary hover:text-white rounded-2xl flex items-center justify-center transition-all duration-300 border border-border hover:border-primary active:scale-90"
                                        >
                                            <Plus className="w-6 h-6" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}

            {/* Floating Bottom Button */}
            {cartCount > 0 && !showHistory && (
                <div className="fixed bottom-8 left-8 right-8 z-50">
                    <button className="w-full h-16 bg-primary text-white rounded-3xl font-black text-sm uppercase tracking-widest flex items-center justify-between px-10 shadow-3xl shadow-primary/40 animate-in fade-in slide-in-from-bottom-10 hover:scale-[1.02] transition-transform active:scale-95">
                        <span className="flex items-center gap-2">
                            <ShoppingBag className="w-5 h-5" />
                            {cartCount} Items
                        </span>
                        <span>Finalizar <ChevronRight className="w-5 h-5 inline ml-1" /></span>
                    </button>
                </div>
            )}
        </div>
    )
}

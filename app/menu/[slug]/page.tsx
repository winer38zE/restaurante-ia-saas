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

export default function PublicMenuPage() {
    const [cartCount, setCartCount] = useState(0)
    const [activeCategory, setActiveCategory] = useState("Principales")
    const [showHistory, setShowHistory] = useState(false)

    const history = [
        { date: "Hoy", items: "Hamburguesa Wagyu", total: 24.50 },
        { date: "Ayer", items: "Pizza Di'Ablo", total: 18.00 },
        { date: "3 Ene", items: "Pasta Carbonara", total: 16.50 },
    ]

    return (
        <div className="min-h-screen bg-background text-foreground pb-24 font-sans">
            {/* Header */}
            <div className="sticky top-0 z-50 bg-background/95 border-b border-border px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <button className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-muted transition-colors">
                        <ChevronLeft className="w-5 h-5 text-muted-foreground" />
                    </button>
                    <div>
                        <h1 className="font-semibold text-lg leading-none tracking-tight text-foreground">Resort del Sol</h1>
                        <div className="flex items-center gap-1.5 mt-0.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wide">Abierto</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setShowHistory(!showHistory)}
                        className={cn(
                            "w-9 h-9 rounded-full flex items-center justify-center transition-all border",
                            showHistory 
                                ? "bg-primary text-primary-foreground border-primary" 
                                : "bg-transparent border-border text-muted-foreground hover:bg-muted"
                        )}
                    >
                        <BarChart3 className="w-4 h-4" />
                    </button>
                    <div className="relative group cursor-pointer">
                        <div className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:opacity-90 transition-opacity">
                            <ShoppingBag className="w-4 h-4" />
                        </div>
                        {cartCount > 0 && (
                            <span className="absolute -top-1 -right-1 w-4 h-4 bg-destructive text-destructive-foreground text-[10px] flex items-center justify-center rounded-full font-bold border-2 border-background">
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
                        <div className="p-6 rounded-xl bg-muted/30 border border-border">
                            <div className="mb-4">
                                <p className="text-muted-foreground text-xs font-medium uppercase tracking-wide mb-1">Tu Estatus</p>
                                <h2 className="text-2xl font-bold tracking-tight text-foreground">¡Nivel Oro!</h2>
                                <p className="text-sm text-muted-foreground mt-2 max-w-[90%]">
                                    Has desbloqueado el postre secreto del chef. Pídelo hoy.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 rounded-xl bg-card border border-border">
                                <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wide mb-1">Total Gastado</p>
                                <h4 className="text-xl font-bold text-foreground">$154k</h4>
                            </div>
                            <div className="p-4 rounded-xl bg-card border border-border">
                                <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wide mb-1">Visitas</p>
                                <h4 className="text-xl font-bold text-primary">12</h4>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-4 px-1">Historial Reciente</h3>
                            <div className="space-y-2">
                                {history.map((h, i) => (
                                    <div key={i} className="flex justify-between items-center p-3 rounded-lg bg-card border border-border">
                                        <div>
                                            <p className="font-medium text-foreground text-sm">{h.items}</p>
                                            <p className="text-[11px] text-muted-foreground mt-0.5">{h.date}</p>
                                        </div>
                                        <span className="font-semibold text-sm text-foreground">${h.total.toFixed(2)}</span>
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
                        <div className="px-6 py-6">
                            <div className="h-48 rounded-xl bg-muted relative overflow-hidden flex items-end p-6 cursor-pointer group">
                                <img src="/hero.png" className="absolute inset-0 w-full h-full object-cover opacity-80" alt="Hero" />
                                <div className="absolute inset-0 bg-black/40" />
                                
                                <div className="relative z-10 w-full">
                                    <div className="flex justify-between items-end">
                                        <div>
                                            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-white/20 backdrop-blur-sm mb-2">
                                                <Flame className="w-3 h-3 text-white" />
                                                <span className="text-[10px] font-medium text-white uppercase tracking-wide">Recomendado</span>
                                            </div>
                                            <h2 className="text-2xl font-bold text-white tracking-tight">Ribeye A5</h2>
                                        </div>
                                        <button className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform">
                                            <Plus className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Categories */}
                        <div className="flex gap-2 overflow-x-auto px-6 mb-6 no-scrollbar pb-1">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-medium transition-all ${
                                        activeCategory === cat 
                                        ? "bg-foreground text-background" 
                                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                                    }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        {/* Menu Items */}
                        <div className="px-6 space-y-4">
                            <div className="flex items-center justify-between mb-2 px-1">
                                <h3 className="text-lg font-semibold text-foreground tracking-tight">{activeCategory}</h3>
                            </div>

                            {menuItems.map((item) => (
                                <div 
                                    key={item.id} 
                                    className="p-4 rounded-xl bg-card border border-border flex gap-4 hover:border-primary/50 transition-colors"
                                >
                                    <div className="w-20 h-20 rounded-lg bg-muted relative overflow-hidden flex-shrink-0">
                                        <img src="/hero.png" className="w-full h-full object-cover" alt={item.name} />
                                    </div>
                                    <div className="flex-1 flex flex-col justify-between py-0.5">
                                        <div>
                                            <h4 className="font-medium text-foreground text-sm">{item.name}</h4>
                                            <p className="text-[11px] text-muted-foreground mt-1 line-clamp-2">
                                                {item.desc}
                                            </p>
                                        </div>
                                        <div className="flex justify-between items-center mt-2">
                                            <span className="font-semibold text-sm text-foreground">${item.price.toFixed(2)}</span>
                                            <button
                                                onClick={() => setCartCount(c => c + 1)}
                                                className="w-8 h-8 rounded-md bg-muted text-muted-foreground flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                                            >
                                                <Plus className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Action Button */}
            <AnimatePresence>
                {cartCount > 0 && !showHistory && (
                    <motion.div 
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 50, opacity: 0 }}
                        className="fixed bottom-6 left-6 right-6 z-50"
                    >
                        <button className="w-full h-14 bg-foreground text-background rounded-full font-medium text-sm flex items-center justify-between px-6 shadow-xl hover:scale-[1.01] transition-transform">
                            <span className="flex items-center gap-3">
                                <div className="bg-background text-foreground w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
                                    {cartCount}
                                </div>
                                <span>Ver Orden</span>
                            </span>
                            <span className="flex items-center gap-2">
                                Total <ChevronRight className="w-4 h-4" />
                            </span>
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

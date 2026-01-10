"use client"

import {
    Zap,
    Settings,
    Menu,
    Terminal,
    Activity,
    Cpu,
    Layers,
    ChevronLeft,
    ChevronRight
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const sidebarItems = [
    { icon: Terminal, label: "Comando Central", href: "/dashboard" },
    { icon: Activity, label: "Contabilidad", href: "/admin/contabilidad" },
    { icon: Cpu, label: "Mentor IA", href: "/admin/mentor-ia" },
    { icon: Layers, label: "Menú Galáctico", href: "/dashboard/menu" },
    { icon: Settings, label: "Config", href: "/dashboard/settings" },
]

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname()
    const [collapsed, setCollapsed] = useState(false)

    return (
        <div className="flex min-h-screen bg-background text-foreground overflow-hidden selection:bg-primary/20">
            {/* Sidebar Cyber-Luxury */}
            <aside className={cn(
                "fixed left-0 top-0 h-full glass-luxury transition-all duration-700 z-50 border-r border-white/5",
                collapsed ? "w-20" : "w-72"
            )}>
                <div className="flex h-32 items-center justify-center border-b border-white/5 relative overflow-hidden">
                    {!collapsed && <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full animate-pulse" />}
                    <div className="relative flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 border border-primary/20 rounded-sm flex items-center justify-center text-primary glow-emerald">
                            <Zap className="w-5 h-5" />
                        </div>
                        {!collapsed && (
                            <div>
                                <h1 className="text-xl font-black tracking-[0.2em] uppercase leading-none">GastroIA</h1>
                                <p className="text-[8px] font-bold text-primary tracking-[0.3em] uppercase mt-1">SaaS Force One</p>
                            </div>
                        )}
                    </div>
                </div>

                <nav className="flex flex-col gap-1 p-4 mt-6">
                    {sidebarItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "group flex items-center gap-4 px-4 h-14 rounded-sm transition-all relative overflow-hidden",
                                pathname === item.href
                                    ? "bg-primary/10 border-l-2 border-primary text-primary"
                                    : "text-secondary hover:text-white hover:bg-white/5"
                            )}
                        >
                            <item.icon className={cn("w-5 h-5 transition-transform duration-300", pathname === item.href ? "scale-110" : "group-hover:scale-110")} />
                            {!collapsed && <span className="text-[10px] font-black uppercase tracking-[0.2em]">{item.label}</span>}
                            {pathname === item.href && <div className="absolute right-0 w-1 h-4 bg-primary blur-sm" />}
                        </Link>
                    ))}
                </nav>

                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 w-10 h-10 glass-luxury border-white/10 rounded-full flex items-center justify-center hover:bg-primary/10 transition-colors"
                >
                    {collapsed ? <ChevronRight className="w-4 h-4 text-primary" /> : <ChevronLeft className="w-4 h-4 text-primary" />}
                </button>
            </aside>

            {/* Main Content Area */}
            <main className={cn(
                "flex-1 transition-all duration-700 mt-0",
                collapsed ? "ml-20" : "ml-72"
            )}>
                <header className="h-20 glass-luxury border-b border-white/5 flex items-center justify-between px-10 sticky top-0 z-40">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full animate-ping" />
                            <span className="cyber-terminal">System: Online</span>
                        </div>
                        <span className="cyber-terminal">Node: 2026-X</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="h-10 px-4 glass-luxury border-white/10 flex items-center gap-3">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full glow-emerald" />
                            <span className="text-[10px] font-black text-secondary tracking-widest uppercase">Elite Access</span>
                        </div>
                    </div>
                </header>
                <div className="p-12 min-h-[calc(100vh-5rem)]">
                    {children}
                </div>
            </main>
        </div>
    )
}

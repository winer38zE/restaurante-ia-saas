"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
    LayoutDashboard,
    UtensilsCrossed,
    Settings,
    LogOut,
    Zap,
    MessageSquare,
    ChevronRight,
    Menu,
    DollarSign
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"

const sidebarItems = [
    { icon: LayoutDashboard, label: "Vista General", href: "/dashboard" },
    { icon: UtensilsCrossed, label: "Mi Menú", href: "/dashboard/menu" },
    { icon: DollarSign, label: "Finanzas Elite", href: "/admin/finanzas" },
    { icon: MessageSquare, label: "Pedidos IA", href: "/dashboard/orders" },
    { icon: Settings, label: "Ajustes", href: "/dashboard/settings" },
]

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname()
    const [collapsed, setCollapsed] = useState(false)

    return (
        <div className="flex min-h-screen bg-background text-foreground selection:bg-primary/20">
            {/* Sidebar Minimalist Elite */}
            <aside className={cn(
                "fixed left-0 top-0 h-full border-r border-border/30 bg-background transition-all duration-500 z-50",
                collapsed ? "w-24" : "w-72"
            )}>
                <div className="flex h-32 items-center px-8">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-background shadow-2xl shadow-primary/20">
                        <Zap className="h-6 w-6" />
                    </div>
                    {!collapsed && (
                        <div className="ml-4">
                            <span className="text-2xl font-black tracking-tighter">GastroIA</span>
                            <p className="text-[10px] font-black uppercase tracking-widest text-primary leading-none">Empire Edition</p>
                        </div>
                    )}
                </div>

                <nav className="flex flex-col gap-2 p-6 pt-4">
                    {sidebarItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "sidebar-item",
                                pathname === item.href && "sidebar-item-active"
                            )}
                        >
                            <item.icon className="h-5 w-5 flex-shrink-0" />
                            {!collapsed && <span className="font-bold text-sm tracking-tight">{item.label}</span>}
                        </Link>
                    ))}
                </nav>

                <div className="absolute bottom-8 left-0 w-full px-4">
                    <button className="flex w-full items-center gap-4 px-4 py-3 rounded-2xl text-foreground/40 hover:text-red-500 hover:bg-red-500/10 transition-all">
                        <LogOut className="h-5 w-5" />
                        {!collapsed && <span className="font-semibold text-sm">Cerrar Sesión</span>}
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className={cn(
                "flex-1 transition-all duration-300",
                collapsed ? "pl-20" : "pl-64"
            )}>
                <header className="h-20 border-b border-border flex items-center justify-between px-8 bg-background/50 backdrop-blur-md sticky top-0 z-40">
                    <button
                        onClick={() => setCollapsed(!collapsed)}
                        className="p-2 hover:bg-secondary rounded-lg transition-colors"
                    >
                        <Menu className="h-5 w-5" />
                    </button>

                    <div className="flex items-center gap-4">
                        <div className="text-right hidden sm:block">
                            <p className="text-sm font-bold">Resort del Sol</p>
                            <p className="text-xs text-foreground/40">Plan Premium</p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-accent" />
                    </div>
                </header>

                <div className="p-8">
                    {children}
                </div>
            </main>
        </div>
    )
}

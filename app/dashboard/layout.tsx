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
    BarChart3
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"

const sidebarItems = [
    { icon: LayoutDashboard, label: "Vista General", href: "/dashboard" },
    { icon: UtensilsCrossed, label: "Mi Menú", href: "/dashboard/menu" },
    { icon: BarChart3, label: "Crecimiento", href: "/dashboard/growth" },
    { icon: MessageSquare, label: "Pedidos IA", href: "/dashboard/orders" },
    { icon: Zap, label: "Herramientas IA", href: "/dashboard/ai" },
    { icon: Settings, label: "Configuración", href: "/dashboard/settings" },
]

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname()
    const [collapsed, setCollapsed] = useState(false)

    return (
        <div className="flex min-h-screen bg-background text-foreground">
            {/* Sidebar */}
            <aside className={cn(
                "fixed left-0 top-0 h-full border-r border-border bg-card/30 backdrop-blur-xl transition-all duration-300 z-50",
                collapsed ? "w-20" : "w-64"
            )}>
                <div className="flex h-20 items-center px-6 gap-3">
                    <div className="flex h-10 w-10 min-w-[2.5rem] items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary/20">
                        <Zap className="h-6 w-6" />
                    </div>
                    {!collapsed && <span className="text-xl font-bold tracking-tight">GastroIA</span>}
                </div>

                <nav className="flex flex-col gap-2 p-4 pt-10">
                    {sidebarItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-4 px-4 py-3 rounded-2xl transition-all group",
                                pathname === item.href
                                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                                    : "hover:bg-secondary text-foreground/60 hover:text-foreground"
                            )}
                        >
                            <item.icon className={cn("h-5 w-5", pathname === item.href ? "text-white" : "group-hover:text-primary")} />
                            {!collapsed && <span className="font-semibold text-sm">{item.label}</span>}
                            {!collapsed && pathname === item.href && <ChevronRight className="ml-auto h-4 w-4" />}
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

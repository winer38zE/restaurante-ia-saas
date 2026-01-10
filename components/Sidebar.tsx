"use client"

import {
    LayoutDashboard,
    Wallet,
    UtensilsCrossed,
    BrainCircuit,
    Settings,
    Menu,
    LogOut,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const sidebarItems = [
    { icon: LayoutDashboard, href: "/dashboard", label: "Dashboard" },
    { icon: UtensilsCrossed, href: "/cocina", label: "Cocina" },
    { icon: Menu, href: "/menu", label: "Menú" },
    { icon: Wallet, href: "/admin/finanzas", label: "Finanzas" },
    { icon: BrainCircuit, href: "/admin/mentor-ia", label: "Mentor IA" },
    { icon: Settings, href: "/admin", label: "Configuración" },
]

export default function Sidebar() {
    const pathname = usePathname()

    return (
        <aside className="fixed left-0 top-0 h-screen w-16 bg-slate-900/80 backdrop-blur-md border-r border-white/10 flex flex-col items-center py-8 z-50">
            <div className="mb-10">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-lg shadow-emerald-500/20 flex items-center justify-center">
                    <span className="font-bold text-white text-xl">E</span>
                </div>
            </div>

            <nav className="flex-1 flex flex-col gap-6 w-full px-2">
                {sidebarItems.map((item) => {
                    const isActive = pathname === item.href
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`
                relative p-3 rounded-xl transition-all duration-300 group flex justify-center
                ${isActive ? 'bg-white/10 text-emerald-400' : 'text-slate-400 hover:text-white hover:bg-white/5'}
              `}
                            title={item.label}
                        >
                            <item.icon className={`w-6 h-6 ${isActive ? 'stroke-[2.5px]' : 'stroke-2'}`} />

                            {/* Active Indicator */}
                            {isActive && (
                                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-emerald-500 rounded-r-full" />
                            )}

                            {/* Tooltip */}
                            <div className="absolute left-14 bg-slate-900 text-white text-xs font-medium px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10 pointer-events-none z-50">
                                {item.label}
                            </div>
                        </Link>
                    )
                })}
            </nav>

            <div className="mt-auto flex flex-col items-center gap-4">
                <button className="text-slate-500 hover:text-red-400 transition-colors" title="Cerrar Sesión">
                    <LogOut className="w-5 h-5" />
                </button>
                <button className="p-1">
                    <div className="w-8 h-8 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-slate-400 font-bold text-xs ring-2 ring-transparent hover:ring-emerald-500/50 transition-all">
                        JD
                    </div>
                </button>
            </div>
        </aside>
    )
}

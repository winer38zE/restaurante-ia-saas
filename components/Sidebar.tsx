"use client"

import {
    LayoutDashboard,
    Wallet,
    UtensilsCrossed,
    BrainCircuit,
    Settings,
    Menu,
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
        <aside className="fixed left-0 top-0 h-screen w-20 bg-black/60 backdrop-blur-md border-r border-white/5 flex flex-col items-center py-8 z-50">
            <div className="mb-12">
                <div className="w-10 h-10 flex items-center justify-center">
                    {/* Minimalist Logo */}
                    <div className="w-8 h-8 rotate-45 border-2 border-emerald-500/50 flex items-center justify-center">
                        <div className="w-4 h-4 bg-emerald-500/20 backdrop-blur-sm"></div>
                    </div>
                </div>
            </div>

            <nav className="flex-1 flex flex-col gap-8 w-full px-4 items-center">
                {sidebarItems.map((item) => {
                    const isActive = pathname === item.href
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`
                group relative flex justify-center items-center p-2 rounded-lg transition-all duration-300
                ${isActive ? 'text-emerald-400' : 'text-zinc-600 hover:text-white'}
              `}
                            title={item.label}
                        >
                            <item.icon className="w-5 h-5 stroke-[1.5px]" />

                            {/* Minimal Active Dot */}
                            {isActive && (
                                <div className="absolute -right-4 w-1 h-1 bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                            )}
                        </Link>
                    )
                })}
            </nav>

            <div className="mt-auto opacity-40 hover:opacity-100 transition-opacity cursor-pointer">
                <div className="w-8 h-8 rounded-full border border-white/10 bg-zinc-900 flex items-center justify-center text-[10px] text-zinc-400">
                    JD
                </div>
            </div>
        </aside>
    )
}

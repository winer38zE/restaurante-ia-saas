"use client"

import {
    LayoutGrid,
    Cpu,
    Activity,
    LogOut,
    Menu,
    X,
    Settings,
    CreditCard
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const navItems = [
        { label: "Dashboard", href: "/admin/dashboard", icon: <LayoutGrid className="w-5 h-5" /> },
        { label: "Mentor IA", href: "/admin/ia-mentor", icon: <Cpu className="w-5 h-5" /> },
        { label: "Contabilidad", href: "/admin/contabilidad", icon: <Activity className="w-5 h-5" /> },
        { label: "Plan & Pagos", href: "/admin/pricing", icon: <CreditCard className="w-5 h-5" /> },
    ]

    return (
        <div className="flex min-h-screen bg-[#050505] text-white overflow-hidden relative font-sans">
            {/* Background Glows */}
            <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden fixed top-4 right-4 z-50 p-2 bg-zinc-900/80 backdrop-blur-md rounded-lg border border-white/10"
            >
                {isMobileMenuOpen ? <X /> : <Menu />}
            </button>

            {/* Sidebar Navigation */}
            <aside className={`
                fixed lg:relative z-40 h-screen w-72 
                glass-panel m-0 rounded-none border-y-0 border-l-0 border-r border-white/5
                flex flex-col transition-transform duration-300 ease-in-out
                ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
            `}>
                <div className="p-8 pb-4">
                    <Link href="/" className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                            <div className="w-4 h-4 bg-emerald-500 rounded-sm rotate-45" />
                        </div>
                        <span className="text-xl font-bold tracking-tight">G-IA<span className="text-emerald-500">.Admin</span></span>
                    </Link>

                    <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4 px-2">
                        Plataforma
                    </div>
                </div>

                <nav className="flex-1 px-4 space-y-2">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`
                                    flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group
                                    ${isActive
                                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                                        : 'text-zinc-400 hover:bg-white/5 hover:text-white border border-transparent'
                                    }
                                `}
                            >
                                <span className={isActive ? 'text-emerald-400' : 'text-zinc-500 group-hover:text-white'}>
                                    {item.icon}
                                </span>
                                <span className="font-medium">{item.label}</span>
                                {isActive && (
                                    <div className="ml-auto w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
                                )}
                            </Link>
                        )
                    })}
                </nav>

                <div className="p-4 border-t border-white/5">
                    <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-xl p-4 border border-white/5 mb-4 group cursor-pointer hover:border-emerald-500/20 transition-colors">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-xs font-bold text-indigo-400">
                                JD
                            </div>
                            <div className="overflow-hidden">
                                <p className="text-sm font-bold truncate group-hover:text-emerald-400 transition-colors">John Doe</p>
                                <p className="text-xs text-zinc-500 truncate">Admin Access</p>
                            </div>
                        </div>
                    </div>

                    <button className="flex items-center gap-3 w-full px-4 py-3 text-red-400 hover:bg-red-500/10 rounded-xl transition-all text-sm font-medium">
                        <LogOut className="w-4 h-4" />
                        <span>Cerrar Sesión</span>
                    </button>

                    <div className="mt-4 text-center">
                        <p className="text-[10px] text-zinc-600 uppercase tracking-widest">v2.6.0 Stable</p>
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 relative overflow-y-auto h-screen no-scrollbar">
                {children}
            </main>
        </div>
    )
}

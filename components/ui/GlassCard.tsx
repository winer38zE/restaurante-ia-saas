
import React from 'react'

interface GlassCardProps {
    title: string
    value: string | number
    trend?: string
    trendUp?: boolean
    icon?: React.ReactNode
    className?: string
}

export const GlassCard = ({ title, value, trend, trendUp, icon, className = "" }: GlassCardProps) => {
    return (
        <div className={`backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 shadow-xl hover:bg-white/10 transition-all duration-300 ${className}`}>
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-slate-400 text-sm font-medium uppercase tracking-wider">{title}</h3>
                {icon && <div className="text-slate-400">{icon}</div>}
            </div>
            <div className="space-y-2">
                <p className="text-4xl font-bold text-white tracking-tight">{value}</p>

                {trend && (
                    <div className="flex items-center gap-2">
                        <span className={`text-sm font-bold ${trendUp ? 'text-emerald-400' : 'text-rose-400'}`}>
                            {trend}
                        </span>
                    </div>
                )}
            </div>
        </div>
    )
}

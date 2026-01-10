
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
        <div className={`glass-card p-6 flex flex-col justify-between h-full min-h-[140px] group ${className}`}>
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-label group-hover:text-white transition-colors duration-300">{title}</h3>
                {icon && <div className="text-zinc-600 group-hover:text-emerald-400 transition-colors duration-300">{icon}</div>}
            </div>

            <div className="space-y-1">
                <p className="text-3xl text-value text-white group-hover:text-emerald-50 transition-colors duration-300">{value}</p>

                {trend && (
                    <div className="flex items-center gap-2">
                        <span className={`text-[10px] font-bold tracking-wider uppercase ${trendUp ? 'text-emerald-500' : 'text-rose-500'}`}>
                            {trend}
                        </span>
                    </div>
                )}
            </div>
        </div>
    )
}

"use client"

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts"
import {
  DollarSign,
  Users,
  ShoppingBag,
  TrendingUp,
  BrainCircuit,
  ArrowUpRight,
  Activity
} from "lucide-react"

import { GlassCard } from "@/components/ui/GlassCard"

const data = [
  { name: "Lun", ventas: 4200, margen: 2800 },
  { name: "Mar", ventas: 3800, margen: 2100 },
  { name: "Mie", ventas: 5400, margen: 3900 },
  { name: "Jue", ventas: 4900, margen: 3200 },
  { name: "Vie", ventas: 7800, margen: 5100 },
  { name: "Sab", ventas: 9200, margen: 6400 },
  { name: "Dom", ventas: 8100, margen: 5800 },
]

export default function RootDashboard() {
  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      {/* Top Bar */}
      <div className="flex justify-between items-end border-b border-white/5 pb-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_#10b981]"></div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-emerald-500/80 font-medium">System Online</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-light tracking-[-0.02em] text-white">
            Empire <span className="font-serif italic text-emerald-500 opacity-80">Dashboard</span>
          </h1>
        </div>
        <div className="flex gap-4">
          <div className="text-right hidden md:block">
            <p className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">Current Session</p>
            <p className="font-mono text-emerald-400">24h 02m 12s</p>
          </div>
        </div>
      </div>

      {/* KPI Grid - Trading Style */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <GlassCard
          title="Total Revenue"
          value="$124,592.00"
          trend="+12.4%"
          trendUp={true}
          icon={<DollarSign className="w-4 h-4" />}
        />
        <GlassCard
          title="Active Users"
          value="1,420"
          trend="+8.1%"
          trendUp={true}
          icon={<Users className="w-4 h-4" />}
        />
        <GlassCard
          title="Avg. Ticket"
          value="$84.20"
          trend="-2.3%"
          trendUp={false}
          icon={<ShoppingBag className="w-4 h-4" />}
        />
        <GlassCard
          title="Net Margin"
          value="38.5%"
          trend="+4.2%"
          trendUp={true}
          icon={<Activity className="w-4 h-4" />}
        />
      </div>

      {/* Main Analysis Section */}
      <div className="grid lg:grid-cols-12 gap-6 min-h-[500px]">

        {/* Chart Area */}
        <div className="lg:col-span-8 glass-panel !p-0 overflow-hidden flex flex-col border-white/10">
          <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              Capital Flow Analysis
            </h3>
            <div className="flex gap-4">
              <span className="text-[10px] text-gray-500 font-bold uppercase cursor-pointer hover:text-white transition-colors">Intraday</span>
              <span className="text-[10px] text-emerald-400 font-bold uppercase border-b border-emerald-500 pb-0.5">Weekly</span>
              <span className="text-[10px] text-gray-500 font-bold uppercase cursor-pointer hover:text-white transition-colors">Monthly</span>
            </div>
          </div>

          <div className="flex-1 w-full relative">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorEmerald" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.03)" strokeDasharray="0" />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#9ca3af', fontSize: 10, fontWeight: 500 }}
                  dy={10}
                />
                <YAxis hide />
                <Tooltip
                  cursor={{ stroke: '#10b981', strokeWidth: 1, strokeDasharray: '4 4' }}
                  contentStyle={{
                    backgroundColor: 'rgba(10, 10, 10, 0.8)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '12px',
                    boxShadow: '0 10px 40px -10px rgba(16,185,129,0.2)'
                  }}
                  itemStyle={{ color: '#10b981', fontSize: '12px', fontWeight: 'bold' }}
                  labelStyle={{ display: 'none' }}
                />
                <Area
                  type="monotone"
                  dataKey="ventas"
                  stroke="#10b981"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#colorEmerald)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* AI Insight Side Panel */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <div className="flex-1 glass-card p-8 flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <div className="flex items-center gap-3 mb-8">
              <BrainCircuit className="w-5 h-5 text-emerald-400" />
              <span className="text-xs font-bold text-white uppercase tracking-widest">AI Strategic Advisor</span>
            </div>

            <div className="space-y-6 flex-1">
              <div>
                <p className="text-[10px] text-zinc-500 uppercase tracking-widest mb-2">Insight</p>
                <p className="text-lg font-light leading-relaxed text-zinc-200">
                  &quot;Revenue projected to exceed target by <span className="text-emerald-400 font-medium">15%</span> this weekend based on current momentum.&quot;
                </p>
              </div>

              <div className="h-px w-full bg-white/5"></div>

              <div>
                <p className="text-[10px] text-zinc-500 uppercase tracking-widest mb-2">Recommendation</p>
                <p className="text-sm text-zinc-400 leading-relaxed font-mono">
                  &gt; Increase inventory for &apos;Premium Wagyu&apos; by 20 units.<br />
                  &gt; Activate &apos;Weekend Special&apos; campaign.
                </p>
              </div>
            </div>

            <button className="w-full mt-8 py-3 px-6 rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 text-xs font-bold uppercase tracking-widest text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all duration-300 shadow-lg shadow-emerald-500/5 hover:shadow-emerald-500/20 flex items-center justify-between group">
              Execute Action
              <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </button>
          </div>

          <div className="h-24 glass-card p-6 flex items-center justify-between border-l-4 border-l-emerald-500">
            <div>
              <p className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">Server Status</p>
              <p className="text-white font-mono text-sm">US-EAST-1 <span className="text-emerald-500">● 12ms</span></p>
            </div>
            <Activity className="w-8 h-8 text-zinc-800" />
          </div>
        </div>

      </div>
    </div>
  )
}

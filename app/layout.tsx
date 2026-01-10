"use client"

import Sidebar from "@/components/Sidebar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-black text-white overflow-x-hidden selection:bg-emerald-500/20">
        <Sidebar />
        <main className="pl-16 min-h-screen">
          <div className="p-8 lg:p-12 max-w-[1600px] mx-auto">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}

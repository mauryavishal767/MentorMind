"use client"

import { useAuth } from "@/hooks/use-auth"

export function DashboardHeader() {
  const { user } = useAuth()
  const name = user?.user_metadata?.full_name?.split(" ")[0] || "there"

  return (
    <div className="space-y-1">
      <h1 className="text-3xl font-bold tracking-tight">
        Welcome back, {name}! 👋
      </h1>
      <p className="text-lg text-muted-foreground">
        Let&apos;s continue your journey to becoming a job-ready developer
      </p>
    </div>
  )
}
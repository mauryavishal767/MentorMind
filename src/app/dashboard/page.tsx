import { Metadata } from "next"
import { DashboardHeader } from "@/components/dashboard/header"
import { DashboardStats } from "@/components/dashboard/stats"
import { DashboardCards } from "@/components/dashboard/cards"

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Your learning progress dashboard",
}

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col gap-8 p-8">
      <DashboardHeader />
      <DashboardStats />
      <DashboardCards />
    </div>
  )
}
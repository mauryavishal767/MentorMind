"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { signOut } from "@/lib/auth/auth-service"
import { cn } from "@/lib/utils"
import {
  BarChart3Icon,
  BookOpenIcon,
  BrainCircuitIcon,
  GraduationCapIcon,
  LayoutDashboardIcon,
  LogOutIcon,
  Settings2Icon,
  TrophyIcon,
} from "lucide-react"

const sidebarItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboardIcon,
  },
  {
    title: "Daily Roadmap",
    href: "/dashboard/roadmap",
    icon: BookOpenIcon,
  },
  {
    title: "AI Mentor",
    href: "/dashboard/mentor",
    icon: BrainCircuitIcon,
  },
  {
    title: "Project Builder",
    href: "/dashboard/projects",
    icon: BarChart3Icon,
  },
  {
    title: "Mock Interviews",
    href: "/dashboard/interviews",
    icon: GraduationCapIcon,
  },
  {
    title: "Progress Tracker",
    href: "/dashboard/progress",
    icon: BarChart3Icon,
  },
  {
    title: "Leaderboard",
    href: "/dashboard/leaderboard",
    icon: TrophyIcon,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings2Icon,
  },
]

export function SidebarNav() {
  const pathname = usePathname()

  return (
    <div className="flex h-screen w-64 flex-col border-r bg-card px-3 py-4">
      <div className="mb-8 px-3">
        <h1 className="text-xl font-bold text-primary">MentorMind</h1>
      </div>
      <nav className="flex-1 space-y-1">
        {sidebarItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                isActive 
                  ? "bg-primary text-primary-foreground" 
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              )}
            >
              <Icon className="h-4 w-4" />
              {item.title}
            </Link>
          )
        })}
      </nav>
      <div className="border-t pt-4">
        <button
          onClick={() => signOut()}
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          <LogOutIcon className="h-4 w-4" />
          Sign Out
        </button>
      </div>
    </div>
  )
}
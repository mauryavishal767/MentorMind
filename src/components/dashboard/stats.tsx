import { cn } from '@/lib/utils'

export function DashboardStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatCard
        label="Overall Progress"
        value="65%"
        className="bg-gradient-to-br from-blue-500 to-purple-600"
      />
      <StatCard
        label="Projects Completed"
        value="12"
        className="bg-gradient-to-br from-green-500 to-emerald-600"
      />
      <StatCard
        label="Hours Coded"
        value="45"
        className="bg-gradient-to-br from-orange-500 to-red-600"
      />
      <StatCard
        label="Mock Interviews"
        value="8"
        className="bg-gradient-to-br from-purple-500 to-pink-600"
      />
    </div>
  )
}

function StatCard({
  label,
  value,
  className,
}: {
  label: string
  value: string
  className?: string
}) {
  return (
    <div className={cn("rounded-xl p-6 text-white", className)}>
      <div className="text-sm font-medium">{label}</div>
      <div className="text-2xl font-bold">{value}</div>
    </div>
  )
}
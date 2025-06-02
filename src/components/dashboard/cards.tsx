import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"

export function DashboardCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle>Today&apos;s Goals</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="goal1" checked />
            <label
              htmlFor="goal1"
              className="text-sm line-through opacity-70"
            >
              Complete React Hooks tutorial
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="goal2" />
            <label htmlFor="goal2" className="text-sm">
              Build a Todo App component
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="goal3" />
            <label htmlFor="goal3" className="text-sm">
              Practice array methods in JavaScript
            </label>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>AI Mentor Insights</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Great progress on React! I notice you&apos;re struggling with state
            management. Let&apos;s focus on useState and useEffect patterns
            tomorrow.
          </p>
          <Button>Chat with Mentor</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Current Project</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h3 className="font-medium">E-commerce Website</h3>
            <p className="text-sm text-muted-foreground">
              Building a full-stack e-commerce site with React and Node.js
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progress</span>
              <span>75%</span>
            </div>
            <Progress value={75} />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
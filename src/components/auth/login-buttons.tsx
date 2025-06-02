import { signInWithProvider } from '@/lib/auth/auth-service'
import { Button } from '@/components/ui/button'

export function LoginButtons() {
  return (
    <div className="flex flex-col gap-4">
      <Button
        onClick={() => signInWithProvider('google')}
        variant="outline"
      >
        Continue with Google
      </Button>
      <Button
        onClick={() => signInWithProvider('github')}
        variant="outline"
      >
        Continue with GitHub
      </Button>
    </div>
  )
}
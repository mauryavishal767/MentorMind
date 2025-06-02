import { useEffect, useState } from 'react'
import { AuthSession } from '@/lib/auth/types'
import { getCurrentSession } from '@/lib/auth/auth-service'

export function useAuth() {
  const [session, setSession] = useState<AuthSession['user']>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getSession() {
      const { session, error } = await getCurrentSession()
      setSession(session?.user ?? null)
      setLoading(false)
    }

    getSession()
  }, [])

  return { user: session, loading }
}